import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Shield, TrendingUp, Brain, Users, Zap } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        About FinGenius
                    </h1>
                    <p className="mt-6 text-xl text-primary-100 max-w-3xl mx-auto">
                        Revolutionizing financial advisory through AI-powered intelligence and personalized wealth management
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Our Mission
                            </h2>
                            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                                FinGenius was founded with a simple yet powerful mission: to democratize access to
                                sophisticated financial advisory services through the power of artificial intelligence.
                                We believe everyone deserves intelligent, personalized financial guidance regardless
                                of their wealth level.
                            </p>
                            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                                By combining cutting-edge AI technology with deep financial expertise, we're creating
                                a platform that delivers institutional-grade investment strategies and portfolio
                                management to individual investors and financial advisors.
                            </p>
                        </div>
                        <div className="financial-card p-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Key Achievements
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-success-600 mr-3" />
                                    <span className="text-gray-700 dark:text-gray-300">15-25% improved investment returns</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-success-600 mr-3" />
                                    <span className="text-gray-700 dark:text-gray-300">60% reduction in manual advisory workload</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-success-600 mr-3" />
                                    <span className="text-gray-700 dark:text-gray-300">99.9% platform uptime</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-success-600 mr-3" />
                                    <span className="text-gray-700 dark:text-gray-300">95% compliance rule coverage</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Powered by Advanced Technology
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                            Our platform leverages the latest AI and financial technologies
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="financial-card-hover">
                            <CardHeader>
                                <Brain className="h-8 w-8 text-primary-600" />
                                <CardTitle>AI & Machine Learning</CardTitle>
                                <CardDescription>
                                    Advanced algorithms for portfolio optimization and risk assessment
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <Badge variant="outline">OpenAI GPT-4</Badge>
                                    <Badge variant="outline">Claude AI</Badge>
                                    <Badge variant="outline">LangChain</Badge>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="financial-card-hover">
                            <CardHeader>
                                <Shield className="h-8 w-8 text-success-600" />
                                <CardTitle>Security & Compliance</CardTitle>
                                <CardDescription>
                                    Enterprise-grade security with regulatory compliance frameworks
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <Badge variant="outline">SOC2 Type II</Badge>
                                    <Badge variant="outline">GDPR Compliant</Badge>
                                    <Badge variant="outline">FINRA/SEC</Badge>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="financial-card-hover">
                            <CardHeader>
                                <Zap className="h-8 w-8 text-warning-600" />
                                <CardTitle>Real-time Processing</CardTitle>
                                <CardDescription>
                                    High-performance infrastructure for live market data and analysis
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <Badge variant="outline">WebSockets</Badge>
                                    <Badge variant="outline">Redis Cache</Badge>
                                    <Badge variant="outline">PostgreSQL</Badge>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Our Team
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                            Experts in AI, finance, and technology working together
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="financial-card-hover text-center">
                            <CardHeader>
                                <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <Users className="h-10 w-10 text-primary-600" />
                                </div>
                                <CardTitle>Financial Experts</CardTitle>
                                <CardDescription>
                                    Certified financial advisors and portfolio managers with decades of experience
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="financial-card-hover text-center">
                            <CardHeader>
                                <div className="w-20 h-20 bg-success-100 dark:bg-success-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <Brain className="h-10 w-10 text-success-600" />
                                </div>
                                <CardTitle>AI Engineers</CardTitle>
                                <CardDescription>
                                    Machine learning specialists and data scientists from top tech companies
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="financial-card-hover text-center">
                            <CardHeader>
                                <div className="w-20 h-20 bg-warning-100 dark:bg-warning-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <Shield className="h-10 w-10 text-warning-600" />
                                </div>
                                <CardTitle>Compliance Specialists</CardTitle>
                                <CardDescription>
                                    Regulatory experts ensuring adherence to financial industry standards
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
