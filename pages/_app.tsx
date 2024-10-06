import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

import type { AppProps } from "next/app";
import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <body className={cn(fontSans.className, "min-h-screen bg-background antialiased max-w-xl mx-auto py-12 px-6")}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        disableTransitionOnChange
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </body>
  );
}
