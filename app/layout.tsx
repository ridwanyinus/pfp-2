import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Head from "next/head";
import schemaData from "@/components/schema";
export const metadata: Metadata = {
  title: "Ridwan Yinus - Front End Developer & Designer | React, Next.js",
  description: "Explore Ridwan's portfolio of front-end projects and graphic designs. Specializing in React, Next.js, and Tailwind CSS for high-quality, user-friendly websites.",
  verification: {
    google: "IwEzWIUdKrFD6IMbBVaEowWRRvww402-YO9W9uLAZgc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{String(metadata.title)}</title>
        <meta name="description" content={String(metadata.description)} />
        <meta name="google-site-verification" content="IwEzWIUdKrFD6IMbBVaEowWRRvww402-YO9W9uLAZgc" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Ridwan Yinus - Front End Developer" />
        <meta
          property="og:description"
          content="Explore the portfolio of Ridwan Yinus, a React front end developer and Graphic Designer specializing in creating high-quality, user-friendly websites using React, Next.js, and Tailwind CSS."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ridwanyinus.is-a.dev" />
        <meta property="og:image" content="/public/hero.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ridwan Yinus - Front End Developer" />
        <meta
          name="twitter:description"
          content="Explore the portfolio of Ridwan Yinus, a React front end developer and Graphic Designer specializing in creating high-quality, user-friendly websites using React, Next.js, and Tailwind CSS."
        />
        <meta name="twitter:image" content="/public/hero.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Head>
      <body className="font-poppins">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
