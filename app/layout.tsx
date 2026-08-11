import type { Metadata } from "next";
import { Orbitron, Lato, Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/shared/theme-provider";
import { Providers } from "@/lib/query-provider";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

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
  title: "Lonch - The Future of Distributed Computing",
  description: "Import and deploy your applications in seconds",
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
