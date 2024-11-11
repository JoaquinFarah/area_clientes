import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from '@/context/ThemeContext';
import Sidebar from './components/Sidebar';

export const metadata: Metadata = {
  title: "Area Clientes",
  description: "Generated by @BrightInnovations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="flex dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <Sidebar />
            <main className="p-10 flex-1">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
