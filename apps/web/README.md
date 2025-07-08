# Design System Web App

A Next.js 15 application that showcases the design system components and provides a modern web interface.

## Features

- **Next.js 15** - Latest stable version with App Router
- **React 19** - Modern React with concurrent features
- **TypeScript** - Full type safety across the application
- **Tailwind CSS 4** - Utility-first CSS framework
- **Design System Integration** - Full access to all design system components
- **Turbo Integration** - Optimized development and build processes
- **ESLint & Prettier** - Code quality and formatting

## Development

### Prerequisites

- Node.js 18+ 
- pnpm 9+

### Getting Started

1. **Install dependencies** (from root):
   ```bash
   pnpm install
   ```

2. **Start development server**:
   ```bash
   # From root - starts all packages
   pnpm dev
   
   # Or target just the web app
   pnpm dev:web
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build production application
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Run ESLint with auto-fix
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm clean` - Clean build artifacts

## Architecture

### Project Structure

```
apps/web/
├── src/
│   ├── app/              # Next.js 15 App Router
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   └── components/       # Custom components
├── public/               # Static assets
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── eslint.config.js      # ESLint configuration
└── tsconfig.json         # TypeScript configuration
```

### Design System Integration

The web app is fully integrated with the design system:

- **Components**: Import from `@design-system/core`
- **Utilities**: Import from `@design-system/utils`
- **Themes**: Import from `@design-system/themes`
- **Tokens**: Import from `@design-system/tokens`
- **Icons**: Import from `@design-system/icons`
- **Tailwind Config**: Extends `@design-system/tailwind-config`

### Configuration

- **TypeScript**: Extends base configuration with Next.js-specific settings
- **ESLint**: Uses shared configuration with React and Next.js rules
- **Tailwind**: Extends design system configuration
- **Turbo**: Optimized for monorepo builds and development

## Deployment

### Build for Production

```bash
# Build the application
pnpm build:web

# Start production server
pnpm start:web
```

### Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Performance

- **Server Components**: Leverages React Server Components for optimal performance
- **Static Generation**: Uses Next.js static generation where possible
- **Image Optimization**: Built-in Next.js image optimization
- **Bundle Optimization**: Automatic code splitting and optimization
- **Turbo**: Fast development and build times with Turbo

## Contributing

1. Make changes to the application
2. Run type checking: `pnpm typecheck`
3. Run linting: `pnpm lint`
4. Test the application: `pnpm dev`
5. Build to ensure everything works: `pnpm build`