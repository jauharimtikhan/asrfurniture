import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Script from "next/script";

import "@/public/assets/css/bootstrap.min.css";
import "@/public/assets/css/animate.css";
import "@/public/assets/css/magnific-popup.css";
import "@/public/assets/css/slick.css";
import "@/public/assets/css/LineIcons.css";
import "@/public/assets/css/default.css";
import "@/public/assets/css/style.css";
import "@/public/assets/css/responsive.css";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ASR FURNITURE",
  description: "Landing page asrfurniture.shop",
  icons: {
    icon: {
      url: "favicon/favicon.ico",
    },
    shortcut: {
      url: "favicon/favicon.ico",
    },
    apple: {
      url: "favicon/apple-touch-icon.png",
    },
    other: {
      rel: "icon",
      url: "favicon/favicon.ico",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script src="assets/js/vendor/jquery.min.js"></Script>
        <Script src="assets/js/vendor/modernizr-3.6.0.min.js"></Script>
        <Script src="assets/js/bootstrap.min.js"></Script>
        <Script src="assets/js/slick.min.js"></Script>
        <Script src="assets/js/jquery.magnific-popup.min.js"></Script>
        <Script src="assets/js/jquery.nav.js"></Script>
        <Script src="assets/js/scrollIt.min.js"></Script>
        <Script src="assets/js/main.js"></Script>
      </body>
    </html>
  );
}
