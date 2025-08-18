'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArticleType } from '@/types/article-type.generated';
import { RichTextComponent } from '@/components/RichTextResolver';
import imageLoader from '@/lib/imageLoader';

interface ArticleDetailPageProps {
  article: ArticleType;
}

export default function ArticleDetailPage({ article }: ArticleDetailPageProps) {
  const imageUrl = article.elements.image?.value[0]?.url;
  const imageAlt = article.elements.image?.value[0]?.description || article.elements.title?.value || 'Article image';
  const articleTitle = article.elements.title?.value || 'Untitled Article';
  const articleSubtitle = article.elements.subtitle?.value;
  const articleDate = article.elements.date?.value;
  const articleSummary = article.elements.summary?.value;
  const authorItem = article.elements.author?.value?.[0];
  const authorName = typeof authorItem === 'string' 
    ? authorItem 
    : authorItem && typeof authorItem === 'object' && 'elements' in authorItem
      ? `${(authorItem as any).elements?.first_name?.value || ''} ${(authorItem as any).elements?.last_name?.value || ''}`.trim() || 'Author'
      : 'Author';
  const category = article.elements.category?.value[0];
  const tags = article.elements.tags?.value || [];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative">
        {/* Breadcrumb */}
        <nav className="relative z-10 bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/articles" className="hover:text-blue-600 transition-colors">
                Articles
              </Link>
              <span>/</span>
              <span className="text-gray-900 truncate">{articleTitle}</span>
            </div>
          </div>
        </nav>

        {/* Article Header */}
        <header className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center">
              {/* Category */}
              {category && (
                <div className="mb-4">
                  <span className="inline-block bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                    {category.name}
                  </span>
                </div>
              )}

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {articleTitle}
              </h1>

              {/* Subtitle */}
              {articleSubtitle && (
                <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
                  {articleSubtitle}
                </p>
              )}

              {/* Summary */}
              {articleSummary && (
                <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
                  {articleSummary}
                </p>
              )}

              {/* Meta Information */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600">
                {/* Date */}
                {articleDate && (
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <time dateTime={articleDate}>
                      {new Date(articleDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                )}

                {/* Author */}
                {authorItem && (
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-blue-600 font-medium">
                      {authorName}
                    </span>
                  </div>
                )}

                {/* Read time estimation */}
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>
                    {Math.max(1, Math.ceil((article.elements.body?.value?.length || 1000) / 1000))} min read
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Featured Image */}
      {imageUrl && (
        <div className="relative h-64 md:h-96 bg-gray-200">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            loader={imageLoader}
          />
        </div>
      )}

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-gray max-w-none">
          {/* Article Body */}
          {article.elements.body && (
            <RichTextComponent richTextElement={article.elements.body} />
          )}
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                >
                  {typeof tag === 'string' 
                    ? tag 
                    : typeof tag === 'object' && tag && 'elements' in tag 
                      ? (tag as any).elements?.label?.value || 'Tag'
                      : 'Tag'
                  }
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <Link
              href="/articles"
              className="inline-flex items-center px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Articles
            </Link>

            <div className="flex space-x-4">
              {/* Share buttons */}
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: articleTitle,
                      text: articleSummary || articleSubtitle,
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard!');
                  }
                }}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                Share
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}