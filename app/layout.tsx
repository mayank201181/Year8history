import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/lib/store";
import { AppGate } from "@/components/AppGate";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Year 8 History Lab", template: "%s · Year 8 History Lab" },
  description: "Learn, practise and master Year 8 History — Dictatorship and Democracy: enquiry-led lessons, source skills, auto-marked practice, a timeline of key dates, a daily mixed set and a parent dashboard.",
  applicationName: "History Lab",
  appleWebApp: { capable: true, statusBarStyle: "default", title: "History Lab" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#233056" },
    { media: "(prefers-color-scheme: dark)", color: "#12110f" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Apply a saved theme before paint (no flash).
const themeScript = `try{var t=localStorage.getItem("y8m2:theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={nunito.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen antialiased">
        <ErrorBoundary>
          <StoreProvider>
            <AppGate>{children}</AppGate>
          </StoreProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
