import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Keeping Geist as it is premium and modern
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ivermectintablets2026.com'),
  title: {
    default: 'Ivermectin Research | Evidence-Based Medical Information',
    template: '%s | Ivermectin Research'
  },
  description: 'Comprehensive, evidence-based information on ivermectin. Expert insights on uses, dosage, safety, and the latest research from peer-reviewed medical studies.',
  keywords: ['ivermectin', 'ivermectin research', 'medical information', 'antiparasitic medication', 'evidence-based medicine', 'clinical studies', 'FDA approved uses'],
  authors: [{ name: 'Dr. Sarah Chen, MD' }],
  creator: 'Ivermectin Research',
  publisher: 'Ivermectin Research',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ivermectintablets2026.com',
    siteName: 'Ivermectin Research',
    title: 'Ivermectin Research | Evidence-Based Medical Information',
    description: 'Comprehensive, evidence-based information on ivermectin uses, dosage, safety, and research.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ivermectin Research',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ivermectin Research',
    description: 'Evidence-based ivermectin information and research',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-background">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
