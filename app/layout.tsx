import type { Metadata } from 'next';
import Inter from 'next/font/local';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider/ThemeProvider';

const inter = Inter({
  src: [
    { path: '../public/fonts/inter-regular.woff2', weight: '400' },
    { path: '../public/fonts/inter-medium.woff2', weight: '500' },
    { path: '../public/fonts/inter-semi-bold.woff2', weight: '600' },
    { path: '../public/fonts/inter-bold.woff2', weight: '700' },
  ],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Yury Shapovalov - Frontend developer',
  description: 'Frontend developer',
  icons: [
    {
      rel: 'shortcut icon',
      url: '/favicon/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
    {
      rel: 'manifest',
      sizes: '180x180',
      url: '/favicon/site.webmanifest',
    },
  ],
  openGraph: {
    title: 'Yury Shapovalov',
    images: '/og.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <ThemeProvider
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
