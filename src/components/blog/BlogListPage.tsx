import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Search, Tag, Calendar, Clock } from 'lucide-react';
import { blogPosts, getAllCategories, getAllTags } from '../../data/blogPosts';

export default function BlogListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');

  const categories = getAllCategories();
  const tags = getAllTags();

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === '' ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.keywords.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);

    return matchesSearch && matchesCategory && matchesTag;
  });

  return (
    <>
      <Helmet>
        <title>MoneyGraph Articles | AI Agents, Payment Integration, Fintech Tutorials</title>
        <meta
          name="description"
          content="Learn how to integrate MoneyGraph with GitHub Copilot, Amazon Q, Cursor, Claude, and more. Tutorials, guides, and best practices for AI-native payment development."
        />
        <meta
          name="keywords"
          content="moneygraph articles, ai payment integration, github copilot payments, amazon q fintech, cursor payment sdk, fintech tutorials, payment api guides, ai coding agents, cross-border payments"
        />
        <link rel="canonical" href="https://moneygraph.ai/blog" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            'name': 'MoneyGraph Articles',
            'description': 'Tutorials and guides for AI-native payment development',
            'url': 'https://moneygraph.ai/blog',
            'publisher': {
              '@type': 'Organization',
              'name': 'MoneyGraph',
              'logo': {
                '@type': 'ImageObject',
                'url': 'https://moneygraph.ai/logo.png'
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen py-8 tablet:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 tablet:mb-12">
            <h1 className="text-3xl tablet:text-4xl desktop:text-5xl font-bold mb-3 tablet:mb-4">
              <span className="gradient-text">MoneyGraph Articles</span>
            </h1>
            <p className="text-lg tablet:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Learn how to build AI-native payment applications with MoneyGraph SDK
            </p>
          </div>

          <div className="glass-strong rounded-xl p-4 tablet:p-6 mb-8 tablet:mb-12">
            <div className="grid grid-cols-1 tablet:grid-cols-3 gap-3 tablet:gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 tablet:py-3 text-sm tablet:text-base bg-gray-800/50 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-gray-400"
                />
              </div>

              <div className="relative">
                <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none text-white appearance-none cursor-pointer"
                >
                  <option value="all">All Categories</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none text-white appearance-none cursor-pointer"
                >
                  <option value="all">All Tags</option>
                  {tags.slice(0, 20).map(tag => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                </select>
              </div>
            </div>

            {(searchTerm || selectedCategory !== 'all' || selectedTag !== 'all') && (
              <div className="mt-4 flex items-center justify-between">
                <p className="text-gray-400">
                  Found {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedTag('all');
                  }}
                  className="text-cyan-400 hover:text-cyan-300 transition"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6 tablet:gap-8">
            {filteredPosts.map(post => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="glass-strong rounded-xl overflow-hidden hover:scale-105 transition-all group"
              >
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center">
                  <div className="text-6xl">
                    {post.category === 'Product Updates' ? '🚀' :
                     post.category === 'Tutorials' ? '📚' : '💡'}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readingTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="glass-strong rounded-xl p-12 text-center">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">No articles found</h3>
              <p className="text-gray-400">
                Try adjusting your search terms or filters
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
