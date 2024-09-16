import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from './provider';
import Head from 'next/head';
import schemaData from '@/components/schema';
import { seoData } from '@/lib/content/portfolio';
import 'aos/dist/aos.css';
export const metadata: Metadata = {
  title: seoData.title,

  authors: [
    {
      name: seoData.author,
    },
  ],
  description: seoData.description,
  keywords: seoData.keywords.join(','),
  metadataBase: new URL(seoData.url),
  alternates: {
    canonical: seoData.url,
  },
  openGraph: {
    type: 'website',
    url: seoData.url,
    title: seoData.title,
    description: seoData.description,
    images: seoData.image,
    siteName: seoData.title,
  },
  twitter: {
    card: 'summary_large_image',
    title: seoData.title,
    description: seoData.description,
    images: seoData.image,
    site: seoData.url,
  },
  verification: {
    google: 'IwEzWIUdKrFD6IMbBVaEowWRRvww402-YO9W9uLAZgc',
  },

  icons: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicons/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '512x512',
      url: '/favicons/android-chrome-512x512.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      url: '/favicons/android-chrome-192x192.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicons/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicons/favicon-16x16.png',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <Head>
        <title>{String(metadata.title)}</title>
        <meta name='description' content={String(metadata.description)} />
        <meta name='google-site-verification' content='IwEzWIUdKrFD6IMbBVaEowWRRvww402-YO9W9uLAZgc' />
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Head>
      <body className='font-poppins'>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
