'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArticleType } from '@/types/article-type.generated';
import imageLoader from '@/lib/imageLoader';
import { useSmartLink, smartLinkAttributes } from '@/hooks/useSmartLink';

interface ArticleLayoutProps {
  articles: ArticleType[];
  title?: string;
  subtitle?: string;
  maxArticles?: number;
}

export default function ArticleLayout({ 
  articles, 
  title = "Latest Articles",
  subtitle = "Stay updated with the latest news and insights",
  maxArticles = 6 
}: ArticleLayoutProps) {
  const { getItemAttributes, isPreviewMode } = useSmartLink();
  const isPreview = isPreviewMode();
  
  // Limit articles to maxArticles
  const displayArticles = articles.slice(0, maxArticles);

  if (!displayArticles.length) {
    return (
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">No Articles Available</h2>
            <p className="text-gray-600">Check back soon for new content.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayArticles.map((article, index) => {
            const imageUrl = article.elements.image?.value[0]?.url;
            const imageAlt = article.elements.image?.value[0]?.description || article.elements.title?.value || 'Article image';
            const articleTitle = article.elements.title?.value || 'Untitled Article';
            const articleSubtitle = article.elements.subtitle?.value;
            const articleDate = article.elements.date?.value;
            const articleSlug = article.elements.slug?.value;
            
            return (
              <article 
                key={article.system.id} 
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                {...smartLinkAttributes(isPreview, getItemAttributes(article))}
              >
                {/* Article Link */}
                <Link href={articleSlug ? `/articles/${articleSlug}` : '#'} className="block">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loader={imageLoader}
                      />
                    ) : (
                      // Fallback for articles without images - Scout Notes style
                      <div className="w-full h-full bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
                        {/* Background pattern */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute top-4 right-4 w-16 h-16 bg-blue-400 rounded-full opacity-30"></div>
                          <div className="absolute bottom-8 left-6 w-8 h-8 bg-blue-300 rounded-full opacity-40"></div>
                          <div className="absolute top-1/2 right-8 w-6 h-6 bg-blue-500 rounded-full opacity-25"></div>
                        </div>
                        
                        {/* Hand-drawn style elements */}
                        <div className="absolute inset-0">
                          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                            <path d="M20 30 Q30 20 40 30 T60 30" stroke="white" strokeWidth="0.5" fill="none" opacity="0.3"/>
                            <path d="M70 60 Q80 50 90 60" stroke="white" strokeWidth="0.5" fill="none" opacity="0.2"/>
                            <circle cx="25" cy="70" r="1" fill="white" opacity="0.4"/>
                            <circle cx="75" cy="25" r="0.8" fill="white" opacity="0.3"/>
                            <path d="M15 80 L18 77 L21 80" stroke="white" strokeWidth="0.3" fill="none" opacity="0.4"/>
                          </svg>
                        </div>

                        {/* Baseball diamond logo */}
                        <div className="absolute top-4 left-4">
                          <div className="relative w-12 h-12">
                            {/* Diamond shape */}
                            <div className="absolute inset-0 transform rotate-45 border-2 border-white rounded-sm">
                              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                <span className="text-xs font-bold">PG</span>
                                <div className="mt-1 bg-white text-blue-900 px-1 py-0.5 rounded-sm">
                                  <span className="text-xs font-bold">IOWA</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Scout Notes text */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <h3 className="text-white font-bold text-lg tracking-wider">
                              <span className="block">SCOUT</span>
                              <span className="block">NOTES</span>
                            </h3>
                          </div>
                        </div>

                        {/* Player silhouette */}
                        <div className="absolute bottom-4 right-4 opacity-10">
                          <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9ZM19 9H14V4H5V21H19V9Z"/>
                          </svg>
                        </div>
                      </div>
                    )}
                    
                    {/* Category badge */}
                    {article.elements.category?.value[0]?.name && (
                      <div className="absolute top-3 right-3">
                        <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                          {article.elements.category.value[0].name}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                      {articleTitle}
                    </h3>
                    
                    {/* Subtitle */}
                    {articleSubtitle && (
                      <p className="text-gray-600 mb-3 line-clamp-2">
                        {articleSubtitle}
                      </p>
                    )}
                    
                    {/* Summary */}
                    {article.elements.summary?.value && (
                      <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                        {article.elements.summary.value}
                      </p>
                    )}
                    
                    {/* Meta information */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      {/* Date */}
                      {articleDate && (
                        <time dateTime={articleDate}>
                          {new Date(articleDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </time>
                      )}
                      
                      {/* Author */}
                      {article.elements.author?.value[0] && (
                        <span className="text-blue-600 font-medium">
                          {article.elements.author.value[0]}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        {/* View All Articles Button */}
        {articles.length > maxArticles && (
          <div className="text-center mt-12">
            <Link 
              href="/articles" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              View All Articles
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
