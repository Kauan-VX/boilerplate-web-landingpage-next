import { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import { NextUiProvider } from "./NextUiProvider";
import "./globals.scss";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira",
  weight: ["300", "400", "500", "600", "700"],
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: "pt" | "en";
  };
}

export const metadata: Metadata = {
  title: "WebBoilerplate NextJs",
  description: "Boilerplate made to facilitate development",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={poppins.className}>
        <NextUiProvider messages={messages} locale={locale}>
          {children}
        </NextUiProvider>
      </body>
    </html>
  );
}
