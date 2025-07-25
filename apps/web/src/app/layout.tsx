import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Design System Web App',
  description: 'A Next.js application showcasing the design system',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}