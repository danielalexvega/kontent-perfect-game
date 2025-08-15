import { NextResponse } from 'next/server';
import deliveryClient from '@/components/DelieveryClient';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const codename = searchParams.get('codename') || 'iowa_league_landing_page';

    console.log('API Route - Environment variables:', {
      projectId: process.env.KONTENT_PROJECT_ID ? 'Set' : 'Missing',
      apiKey: process.env.KONTENT_PREVIEW_API_KEY ? 'Set' : 'Missing'
    });

    console.log('API Route - Fetching content for codename:', codename);

    const response = await deliveryClient
      .item(codename)
      .toPromise();

    console.log('API Route - Kontent.ai response:', response);

    if (response.data) {
      return NextResponse.json(response.data);
    } else {
      return NextResponse.json(
        { error: 'No data received from Kontent.ai' },
        { status: 404 }
      );
    }
  } catch (error: any) {
    console.error('API Route - Error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch content',
        details: error.message,
        status: error.response?.status
      },
      { status: 500 }
    );
  }
}
