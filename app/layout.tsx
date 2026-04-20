import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// SEO metadata unchanged
export const metadata: Metadata = {
  metadataBase: new URL("https://www.jenitlalshakya.com.np"),
  title: "Jenit Lal Shakya | Web Developer & Portfolio",
  description:
    "Explore the portfolio of Jenit Lal Shakya, a professional web developer specializing in modern web development, React, Next.js, and responsive design.",
  robots: {
    index: process.env.NEXT_PUBLIC_INDEX === "true",
    follow: process.env.NEXT_PUBLIC_INDEX === "true",
  },
  keywords: [
    "Jenit Lal Shakya",
    "web developer",
    "Next.js portfolio",
    "React developer",
    "frontend developer",
    "UI/UX design",
    "JavaScript projects",
  ],
  authors: [
    {
      name: "Jenit Lal Shakya",
      url: "https://www.jenitlalshakya.com.np",
    },
  ],
  alternates: { canonical: "https://www.jenitlalshakya.com.np" },
  openGraph: {
    locale: "en_US",
    title: "Jenit Lal Shakya | Web Developer Portfolio",
    description:
      "Showcasing web development projects, skills, and expertise in React, Next.js, and modern web technologies.",
    url: "https://www.jenitlalshakya.com.np",
    siteName: "Jenit Lal Shakya Portfolio",
    images: [
      {
        url: "https://www.jenitlalshakya.com.np/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jenit Lal Shakya Portfolio",
        type: "image/png",
      },
    ],
    type: "website",
  },
  twitter: {
    site: "@jenitlalshakya",
    card: "summary_large_image",
    title: "Jenit Lal Shakya | Web Developer Portfolio",
    description:
      "Showcasing web development projects, skills, and expertise in React, Next.js, and modern web technologies.",
    images: ["https://www.jenitlalshakya.com.np/images/og-image.png"],
    creator: "@jenitlalshakya",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                const media = window.matchMedia('(prefers-color-scheme: dark)');
                const root = document.documentElement;

                function applyTheme(e) {
                  if (e.matches) {
                    root.classList.add('dark');
                  } else {
                    root.classList.remove('dark');
                  }
                }

                // initial
                applyTheme(media);

                // live update
                media.addEventListener('change', applyTheme);
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full overflow-x-hidden">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
