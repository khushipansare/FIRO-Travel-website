import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthPage } from './components/AuthPage';
import { HeroSection } from './components/HeroSection';
import { DestinationGrid } from './components/DestinationGrid';
import { PaymentPage } from './components/PaymentPage';
import { Navbar } from './components/Navbar';

const Dashboard: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <DestinationGrid />
      <footer className="bg-firo-navy text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-serif font-bold mb-2">FIRO.</h2>
            <p className="text-gray-400 text-sm">Experience the unseen India.</p>
          </div>
          <div className="flex gap-6 text-sm text-gray-400 font-sans">
            <a href="#" className="hover:text-firo-gold">Privacy Policy</a>
            <a href="#" className="hover:text-firo-gold">Terms of Service</a>
            <a href="#" className="hover:text-firo-gold">Contact Support</a>
          </div>
          <div className="text-gray-500 text-xs">
            © 2024 FIRO Travel. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

const PaymentLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <PaymentPage />
    </>
  )
}

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route 
          path="/auth" 
          element={
            isAuthenticated ? <Navigate to="/" /> : <AuthPage onLogin={() => setIsAuthenticated(true)} />
          } 
        />
        <Route 
          path="/" 
          element={
            isAuthenticated ? <Dashboard /> : <Navigate to="/auth" />
          } 
        />
        <Route
          path="/payment/:id"
          element={
            isAuthenticated ? <PaymentLayout /> : <Navigate to="/auth" />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
