"use client";
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile h-16 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-secondary/40' : 'bg-transparent border-transparent'}`}>
      <span className="font-display-lg-mobile text-display-lg-mobile text-primary tracking-tighter drop-shadow-md">Divine Studio</span>
      <button className="material-symbols-outlined text-primary text-3xl drop-shadow-md transition-transform hover:scale-110 active:scale-95">menu</button>
    </header>
  );
}
