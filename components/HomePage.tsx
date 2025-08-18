'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import HtmlToPortableText from './HtmlToPortableText';
import { LandingPageType } from '@/types/landing-page-type.generated';
import { RichTextComponent } from './RichTextResolver';
import ArticleLayout from './ArticleLayout';
import imageLoader from '@/lib/imageLoader';

// Configuration - easily change the content item codename here
const CONTENT_CODENAME = 'iowa_league_landing_page';

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
                
        // Fetch content from our API route with codename parameter
        const response = await fetch(`/api/content?codename=${CONTENT_CODENAME}`);
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Content received:', data);

        setContent(data);
      } catch (err: any) {
        console.error('Error fetching content:', err);
        
        let errorMessage = 'Failed to load content from CMS';
        if (err.message.includes('404')) {
          errorMessage = `Content item "${CONTENT_CODENAME}" not found. Please check the codename in Kontent.ai.`;
        } else if (err.message.includes('401')) {
          errorMessage = 'Authentication failed. Please check your API keys.';
        } else if (err.message.includes('403')) {
          errorMessage = 'Access denied. Please check your API key permissions.';
        }
        
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading content from CMS...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-4">
          <p className="text-red-600 mb-4 font-semibold">{error}</p>
          <p className="text-gray-600 mb-4">Make sure your .env.local file has the correct Kontent.ai credentials:</p>
          <code className="bg-gray-100 p-2 rounded text-sm block mb-4 text-left">
            KONTENT_PROJECT_ID=your_project_id<br/>
            KONTENT_PREVIEW_API_KEY=your_preview_api_key
          </code>
          <p className="text-gray-600 mb-4 text-sm">
            Also ensure that:<br/>
            • The content item with codename "iowa_league_landing_page" exists in Kontent.ai<br/>
            • Your API key has the correct permissions<br/>
            • The content item is published or you're using a preview API key
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const heroImageUrl = content?.item?.elements?.hero_image?.value[0]?.url;
  console.log('Rendering with hero image URL:', heroImageUrl);

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-blue-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl font-bold">
            {content?.system?.name || 'Perfect Game'}
          </h1>
        </div>
      </header>
      
      <main>
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Hero Image/Logo */}
            {heroImageUrl ? (
              <div className="mb-8">
                <Image
                  src={heroImageUrl}
                  alt={content?.item?.elements?.hero_image?.value[0]?.description || 'PG Iowa League Logo'}
                  width={1000}
                  height={1000} 
                  sizes="100vw"
                  className="mx-auto w-auto h-auto"
                  priority
                  loader={imageLoader}
                  onLoad={() => console.log('Image loaded successfully')}
                  onError={(e) => console.error('Image failed to load:', e)}
                />
              </div>
            ) : (
              <div className="mb-8">
                {/* Fallback logo design based on the image description */}
                <div className="relative w-64 h-64 mx-auto">
                  {/* Main diamond shape */}
                  <div className="absolute inset-0 transform rotate-45 bg-blue-900 border-4 border-gray-400">
                    {/* PG text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                      <span className="text-4xl font-bold">PG</span>
                      {/* Iowa banner */}
                      <div className="mt-4 bg-white text-blue-900 px-3 py-1 rounded-sm">
                        <span className="text-sm font-bold">IOWA</span>
                      </div>
                    </div>
                    {/* Corner diamonds (bases) */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 bg-white transform rotate-45"></div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-white transform rotate-45"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white transform rotate-45"></div>
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white transform rotate-45"></div>
                  </div>
                </div>
              </div>
            )}

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              {content?.item?.elements?.headline?.value || '2025 PG IOWA SPRING LEAGUE'}
            </h2>

            {/* Subheadline */}
            {content?.item?.elements?.subheadline?.value && (
              <p className="text-xl text-gray-600 mb-8">
                {content.item.elements.subheadline.value}
              </p>
            )}

            {/* Body Copy */}
            {content?.item?.elements?.body_copy?.value && (
              <div className="text-lg text-gray-700 mb-8"> 
                   <RichTextComponent richTextElement={content.item.elements.body_copy} />
              </div>
            )}

            {/* Article Layout
            {content?.item?.elements?.body_copy?.linkedItems && (
              <div className="text-lg text-gray-700 mb-8" >
                <ArticleLayout articles={content.item.elements.body_copy.linkedItems[1].elements.article_layout.linkedItems}>

                </ArticleLayout>
              </div>
            )} */}


          </div>
        </section>

        {/* Debug section - remove in production */}
        {/* {process.env.NODE_ENV === 'development' && content && (
          <section className="py-8 px-4 bg-gray-100">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-lg font-semibold mb-4">Content from Kontent.ai (Debug):</h3>
              <pre className="bg-white p-4 rounded text-sm overflow-auto">
                {JSON.stringify(content, null, 2)}
              </pre>
            </div>
          </section>
        )} */}
      </main>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Perfect Game. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
