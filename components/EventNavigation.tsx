'use client';

import Link from 'next/link';

interface EventNavigationProps {
  pages: any[];
}

export default function EventNavigation({ 
  pages 
}: EventNavigationProps) {
  return (
    <div className="w-full bg-white py-6">
      <div className="max-w-7xl mx-auto px-4">

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {pages.map((page, index) => {
            const pageTitle = page.elements?.headline?.value || page.elements?.title?.value || page.system?.name || 'Untitled';
            const pageSlug = page.elements?.url?.value || page.elements?.url_slug?.value || '#';
            
            return (
              <Link
                key={page.system.id}
                href={pageSlug}
                className="inline-flex items-center px-6 py-3 bg-white border border-blue-600 text-blue-600 font-medium text-sm uppercase tracking-wide rounded-lg hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
              >
                {pageTitle}
                {/* Add hamburger menu icon for "EVENT INFO" type pages */}
                {pageTitle.toLowerCase().includes('event info') && (
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
