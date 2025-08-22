import { Suspense } from 'react';
import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { WealthOverview } from '@/components/dashboard/wealth-overview';
import { PortfolioSummary } from '@/components/dashboard/portfolio-summary';
import { RecentActivity } from '@/components/dashboard/recent-activity';
import { AIInsights } from '@/components/dashboard/ai-insights';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <DashboardHeader />

            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <Suspense fallback={<LoadingSpinner />}>
                            <WealthOverview />
                        </Suspense>

                        <Suspense fallback={<LoadingSpinner />}>
                            <PortfolioSummary />
                        </Suspense>

                        <Suspense fallback={<LoadingSpinner />}>
                            <AIInsights />
                        </Suspense>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <Suspense fallback={<LoadingSpinner />}>
                            <RecentActivity />
                        </Suspense>
                    </div>
                </div>
            </main>
        </div>
    );
}
