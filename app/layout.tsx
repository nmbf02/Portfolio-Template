import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portfolio Template - Web Developer",
    description: "A portfolio template built with Next.js 13, Tailwind CSS, and modern web technologies.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}
        >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
