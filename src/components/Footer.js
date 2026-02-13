// components/Footer.jsx
import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-zinc-900 backdrop-blur-sm border-t border-indigo-500/20 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-zinc-400 text-sm">
            © 2026 Eyerusalem Abebe. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <Link 
            href="mailto:jeryabebe1321@gmail.com" 
            className="text-zinc-400 hover:text-indigo-400 transition-colors text-sm"
          >
            Email
          </Link>
          <Link 
            href="https://github.com/eyerusabebe0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-indigo-400 transition-colors text-sm"
          >
            GitHub
          </Link>
          <Link 
            href="/contact" 
            className="text-zinc-400 hover:text-indigo-400 transition-colors text-sm"
          >
            Contact
          </Link>
        </div>
        
        <div className="text-zinc-500 text-xs">
          Built with Next.js & Tailwind
        </div>
      </div>
    </footer>
  );
}

export default Footer;