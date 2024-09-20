import type { Metadata } from 'next';
import '../styles/globals.css';
import { ThemeProvider } from './provider';
import Head from 'next/head';
import schemaData from '@/components/schema';
import { seoData } from '@/lib/content/portfolio';
import 'aos/dist/aos.css';
import localFont from 'next/font/local';

const outfit = localFont({
  src: [
   
    {
      path: './fonts/Outfit-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Outfit-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Outfit-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Outfit-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Outfit-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Outfit-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/Outfit-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-outfit',
});

const poppins = localFont({
  src: [
    {
      path: './fonts/Poppins-Thin.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-poppins',
});

const prompt = localFont({
  src: [
    {
      path: './fonts/Prompt-Thin.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/Prompt-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Prompt-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Prompt-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Prompt-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Prompt-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Prompt-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/Prompt-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-prompt',
});

const inter = localFont({
  src: [
    {
      path: './fonts/Inter_18pt-Black.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/Inter_18pt-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Inter_18pt-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Inter_18pt-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Inter_18pt-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Inter_18pt-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Inter_24pt-Black.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/Inter_24pt-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
});

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
        <meta name='google-site-verification' content='IwEzWIUdKrFD6IMbBVaEowWRRvww402-YO9W9uLAZgc' />
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Head>
      <body className={`${poppins.variable} ${inter.variable} ${prompt.variable} ${outfit.variable} font-poppins`}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
