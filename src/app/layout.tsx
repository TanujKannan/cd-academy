import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CD Academy - Professional Tutoring & Coaching Center",
  description: "Expert tutoring and coaching services for high school and college entrance exams. Specializing in Math, Reading, and Writing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 flex justify-center">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
