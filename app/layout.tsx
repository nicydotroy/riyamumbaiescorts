import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Luxury Escorts in Mumbai | Escorts Services Mumbai | 24/7 Availability",
  description:
    "Experience unmatched elegance and class with Riya Escorts in Mumbai. Our elite escort services are designed for those who seek sophistication and exclusivity. Call now!",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head />
      <body className="bg-dark text-gray-100">
        {/* WhatsApp widget */}
        <Script
          id="whatsapp-widget"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(){var options={whatsapp:"+918169808077",call_to_action:"Message us",position:"left"};var proto=document.location.protocol,host="getbutton.io",url=proto+"//static."+host;var s=document.createElement('script');s.type='text/javascript';s.async=true;s.src=url+'/widget-send-button/js/init.js';s.onload=function(){WhWidgetSendButton.init(host,proto,options);};var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);})();`,
          }}
        />
        {/* Call widget */}
        <Script
          id="call-widget"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(){var options={call:"+918169808077",call_to_action:"Call us",position:"right"};var proto=document.location.protocol,host="getbutton.io",url=proto+"//static."+host;var s=document.createElement('script');s.type='text/javascript';s.async=true;s.src=url+'/widget-send-button/js/init.js';s.onload=function(){WhWidgetSendButton.init(host,proto,options);};var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);})();`,
          }}
        />
        <Header />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
