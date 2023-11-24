import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils/cn";

import { ThemeProvider } from "@/components/providers/ThemeProvider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Sam Likes Code",
  description: "The personal website of Samuel Yusuf",
  applicationName: "Sam Likes Code",
  openGraph: {
    type: "website",
    siteName: "Sam Likes Code",
    url: "https://samlikescode.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("min-h-screen font-sans antialiased", inter.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
