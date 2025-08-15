'use client';

import { useState } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1a365d] text-white p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <div className="text-sm">
          This website uses cookies to ensure you get the best experience.{' '}
          <a href="#" className="underline hover:text-blue-200">
            Learn more
          </a>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap"
        >
          Got It!
        </button>
      </div>
    </div>
  );
}
