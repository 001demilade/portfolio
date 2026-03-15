import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/layout.tsx or app/page.tsx

export const metadata = {
  // 1. ADD THIS LINE (Replace with your actual Vercel URL)
  metadataBase: new URL('https://your-portfolio-name.vercel.app'), 
  
  title: "Demilade Dare | Full-Stack Developer",
  description: "Immersive web experiences and bold design.",
  openGraph: {
    title: "Demilade Dare | Portfolio",
    description: "Full-stack developer specializing in Next.js and modern UI.",
    url: 'https://your-portfolio-name.vercel.app',
    siteName: 'Demilade Portfolio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
