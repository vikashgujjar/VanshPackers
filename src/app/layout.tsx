import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-data";
import { buildRootSchema } from "@/lib/schema";
import { defaultOgImage } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import JsonLd from "@/components/JsonLd";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Vansh Packers and Movers | Packers and Movers in Bangalore",
    template: "%s | Vansh Packers and Movers",
  },
  description:
    "Vansh Packers and Movers offers safe, affordable and professional household shifting, office relocation, vehicle transportation and warehouse services across Bangalore and Pan India.",
  keywords: [
    "Vansh Packers and Movers",
    "Packers and Movers in Bangalore",
    "Packers and Movers Bangalore",
    "Household Shifting Bangalore",
    "Local House Shifting Charges",
    "Home Relocation Services",
    "Domestic Shifting Services",
    "Interstate Packers and Movers",
    "Long Distance Moving Company",
    "Office Relocation Bangalore",
    "Corporate Shifting Services",
    "International Moving and Freight",
    "Car Transportation Bangalore",
    "Bike Transportation Bangalore",
    "Vehicle Shifting Company",
    "Warehouse Services Bangalore",
    "Packing and Moving Company",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vansh Packers and Movers | Packers and Movers in Bangalore",
    description:
      "Safe, fast and affordable packing, moving and transportation solutions for homes, offices and vehicles across Bangalore.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vansh Packers and Movers | Packers and Movers in Bangalore",
    description:
      "Safe, fast and affordable packing, moving and transportation solutions for homes, offices and vehicles across Bangalore.",
    images: [defaultOgImage.url],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <JsonLd data={buildRootSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
