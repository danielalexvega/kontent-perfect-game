'use client';

import { useEffect, useRef } from 'react';
import { KontentSmartLink } from '@kontent-ai/smart-link';

interface SmartLinkProviderProps {
  children: React.ReactNode;
  environmentId?: string;
  enabled?: boolean;
}

export default function SmartLinkProvider({ 
  children, 
  environmentId = process.env.NEXT_PUBLIC_KONTENT_PROJECT_ID,
  enabled = true 
}: SmartLinkProviderProps) {
  const smartLinkRef = useRef<any>(null);

  useEffect(() => {
    // Only initialize in browser and when enabled
    if (typeof window === 'undefined' || !enabled || !environmentId) {
      return;
    }

    // Check if we're in preview mode (you can customize this logic)
    const isPreview = new URLSearchParams(window.location.search).has('preview') || 
                     window.location.hostname === 'localhost' ||
                     process.env.NODE_ENV === 'development';

    if (!isPreview) {
      return;
    }

    // Cleanup any existing instance
    if (smartLinkRef.current) {
      try {
        smartLinkRef.current.destroy();
      } catch (error) {
        console.warn('Error destroying existing Smart Link instance:', error);
      }
      smartLinkRef.current = null;
    }

    // Initialize Smart Link
    const initializeSmartLink = async () => {
      try {
        const instance = KontentSmartLink.initialize({
          queryParam: 'preview',
          debug: process.env.NODE_ENV === 'development',
        });
        
        smartLinkRef.current = instance;
        console.log('Kontent.ai Smart Link initialized successfully');

      } catch (error) {
        console.error('Failed to initialize Kontent.ai Smart Link:', error);
      }
    };

    // Initialize after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(initializeSmartLink, 100);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      if (smartLinkRef.current) {
        try {
          smartLinkRef.current.destroy();
        } catch (error) {
          console.warn('Error destroying Smart Link instance during cleanup:', error);
        }
        smartLinkRef.current = null;
      }
    };
  }, [environmentId, enabled]);

  return (
    <div 
      data-kontent-environment-id={environmentId}
      data-kontent-language-codename="default"
    >
      {children}
    </div>
  );
}