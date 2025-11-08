import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Chandler Cook",
  description: "My personal website",
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
        <div className="relative min-h-screen overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="fixed inset-0 w-full h-full object-cover z-0"
          >
            <source src="https://storage.googleapis.com/chandlercook.net/globe.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <div className="fixed inset-0 bg-black/30 z-10"></div>
          
          <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/20 backdrop-blur-sm border-b border-white/10">
            <Link href="/" className="text-xl font-semibold text-white hover:text-white/80 transition-colors">
              Chandler Cook
            </Link>
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="text-white/90 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white/90 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="http://blog.chandlercook.net"
                className="text-white/90 hover:text-white transition-colors"
              >
                Blog
              </Link>
            </div>
          </nav>
          
          <div className="relative z-20">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
