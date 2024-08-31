import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/components/convex-provider";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import Modals from "@/components/modals";
import { Toaster } from "@/components/ui/sonner";
import JotaiProvider from "@/components/jotai-provider";
const font = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zlack",
  description: "Get started with chatting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="en">
        <body className={font.className}>
          <ConvexClientProvider>
            <JotaiProvider>
              <Toaster position="top-right" richColors />
              <Modals />
              {children}
            </JotaiProvider>
          </ConvexClientProvider>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
