"use client";

import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { ContactPage } from "./components/ContactPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'contact'>('home');

  const handlePageChange = (page: 'home' | 'contact') => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'contact' && <ContactPage />}
    </div>
  );
}
