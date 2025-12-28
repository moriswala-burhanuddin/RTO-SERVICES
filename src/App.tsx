import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import CarLoader from './components/CarLoader';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const PageLoader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Trigger loader on route change (and initial load)
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loader on every page transition

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <CarLoader />}
      <div className={loading ? 'hidden' : 'block'}>
        {children}
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <SmoothScroll>
        <ScrollToTop />
        <Header />

        <main>
          <PageLoader>
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Suspense>
          </PageLoader>
        </main>

        <Footer />
      </SmoothScroll>
    </Router>
  );
}

export default App;
