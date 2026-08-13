import type { Metadata } from "next";
import { Orbitron, Lato, Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/shared/theme-provider";
import { Providers } from "@/lib/query-provider";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import Script from "next/script";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lonch.cloud"),
  title: {
    default: "Lonch – Deploy Apps Instantly | Cloud Deployment Platform",
    template: "%s | Lonch",
  },
  description:
    "Lonch is a next-generation cloud deployment platform. Import your GitHub repo and deploy static sites, backends, and APIs to AWS in seconds — with auto-SSL, custom domains, and live build logs.",
  keywords: [
    "cloud deployment platform",
    "deploy app to aws",
    "deploy github repo",
    "deploy static site",
    "deploy backend api",
    "aws ecs deployment",
    "serverless deployment",
    "vercel alternative",
    "netlify alternative",
    "heroku alternative",
    "cloud hosting",
    "deploy docker container",
    "deploy next.js app",
    "deploy react app",
    "auto ssl",
    "custom domain hosting",
    "lonch",
    "lonch cloud",
  ],
  authors: [{ name: "Abhishek", url: "https://www.0bhishek.com" }],
  creator: "Abhishek",
  publisher: "Lonch",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://lonch.cloud",
  },
  openGraph: {
    title: "Lonch – Deploy Apps Instantly | Cloud Deployment Platform",
    description:
      "Import your GitHub repo and deploy static sites, backends, and APIs to AWS in seconds. Auto-SSL, custom domains, live build logs, and instant rollbacks.",
    url: "https://lonch.cloud",
    siteName: "Lonch",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Lonch – Cloud Deployment Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lonch – Deploy Apps Instantly",
    description:
      "The next-gen cloud deployment platform. Import, build, and deploy from GitHub to AWS in seconds.",
    creator: "@0bhishek",
    images: ["/og.png"],
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Lonch",
  url: "https://lonch.cloud",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  description:
    "Lonch is a next-generation cloud deployment platform. Import your GitHub repo and deploy static sites, backends, and APIs to AWS in seconds.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Person",
    name: "Abhishek",
    url: "https://www.0bhishek.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", orbitron.variable, lato.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground transition-colors duration-300">
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="afterInteractive"
        />
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
            {children}
            <Toaster theme="dark" richColors position="bottom-right" />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}

