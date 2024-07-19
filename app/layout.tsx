import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Head from "next/head";

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
      </Head>
      <body className="font-poppins">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
