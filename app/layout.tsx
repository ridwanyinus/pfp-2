import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from './provider';
import Head from 'next/head';
import schemaData from '@/components/schema';
import { seoData } from '@/lib/content/portfolio';
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
        {/* Open Graph Meta Tags */}
        <meta property='og:title' content='Ridwan Yinus - Front End Developer & Graphic Designer' />
        <meta
          property='og:description'
          content='Explore the portfolio of Ridwan Yinus, a React front end developer and Graphic Designer specializing in creating high-quality, user-friendly websites using React, Next.js, and Tailwind CSS.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://ridwanyinus.is-a.dev' />
        <meta property='og:image' content='https://ridwanyinus.is-a.dev/hero.png' />

        {/* Twitter Meta Tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Ridwan Yinus - Front End Developer & Graphic Designer' />
        <meta
          name='twitter:description'
          content='Explore the portfolio of Ridwan Yinus, a React front end developer and Graphic Designer specializing in creating high-quality, user-friendly websites using React, Next.js, and Tailwind CSS.'
        />
        <meta name='twitter:image' content='https://ridwanyinus.is-a.dev/hero.png' />
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
