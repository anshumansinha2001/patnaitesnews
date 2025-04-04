import { Outfit } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Enhanced metadata for SEO
export const metadata = {
  title: "Patnaites Media",
  description:
    "Stay updated with the latest news and events happening in Patna. Explore articles, interviews, and stories that matter to Patnaites.",
  keywords: "Patna, news, local news, Patnaites, events, articles",
  author: "Patnaites",
  openGraph: {
    title: "Patnaites Media",
    description:
      "A news portal for Patnaites. Get the latest updates and insights.",
    url: `${process.env.NEXT_PUBLIC_DOMAIN}`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/favicon.ico`,
        alt: "Patnaites Media Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",
    title: "Patnaites Media",
    description: "A news portal for Patnaites.",
    image: `${process.env.NEXT_PUBLIC_DOMAIN}/favicon.ico`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://patnaitesmedia.com" />
        {/* Google Search Console */}
        <meta
          name="google-site-verification"
          content="0evcXlCiZK4lHB0jxde5Yw-xQYz60Bjug8ivGTo-s70"
        />
        {/* Google Analytics Code */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-M9QR7ZG9XE"
        ></Script>
        <Script id="google-analytics">
          {` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-M9QR7ZG9XE');`}
        </Script>
      </head>
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
