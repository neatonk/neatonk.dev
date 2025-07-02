import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
import { ThemeToggle } from "@/components/theme-toggle";
import Footer from "./footer";
import Header from "./header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "neatonk.dev",
  description: [
    "Welcome! I’m @neatonk—a software developer and consultant creating digital products for the web.",
    "Here you’ll find my thoughts and essays on software, tech, and creativity.",
  ].join(" "),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sourceSerif.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeToggle className="absolute top-12 md:top-4 right-4 z-50" />
          <div className="min-h-screen flex flex-col bg-background text-foreground font-serif">
            {/* Header: H1 at top, margin-bottom: 1.5rem (mb-6) */}
            <Header />
            {children}
            {/* Spacer */}
            <div className="flex-1" />

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
