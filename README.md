# Perfect Game Homepage

A clean Next.js application with TypeScript and Tailwind CSS, ready to integrate with Kontent.ai CMS.

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Kontent.ai Integration** ready
- **Responsive Design**
- **Clean Architecture**

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Kontent.ai account (optional for development)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd idaho-league
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (optional for development):
Create a `.env.local` file in the root directory:
```env
KONTENT_PROJECT_ID=your_project_id_here
KONTENT_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   └── HomePage.tsx       # Main homepage component
├── lib/                   # Utility functions
│   └── kontent.ts         # Kontent.ai configuration
└── public/                # Static assets
```

## Development

The application currently displays a simple welcome page. You can:

1. **Add Components**: Create new components in the `components/` directory
2. **Integrate Kontent.ai**: Use the existing configuration in `lib/kontent.ts`
3. **Customize Styling**: Modify Tailwind classes or add custom CSS
4. **Add Pages**: Create new pages in the `app/` directory

## Kontent.ai Integration

The application is set up to work with Kontent.ai:

1. **Configuration**: See `lib/kontent.ts` for setup
2. **Content Model**: Design your content model in Kontent.ai
3. **Data Fetching**: Use the delivery client to fetch content
4. **Type Safety**: Add TypeScript interfaces for your content

## Deployment

Deploy to Vercel, Netlify, or any Next.js-compatible platform:

```bash
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License
