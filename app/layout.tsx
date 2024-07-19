import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";

export const metadata: Metadata = {
  title: "Ridwan Yinus - Front-End Developer & Designer | React, Next.js",
  description: " Explore Ridwan's portfolio of front-end projects and graphic designs. Specializing in React, Next.js, and Tailwind CSS for high-quality, user-friendly websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins">
        {" "}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
