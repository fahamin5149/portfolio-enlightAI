import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
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
  title: "EnlightAI — Production-Ready AI Solutions",
  description:
    "EnlightAI delivers enterprise-grade AI solutions — Computer Vision, NLP & LLMs, Voice AI — with full-stack development and cloud deployment.",
  icons: {
    icon: "/logo-icon.png",
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
        <Toaster
          theme="light"
          position="bottom-right"
          toastOptions={{
            style: {
              background: "hsl(228 20% 96%)",
              border: "1px solid hsl(228 15% 82%)",
              color: "hsl(230 25% 10%)",
            },
          }}
        />
      </body>
    </html>
  );
}
