import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { QueryProvider } from '@/components/providers/query-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'FinGenius - AI-Powered Financial Advisory Platform',
    description: 'Your intelligent partner for wealth creation and financial freedom. AI-driven investment optimization, portfolio management, and financial planning.',
    keywords: 'financial advisory, AI investment, portfolio management, wealth management, financial planning',
    authors: [{ name: 'FinGenius Team' }],
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow',
    openGraph: {
        title: 'FinGenius - AI-Powered Financial Advisory',
        description: 'Intelligent wealth management and investment optimization',
        type: 'website',
        locale: 'en_US',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <QueryProvider>
                        {children}
                        <Toaster />
                    </QueryProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
