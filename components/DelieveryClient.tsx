import { createDeliveryClient } from '@kontent-ai/delivery-sdk';

const deliveryClient = createDeliveryClient({
  environmentId: process.env.KONTENT_PROJECT_ID || '',
  previewApiKey: process.env.KONTENT_PREVIEW_API_KEY || '',
  defaultQueryConfig: {
    usePreviewMode: true
  }
});

export default deliveryClient;