import React from 'react';
import Header from './components/Header';
import Footer from './components/SiteFooter';
import SinglePage from './components/SinglePage';
import './App.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <SinglePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
