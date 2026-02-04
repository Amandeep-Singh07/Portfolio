import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amandeep Singh | CS Student & Developer",
  description:
    "Portfolio of a Computer Science student showcasing projects, skills, and achievements. Seeking placements and tech internships.",
  keywords: [
    "portfolio",
    "computer science",
    "developer",
    "projects",
    "skills",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Amandeep Singh | CS Student & Developer",
    description: "Portfolio showcasing projects, skills, and achievements",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
