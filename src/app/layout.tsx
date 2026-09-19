import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

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
    "Domestic Shifting Services",
    "Office Relocation Bangalore",
    "Car Transportation Bangalore",
    "Bike Transportation Bangalore",
    "Warehouse Services Bangalore",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Vansh Packers and Movers | Packers and Movers in Bangalore",
    description:
      "Safe, fast and affordable packing, moving and transportation solutions for homes, offices and vehicles across Bangalore.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: siteConfig.name,
    "@id": siteConfig.url,
    url: siteConfig.url,
    telephone: `+91${siteConfig.phone}`,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "#42/1, Muneshwara Layout, Haralukunte",
      addressLocality: "Bangalore",
      postalCode: "560068",
      addressCountry: "IN",
    },
    areaServed: "Bangalore, India",
    priceRange: "₹₹",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much do packers and movers charge in Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Charges depend on the size of your move, distance, volume of goods and the services you choose. Contact us for a free, accurate quote.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide packing and unpacking services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our trained team handles complete packing and unpacking using quality materials to protect your belongings during transit.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide interstate moving services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our domestic shifting service covers interstate relocations across India with insured transport and real-time tracking.",
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
