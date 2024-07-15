import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";

export const metadata: Metadata = {
  title: "Ridwan Yinus - Front-End Developer & Graphic Designer in Nigeria | React, Next.js, Tailwind CSS",
  description:
    "Explore Ridwan's portfolio showcasing a diverse range of front-end development projects and graphic design works. Specializing in React, Next.js, and Tailwind CSS, Ridwan delivers high-quality, visually appealing, and user-friendly websites. Discover innovative designs created with Adobe Photoshop and Adobe Illustrator, and learn more about Ridwan's skills and experience as a professional developer and designer from Nigeria.",
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
