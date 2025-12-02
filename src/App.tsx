import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import SignupPage from './components/SignupPage';
import PricingPage from './components/PricingPage';
import SalesContactPage from './components/SalesContactPage';
import AdminPage from './components/AdminPage';
import RecipesPage from './components/RecipesPage';
import RecipeDetailPage from './components/RecipeDetailPage';
import AIOverviewPage from './components/ai/AIOverviewPage';
import GettingStartedPage from './components/ai/GettingStartedPage';
import ChatGPTPage from './components/ai/ChatGPTPage';
import ClaudePage from './components/ai/ClaudePage';
import CursorPage from './components/ai/CursorPage';
import BoltPage from './components/ai/BoltPage';
import Base44Page from './components/ai/Base44Page';
import ReplitPage from './components/ai/ReplitPage';
import BlogListPage from './components/blog/BlogListPage';
import BlogPostPage from './components/blog/BlogPostPage';

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>MoneyGraph.AI - Next Generation AI-Native Financial Tools</title>
        <meta
          name="description"
          content="Global payments, payouts, and commerce powered by regulated fintech. Accept payments, process payroll, and issue cards with MoneyGraph SDK."
        />
        <meta
          name="keywords"
          content="payments API, global payouts, financial tools, payment processing, MoneyGraph, fintech SDK, accept payments, payroll software, virtual cards, AI integration"
        />
        <link rel="canonical" href="https://moneygraph.ai" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact-sales" element={<SalesContactPage />} />
            <Route path="/ADMIN987" element={<AdminPage />} />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/recipes/:slug" element={<RecipeDetailPage />} />
            <Route path="/ai" element={<AIOverviewPage />} />
            <Route path="/ai/getting-started" element={<GettingStartedPage />} />
            <Route path="/ai/chatgpt" element={<ChatGPTPage />} />
            <Route path="/ai/claude" element={<ClaudePage />} />
            <Route path="/ai/cursor" element={<CursorPage />} />
            <Route path="/ai/bolt" element={<BoltPage />} />
            <Route path="/ai/boltnew" element={<BoltPage />} />
            <Route path="/ai/base44" element={<Base44Page />} />
            <Route path="/ai/replit" element={<ReplitPage />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
