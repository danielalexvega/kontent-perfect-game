import { notFound } from 'next/navigation';
import { deliveryClient } from '@/lib/kontent';
import { ArticleType } from '@/types/article-type.generated';
import ArticleDetailPage from '@/components/ArticleDetailPage';

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getArticle(slug: string): Promise<ArticleType | null> {
  try {
    const response = await deliveryClient
      .items<ArticleType>()
      .queryConfig({
        usePreviewMode: true,
      })
      .type('article')
      .equalsFilter('elements.slug', slug)
      .depthParameter(2)
      .toPromise();

    return response.data.items[0] || null;
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }

  return {
    title: article.elements.title?.value || 'Article',
    description: article.elements.summary?.value || article.elements.subtitle?.value || 'Read this article on Perfect Game',
    openGraph: {
      title: article.elements.title?.value || 'Article',
      description: article.elements.summary?.value || article.elements.subtitle?.value || 'Read this article on Perfect Game',
      images: article.elements.image?.value[0]?.url ? [article.elements.image.value[0].url] : [],
      type: 'article',
      publishedTime: article.elements.date?.value,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  return <ArticleDetailPage article={article} />;
}