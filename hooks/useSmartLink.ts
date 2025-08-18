import { IContentItem } from '@kontent-ai/delivery-sdk';

interface SmartLinkAttributes {
  'data-kontent-item-id'?: string;
  'data-kontent-element-codename'?: string;
  'data-kontent-add-button'?: boolean;
  'data-kontent-add-button-insert-position'?: 'start' | 'end';
}

/**
 * Hook to generate Smart Link data attributes for content items and elements
 */
export function useSmartLink() {
  /**
   * Get Smart Link attributes for a content item
   */
  const getItemAttributes = (item?: IContentItem): SmartLinkAttributes => {
    if (!item) return {};
    
    return {
      'data-kontent-item-id': item.system.id,
    };
  };

  /**
   * Get Smart Link attributes for a specific element within a content item
   */
  const getElementAttributes = (
    item?: IContentItem, 
    elementCodename?: string
  ): SmartLinkAttributes => {
    if (!item || !elementCodename) return {};
    
    return {
      'data-kontent-item-id': item.system.id,
      'data-kontent-element-codename': elementCodename,
    };
  };

  /**
   * Get Smart Link attributes for add buttons (for linked items)
   */
  const getAddButtonAttributes = (
    item?: IContentItem,
    elementCodename?: string,
    insertPosition: 'start' | 'end' = 'end'
  ): SmartLinkAttributes => {
    if (!item || !elementCodename) return {};
    
    return {
      'data-kontent-item-id': item.system.id,
      'data-kontent-element-codename': elementCodename,
      'data-kontent-add-button': true,
      'data-kontent-add-button-insert-position': insertPosition,
    };
  };

  /**
   * Check if we should enable Smart Link (in preview mode)
   */
  const isPreviewMode = (): boolean => {
    if (typeof window === 'undefined') return false;
    
    return new URLSearchParams(window.location.search).has('preview') ||
           window.location.hostname === 'localhost' ||
           process.env.NODE_ENV === 'development';
  };

  return {
    getItemAttributes,
    getElementAttributes,
    getAddButtonAttributes,
    isPreviewMode,
  };
}

/**
 * Utility function to conditionally apply Smart Link attributes
 */
export function smartLinkAttributes(
  condition: boolean,
  attributes: SmartLinkAttributes
): SmartLinkAttributes {
  return condition ? attributes : {};
}