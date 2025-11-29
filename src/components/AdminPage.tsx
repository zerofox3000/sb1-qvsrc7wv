import { useState, useEffect } from 'react';
import { supabase, type KycSubmission, type SalesInquiry, type ApiKey } from '../lib/supabase';
import { Plus, Eye, EyeOff, Check, X, Clock } from 'lucide-react';
import { getTierInfo } from '../lib/constants';

export default function AdminPage() {
  const [kycSubmissions, setKycSubmissions] = useState<KycSubmission[]>([]);
  const [salesInquiries, setSalesInquiries] = useState<SalesInquiry[]>([]);
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [showApiKeyForm, setShowApiKeyForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showKeys, setShowKeys] = useState<Record<string, boolean>>({});
  const [newApiKey, setNewApiKey] = useState<Partial<ApiKey>>({
    account_name: '',
    live_key: '',
    test_key: '',
    webhook_secret: '',
    notes: '',
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [kycResult, salesResult, keysResult] = await Promise.all([
        supabase.from('kyc_submissions').select('*').order('created_at', { ascending: false }),
        supabase.from('sales_inquiries').select('*').order('created_at', { ascending: false }),
        supabase.from('api_keys').select('*').order('created_at', { ascending: false }),
      ]);

      if (kycResult.data) setKycSubmissions(kycResult.data);
      if (salesResult.data) setSalesInquiries(salesResult.data);
      if (keysResult.data) setApiKeys(keysResult.data);
    } catch (error) {
      console.error('Failed to load data:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateKycStatus = async (id: string, status: 'approved' | 'rejected') => {
    try {
      await supabase.from('kyc_submissions').update({ status }).eq('id', id);
      loadData();
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const updateSalesStatus = async (id: string, status: SalesInquiry['status']) => {
    try {
      await supabase.from('sales_inquiries').update({ status }).eq('id', id);
      loadData();
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const addApiKey = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await supabase.from('api_keys').insert([newApiKey]);
      setNewApiKey({
        account_name: '',
        live_key: '',
        test_key: '',
        webhook_secret: '',
        notes: '',
      });
      setShowApiKeyForm(false);
      loadData();
    } catch (error) {
      console.error('Failed to add API key:', error);
    }
  };

  const toggleKeyVisibility = (id: string) => {
    setShowKeys((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  const stats = {
    totalKyc: kycSubmissions.length,
    small: kycSubmissions.filter(s => s.subscription_tier === 'small_business').length,
    medium: kycSubmissions.filter(s => s.subscription_tier === 'medium_business').length,
    enterprise: kycSubmissions.filter(s => s.subscription_tier === 'enterprise').length,
    totalSales: salesInquiries.length,
    newSales: salesInquiries.filter(s => s.status === 'new').length,
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          <span className="gradient-text">Admin Dashboard</span>
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-white">{stats.totalKyc}</div>
            <div className="text-sm text-gray-400">Total KYC</div>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-cyan-400">{stats.small}</div>
            <div className="text-sm text-gray-400">Small Biz</div>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-emerald-400">{stats.medium}</div>
            <div className="text-sm text-gray-400">Medium</div>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-yellow-400">{stats.enterprise}</div>
            <div className="text-sm text-gray-400">Enterprise</div>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-white">{stats.totalSales}</div>
            <div className="text-sm text-gray-400">Sales Leads</div>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-cyan-400">{stats.newSales}</div>
            <div className="text-sm text-gray-400">New Leads</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">KYC Submissions</h2>
            </div>

            <div className="space-y-4">
              {kycSubmissions.map((submission) => {
                const tierInfo = getTierInfo(submission.services?.length || 0);
                return (
                  <div key={submission.id} className="glass-strong rounded-xl p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="font-semibold text-lg">
                          {submission.first_name} {submission.last_name}
                        </div>
                        <div className="text-sm text-gray-400">{submission.email}</div>
                        {submission.business_name && (
                          <div className="text-sm text-gray-400">Business: {submission.business_name}</div>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${tierInfo.badgeColor}`}>
                          {tierInfo.name}
                        </span>
                        {submission.status === 'pending' && (
                          <Clock className="w-5 h-5 text-yellow-400" />
                        )}
                        {submission.status === 'approved' && (
                          <Check className="w-5 h-5 text-emerald-400" />
                        )}
                        {submission.status === 'rejected' && <X className="w-5 h-5 text-red-400" />}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {submission.services?.map(service => (
                        <span key={service} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs">
                          {service.replace(/_/g, ' ')}
                        </span>
                      ))}
                    </div>

                    {submission.status === 'pending' && (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => updateKycStatus(submission.id!, 'approved')}
                          className="flex-1 btn-primary text-sm py-2"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => updateKycStatus(submission.id!, 'rejected')}
                          className="flex-1 btn-secondary text-sm py-2 border-red-500/30 hover:border-red-500/60"
                        >
                          Reject
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Sales Inquiries</h2>
            </div>

            <div className="space-y-4">
              {salesInquiries.map((inquiry) => (
                <div key={inquiry.id} className="glass-strong rounded-xl p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="font-semibold text-lg">{inquiry.company_name}</div>
                      <div className="text-sm text-gray-400">{inquiry.contact_name}</div>
                      <div className="text-sm text-gray-400">{inquiry.email}</div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      inquiry.status === 'new' ? 'bg-cyan-500/20 text-cyan-400' :
                      inquiry.status === 'contacted' ? 'bg-yellow-500/20 text-yellow-400' :
                      inquiry.status === 'qualified' ? 'bg-emerald-500/20 text-emerald-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {inquiry.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                    <div><span className="text-gray-400">Size:</span> {inquiry.company_size}</div>
                    <div><span className="text-gray-400">Volume:</span> {inquiry.monthly_volume}</div>
                    <div><span className="text-gray-400">Timeline:</span> {inquiry.timeline}</div>
                    <div><span className="text-gray-400">Services:</span> {inquiry.services_interest?.length || 0}</div>
                  </div>

                  {inquiry.status === 'new' && (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => updateSalesStatus(inquiry.id!, 'contacted')}
                        className="flex-1 btn-primary text-sm py-2"
                      >
                        Mark Contacted
                      </button>
                      <button
                        onClick={() => updateSalesStatus(inquiry.id!, 'qualified')}
                        className="flex-1 btn-secondary text-sm py-2"
                      >
                        Qualify
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">API Keys</h2>
            <button
              onClick={() => setShowApiKeyForm(!showApiKeyForm)}
              className="btn-primary text-sm flex items-center"
            >
              <Plus className="w-4 h-4 mr-1" />
              Add Key
            </button>
          </div>

          {showApiKeyForm && (
            <form onSubmit={addApiKey} className="glass-strong rounded-xl p-6 mb-4 space-y-4">
              <input
                type="text"
                required
                value={newApiKey.account_name}
                onChange={(e) => setNewApiKey({ ...newApiKey, account_name: e.target.value })}
                className="input-glass"
                placeholder="Account Name"
              />
              <input
                type="text"
                required
                value={newApiKey.live_key}
                onChange={(e) => setNewApiKey({ ...newApiKey, live_key: e.target.value })}
                className="input-glass"
                placeholder="Live Key"
              />
              <input
                type="text"
                required
                value={newApiKey.test_key}
                onChange={(e) => setNewApiKey({ ...newApiKey, test_key: e.target.value })}
                className="input-glass"
                placeholder="Test Key"
              />
              <input
                type="text"
                required
                value={newApiKey.webhook_secret}
                onChange={(e) => setNewApiKey({ ...newApiKey, webhook_secret: e.target.value })}
                className="input-glass"
                placeholder="Webhook Secret"
              />
              <div className="flex space-x-2">
                <button type="submit" className="flex-1 btn-primary">Save</button>
                <button type="button" onClick={() => setShowApiKeyForm(false)} className="flex-1 btn-secondary">Cancel</button>
              </div>
            </form>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            {apiKeys.map((key) => (
              <div key={key.id} className="glass-strong rounded-xl p-6">
                <div className="font-semibold text-lg mb-2">{key.account_name}</div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Live:</span>
                    <div className="flex items-center space-x-2">
                      <code className="text-cyan-400 font-mono">
                        {showKeys[key.id!] ? key.live_key : '••••••••••'}
                      </code>
                      <button
                        onClick={() => toggleKeyVisibility(key.id!)}
                        className="text-gray-400 hover:text-white"
                      >
                        {showKeys[key.id!] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
