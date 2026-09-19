import React, { useState } from 'react';
import Header from './components/Header.js';
import SplitHero from './components/SplitHero.js';
import AboutCompany from './components/AboutCompany.js';
import ServicesSection from './components/ServicesSection.js';
import FeaturedProjects from './components/FeaturedProjects.js';
import WhyChooseUs from './components/WhyChooseUs.js';
import OurProcess from './components/OurProcess.js';
import CallToAction from './components/CallToAction.js';
import ContactSection from './components/ContactSection.js';
import Footer from './components/Footer.js';
import QuoteModal from './components/QuoteModal.js';
import Toast from './components/Toast.js';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteService, setQuoteService] = useState('');
  const [quoteCategory, setQuoteCategory] = useState('');
  const [toast, setToast] = useState(null);

  const handleOpenQuote = (service = '', category = '') => {
    setQuoteService(service);
    setQuoteCategory(category);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setQuoteService('');
    setQuoteCategory('');
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-root">
      {/* Navigation Header */}
      <Header onOpenQuote={() => handleOpenQuote()} />

      {/* 1. Signature Split-Screen Hero UI */}
      <SplitHero 
        onSelectCategory={(cat) => setActiveCategory(cat)} 
        onOpenQuote={() => handleOpenQuote()} 
      />

      {/* 2. About Company Concept */}
      <AboutCompany onOpenQuote={() => handleOpenQuote()} />

      {/* 3. Services (Interior 8 + Construction 8) */}
      <ServicesSection 
        activeCategory={activeCategory} 
        onCategoryChange={(cat) => setActiveCategory(cat)} 
        onOpenQuoteWithService={(svc, cat) => handleOpenQuote(svc, cat)}
      />

      {/* 4. Featured Projects Showcase */}
      <FeaturedProjects onOpenQuote={() => handleOpenQuote()} />

      {/* 5. Why Choose Us (6 Pillars) */}
      <WhyChooseUs />

      {/* 6. Our 6-Stage Process */}
      <OurProcess />

      {/* 7. Full-Width Call to Action */}
      <CallToAction 
        onOpenQuote={() => handleOpenQuote()} 
        onScrollToContact={scrollToContact} 
      />

      {/* 8. Contact & Consultation Form */}
      <ContactSection onShowToast={showToast} />

      {/* 9. Comprehensive Footer */}
      <Footer 
        onOpenQuote={() => handleOpenQuote()} 
        onSelectCategory={(cat) => setActiveCategory(cat)} 
      />

      {/* Interactive Quotation Calculator Modal */}
      <QuoteModal 
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        initialService={quoteService}
        initialCategory={quoteCategory}
        onShowToast={showToast}
      />

      {/* Global Toast Notifications */}
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}
    </div>
  );
}
