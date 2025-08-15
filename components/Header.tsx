'use client';

import { useState } from 'react';

interface HeaderData {
  topBanner?: {
    title?: string;
    subtitle?: string;
    logoText?: string;
    watchText?: string;
  };
  secondBanner?: {
    text?: string;
  };
  navigation?: {
    logo?: string;
    menuItems?: string[];
    shopButton?: string;
    teamSalesButton?: string;
  };
}

interface HeaderProps {
  data?: HeaderData;
}

export default function Header({ data }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Default values if no data is provided
  const topBanner = data?.topBanner || {
    title: "2025 PERFECT GAME DICK'S ALL-AMERICAN CLASSIC",
    subtitle: "AUG 17 | PETCO PARK | SAN DIEGO, CA",
    logoText: "PG ALL-AMERICAN CLASSIC DICK'S",
    watchText: "WATCH LIVE ON PERFECTGAME TV"
  };

  const secondBanner = data?.secondBanner || {
    text: "THE WORLD'S LARGEST AND MOST COMPREHENSIVE SCOUTING ORGANIZATION | 2,345 MLB PLAYERS | 16,767 MLB DRAFT SELECTIONS"
  };

  const navigation = data?.navigation || {
    logo: "PG PERFECT GAME",
    menuItems: ['EVENTS', 'SHOWCASES', 'SOFTBALL', 'RANKINGS', 'STATS', 'RECRUITING', 'CONTENT', 'ALUMNI', 'PG.TV', 'ARM CARE', 'ABOUT'],
    shopButton: "PG SHOP",
    teamSalesButton: "PG TEAM SALES"
  };

  return (
    <header className="bg-[#1a365d] text-white">
      {/* Top Banner */}
      <div className="bg-[#1a365d] py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">{topBanner.title}</h1>
            <p className="text-sm">{topBanner.subtitle}</p>
          </div>
          <div className="text-right">
            <div className="text-sm font-semibold">{topBanner.logoText}</div>
            <div className="text-xs">{topBanner.watchText}</div>
          </div>
        </div>
      </div>

      {/* Second Banner */}
      <div className="bg-[#1a365d] py-2 px-4 border-t border-[#2d5a87]">
        <div className="max-w-7xl mx-auto text-center text-sm">
          {secondBanner.text}
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#2d5a87] py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold mr-8">{navigation.logo}</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            {navigation.menuItems?.map((item) => (
              <a key={item} href="#" className="text-white hover:text-blue-200 transition-colors">
                {item}
              </a>
            ))}
          </div>

          {/* Right side buttons and icons */}
          <div className="flex items-center space-x-4">
            <button className="bg-[#1a365d] text-white px-4 py-2 rounded hover:bg-[#0f2a4a] transition-colors">
              {navigation.shopButton}
            </button>
            <button className="bg-[#1a365d] text-white px-4 py-2 rounded hover:bg-[#0f2a4a] transition-colors">
              {navigation.teamSalesButton}
            </button>
            
            {/* Icons */}
            <div className="flex space-x-3 ml-4">
              <button className="text-white hover:text-blue-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </button>
              <button className="text-white hover:text-blue-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="text-white hover:text-blue-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              {navigation.menuItems?.map((item) => (
                <a key={item} href="#" className="text-white hover:text-blue-200 transition-colors py-2">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
