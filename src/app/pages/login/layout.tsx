// app/login/layout.tsx
import { ReactNode } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';

interface LoginLayoutProps {
  children: ReactNode;
}

export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <main className="flex min-h-screen items-center justify-center p-10 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
