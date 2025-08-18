# Kontent.ai Smart Link Integration

This project includes Kontent.ai Smart Link integration for live preview functionality. This allows content editors to make real-time changes directly from the preview interface.

## Features

✅ **Live Preview** - Edit content directly in the preview interface  
✅ **Smart Link Data Attributes** - Automatically added to content elements  
✅ **Environment Detection** - Only activates in development or with `?preview` query parameter  
✅ **Article Detail Pages** - Full Smart Link support for articles  
✅ **Article Listings** - Smart Link support for article cards  

## How it Works

### 1. SmartLinkProvider
- Wraps the entire application in `app/layout.tsx`
- Automatically initializes Smart Link in preview mode
- Handles cleanup and re-initialization

### 2. Smart Link Hook (`useSmartLink`)
- Provides utilities for adding data attributes
- Handles preview mode detection
- Generates proper Smart Link attributes

### 3. Data Attributes
Smart Link data attributes are automatically added to:
- Article containers (`data-kontent-item-id`)
- Article titles (`data-kontent-element-codename="title"`)
- Article subtitles (`data-kontent-element-codename="subtitle"`)
- Article summaries (`data-kontent-element-codename="summary"`)
- Article bodies (`data-kontent-element-codename="body"`)
- Article images (`data-kontent-element-codename="image"`)
- Article tags (`data-kontent-element-codename="tags"`)

## Usage

### Preview Mode Activation
Smart Link will activate when:
1. **Development mode** (`npm run dev`)
2. **Preview query parameter** (`?preview=true`)
3. **Localhost environment**

### Testing Live Preview

1. Start development server:
   ```bash
   npm run dev
   ```

2. Navigate to an article:
   ```
   http://localhost:3000/articles/your-article-slug?preview=true
   ```

3. In Kontent.ai:
   - Go to your project
   - Open the article content item
   - Click "Live Preview"
   - Your local development site should load with Smart Link active

### Environment Variables
Make sure these are set in your `.env.local`:
```bash
NEXT_PUBLIC_KONTENT_PROJECT_ID=your-project-id
KONTENT_PREVIEW_API_KEY=your-preview-api-key
```

## Components with Smart Link Support

### ArticleDetailPage
- Full article editing support
- All major elements are editable
- Proper data attributes for content structure

### ArticleLayout
- Article card editing
- Individual article item attributes
- Supports multiple articles in listings

## Troubleshooting

### Smart Link Not Loading
1. Check console for initialization messages
2. Verify environment variables are set
3. Ensure you're in preview mode (see activation conditions above)
4. Check that your project ID matches Kontent.ai

### Edit Buttons Not Appearing
1. Verify data attributes are present in HTML
2. Check browser console for JavaScript errors
3. Ensure you're viewing the page through Kontent.ai Live Preview

### Performance
- Smart Link only loads in preview mode
- Production builds exclude Smart Link functionality
- No impact on end-user performance

## Development Notes

- Smart Link instance is automatically cleaned up on component unmount
- Debug mode is enabled in development
- Preview detection works across different environments
- All data attributes are conditionally applied based on preview mode