import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "idenCreativ. | More Than Just Design",
    template: "%s | idenCreativ.",
  },
  description:
    "idenCreativ. is a premium creative agency for branding, design, marketing, printing, and tech training.",
  metadataBase: new URL("https://www.idencreativ.com"),
  openGraph: {
    title: "idenCreativ. | More Than Just Design",
    description:
      "Branding, design, digital marketing, printing, and tech training for startups and SMEs.",
    url: "https://www.idencreativ.com",
    siteName: "idenCreativ.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "idenCreativ.",
    description:
      "Branding, design, digital marketing, printing, and tech training for startups and SMEs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased bg-background text-foreground`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
