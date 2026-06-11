import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";

import { Header } from "@/components/header/Header";
import { siteConfig } from "@/lib/constants/site";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

config.autoAddCss = false;

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  const htmlClassName = `${plusJakartaSans.variable} h-full antialiased`;
  const bodyClassName =
    "flex min-h-full flex-col bg-background font-sans text-foreground";

  return (
    <html lang="en" className={htmlClassName}>
      <body className={bodyClassName}>
        <Header />
        {children}
      </body>
    </html>
  );
}
