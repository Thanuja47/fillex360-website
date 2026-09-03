import type { Metadata, Viewport } from "next";
import { Poppins, Inter, Noto_Sans_Sinhala } from "next/font/google";
import "./globals.css";
import Announcement from "@/components/Announcement";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const notoSinhala = Noto_Sans_Sinhala({
  subsets: ["sinhala"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sinhala",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fillex360 Solutions — Software, built properly.",
  description:
    "A software studio in Galle & Colombo, Sri Lanka building production systems for education, healthcare, and maritime businesses.",
  metadataBase: new URL("https://fillex360.lk"),
  alternates: {
    canonical: "https://fillex360.lk",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Fillex360 Solutions — Software, built properly.",
    description:
      "A software studio in Galle & Colombo, Sri Lanka building production systems for education, healthcare, and maritime businesses.",
    url: "https://fillex360.lk",
    siteName: "Fillex360 Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fillex360 Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fillex360 Solutions — Software, built properly.",
    description:
      "A software studio in Galle & Colombo, Sri Lanka building production systems for education, healthcare, and maritime businesses.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#16302A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${notoSinhala.variable}`}>
      <body className="bg-cream text-ink antialiased min-h-screen flex flex-col justify-between">
        <LanguageProvider>
          <div>
            <Announcement />
            <Header />
            <main>{children}</main>
          </div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
