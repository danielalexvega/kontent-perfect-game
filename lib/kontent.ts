import { createDeliveryClient } from '@kontent-ai/delivery-sdk';

const environmentId = process.env.KONTENT_PROJECT_ID || '';
const apiKey = process.env.KONTENT_PREVIEW_API_KEY || '';

// Debug logging
if (typeof window === 'undefined') { // Only log on server side
  console.log('Kontent.ai Configuration:', {
    environmentId: environmentId ? 'Set' : 'Missing',
    apiKey: apiKey ? 'Set' : 'Missing',
    hasBoth: !!(environmentId && apiKey)
  });
}

export const deliveryClient = createDeliveryClient({
  environmentId,
  previewApiKey: apiKey,
});

// Content item codenames
export const CONTENT_ITEMS = {
  HOMEPAGE: 'homepage',
} as const;
