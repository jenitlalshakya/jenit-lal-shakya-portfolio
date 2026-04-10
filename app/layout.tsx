import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// SEO-friendly metadata
export const metadata: Metadata = {
  title: "Jenit Lal Shakya | Web Developer & Portfolio",
  description:
    "Explore the portfolio of Jenit Lal Shakya, a professional web developer specializing in modern web development, React, Next.js, and responsive design.",
  keywords: [
    "Jenit Lal Shakya",
    "web developer",
    "Next.js portfolio",
    "React developer",
    "frontend developer",
    "UI/UX design",
    "JavaScript projects",
  ],
  authors: [{ name: "Jenit Lal Shakya", url: "https://jenitlalshakya.com.np" }],
  openGraph: {
    title: "Jenit Lal Shakya | Web Developer Portfolio",
    description:
      "Showcasing web development projects, skills, and expertise in React, Next.js, and modern web technologies.",
    url: "https://jenitlalshakya.com.np",
    siteName: "Jenit Lal Shakya Portfolio",
    images: [
      {
        url: "https://jenitlalshakya.com.np/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jenit Lal Shakya Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jenit Lal Shakya | Web Developer Portfolio",
    description:
      "Showcasing web development projects, skills, and expertise in React, Next.js, and modern web technologies.",
    images: ["https://jenitlalshakya.com.np/images/og-image.png"],
    creator: "@JenitLalShakya",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
