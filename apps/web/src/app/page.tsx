import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp, Shield, Brain, Zap, Users } from 'lucide-react';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    <div className="text-center">
                        <Badge variant="secondary" className="mb-4">
                            🚀 AI-Powered Financial Advisory
                        </Badge>
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                            Your Intelligent Partner for
                            <span className="gradient-text"> Wealth Creation</span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            FinGenius combines cutting-edge AI with financial expertise to deliver personalized
                            investment strategies, real-time portfolio optimization, and intelligent wealth management.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Button size="lg" asChild>
                                <Link href="/dashboard">
                                    Get Started
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <Link href="/about">
                                    Learn More
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            Why Choose FinGenius?
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                            Advanced AI technology meets financial expertise for optimal results
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <Card className="financial-card-hover">
                            <CardHeader>
                                <Brain className="h-8 w-8 text-primary-600" />
                                <CardTitle>AI Financial Planner</CardTitle>
                                <CardDescription>
                                    Automated financial plans for retirement, savings, tax optimization, and insurance coverage
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="financial-card-hover">
                            <CardHeader>
                                <TrendingUp className="h-8 w-8 text-success-600" />
                                <CardTitle>Intelligent Portfolio Manager</CardTitle>
                                <CardDescription>
                                    Real-time rebalancing, diversification checks, and Monte Carlo risk simulation
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="financial-card-hover">
                            <CardHeader>
                                <Zap className="h-8 w-8 text-warning-600" />
                                <CardTitle>Market Intelligence</CardTitle>
                                <CardDescription>
                                    RAG-powered financial Q&A, news impact summaries, and sector insights
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="financial-card-hover">
                            <CardHeader>
                                <Shield className="h-8 w-8 text-primary-600" />
                                <CardTitle>Regulatory Compliance</CardTitle>
                                <CardDescription>
                                    SEC/FINRA/ESMA frameworks with explainable AI and suitability checks
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="financial-card-hover">
                            <CardHeader>
                                <Users className="h-8 w-8 text-success-600" />
                                <CardTitle>Advisory CRM</CardTitle>
                                <CardDescription>
                                    Client profiles, KYC/AML compliance tracking, and document vault
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="financial-card-hover">
                            <CardHeader>
                                <TrendingUp className="h-8 w-8 text-warning-600" />
                                <CardTitle>Wealth Dashboard</CardTitle>
                                <CardDescription>
                                    Unified view of assets, liabilities, and investments with predictive modeling
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-primary-600 to-primary-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Ready to Transform Your Financial Future?
                    </h2>
                    <p className="mt-4 text-lg text-primary-100">
                        Join thousands of investors who trust FinGenius for intelligent wealth management
                    </p>
                    <div className="mt-10">
                        <Button size="lg" variant="secondary" asChild>
                            <Link href="/dashboard">
                                Start Your Journey
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
