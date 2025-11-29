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
          content="payments API, global payouts, financial tools, payment processing, MoneyGraph, fintech SDK, accept payments, payroll software, virtual cards"
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
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
