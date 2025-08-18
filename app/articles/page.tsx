import { deliveryClient } from '@/lib/kontent';
import { ArticleType } from '@/types/article-type.generated';
import ArticleLayout from '@/components/ArticleLayout';

async function getArticles(): Promise<ArticleType[]> {
  try {
    const response = await deliveryClient
      .items<ArticleType>()
      .type('article')
      .orderByDescending('elements.date')
      .depthParameter(2)
      .toPromise();

    return response.data.items;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

export const metadata = {
  title: 'Articles - Perfect Game',
  description: 'Stay updated with the latest news, insights, and updates from Perfect Game.',
};

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest Articles
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news, insights, and updates from Perfect Game.
          </p>
        </div>
      </header>

      {/* Articles */}
      <ArticleLayout 
        articles={articles} 
        title=""
        subtitle=""
        maxArticles={999}
      />
    </div>
  );
}