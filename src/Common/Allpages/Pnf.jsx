import React from "react";
import { Link, useNavigate } from "react-router-dom";


export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl flex flex-col md:flex-row items-center gap-6 p-8 md:p-12">
      
        <figure className="flex-shrink-0 w-36 h-36 md:w-48 md:h-48 flex items-center justify-center bg-gray-100 rounded-lg p-4">
         
          <svg
            viewBox="0 0 120 120"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            aria-hidden
          >
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0" stopColor="#60a5fa" />
                <stop offset="1" stopColor="#7c3aed" />
              </linearGradient>
            </defs>

            <rect x="6" y="20" width="108" height="80" rx="8" fill="#fff" stroke="url(#g)" strokeWidth="3" />
            <circle cx="36" cy="60" r="10" fill="url(#g)" opacity="0.95" />
            <path d="M62 50c8 0 18 8 26 16" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round" fill="none" />
            
          </svg>
        </figure>

        {/* Right: text */}
        <section className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">404</h1>
          <p className="mt-2 text-lg md:text-xl text-gray-600">Page not found — the page you're looking for doesn't exist.</p>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium shadow hover:opacity-95 transition"
            >
              Go home
            </Link>

          
          </div>

          <p className="mt-6 text-sm text-gray-400">Or try searching from the navigation or check the URL for typos.</p>
        </section>
      </div>

      {/* small footer note */}
      <div className="absolute bottom-6 text-center w-full text-xs text-gray-400">
        © {new Date().getFullYear()} Your Company — All rights reserved
      </div>
    </main>
  );
}