"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, DollarSign, Percent } from 'lucide-react';
import { formatCurrency, formatPercentage, getChangeColorClass } from '@/lib/utils';

interface WealthMetrics {
    totalValue: number;
    totalChange: number;
    totalChangePercent: number;
    cashBalance: number;
    investedAmount: number;
    dailyReturn: number;
    monthlyReturn: number;
    yearlyReturn: number;
}

const mockData: WealthMetrics = {
    totalValue: 1250000,
    totalChange: 12500,
    totalChangePercent: 1.01,
    cashBalance: 75000,
    investedAmount: 1175000,
    dailyReturn: 0.15,
    monthlyReturn: 2.3,
    yearlyReturn: 12.5,
};

export function WealthOverview() {
    const data = mockData; // In real app, this would come from API

    return (
        <Card className="financial-card-hover">
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <span>Wealth Overview</span>
                    <Badge variant="secondary">Live</Badge>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Total Portfolio Value */}
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <DollarSign className="w-4 h-4 text-gray-500" />
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                Total Value
                            </span>
                        </div>
                        <div className="space-y-1">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                {formatCurrency(data.totalValue)}
                            </div>
                            <div className={`flex items-center space-x-1 text-sm ${getChangeColorClass(data.totalChangePercent)}`}>
                                {data.totalChangePercent >= 0 ? (
                                    <TrendingUp className="w-4 h-4" />
                                ) : (
                                    <TrendingDown className="w-4 h-4" />
                                )}
                                <span>
                                    {data.totalChangePercent >= 0 ? '+' : ''}{formatCurrency(data.totalChange)}
                                    ({data.totalChangePercent >= 0 ? '+' : ''}{formatPercentage(data.totalChangePercent)})
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Cash Balance */}
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <DollarSign className="w-4 h-4 text-gray-500" />
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                Cash Balance
                            </span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                            {formatCurrency(data.cashBalance)}
                        </div>
                        <div className="text-sm text-gray-500">
                            {formatPercentage((data.cashBalance / data.totalValue) * 100)} of portfolio
                        </div>
                    </div>

                    {/* Invested Amount */}
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <TrendingUp className="w-4 h-4 text-gray-500" />
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                Invested
                            </span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                            {formatCurrency(data.investedAmount)}
                        </div>
                        <div className="text-sm text-gray-500">
                            {formatPercentage((data.investedAmount / data.totalValue) * 100)} of portfolio
                        </div>
                    </div>

                    {/* Yearly Return */}
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <Percent className="w-4 h-4 text-gray-500" />
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                YTD Return
                            </span>
                        </div>
                        <div className={`text-2xl font-bold ${getChangeColorClass(data.yearlyReturn)}`}>
                            {data.yearlyReturn >= 0 ? '+' : ''}{formatPercentage(data.yearlyReturn)}
                        </div>
                        <div className="text-sm text-gray-500">
                            vs {formatPercentage(8.5)} benchmark
                        </div>
                    </div>
                </div>

                {/* Performance Summary */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                            <div className="text-sm text-gray-600 dark:text-gray-400">Daily</div>
                            <div className={`text-lg font-semibold ${getChangeColorClass(data.dailyReturn)}`}>
                                {data.dailyReturn >= 0 ? '+' : ''}{formatPercentage(data.dailyReturn)}
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-sm text-gray-600 dark:text-gray-400">Monthly</div>
                            <div className={`text-lg font-semibold ${getChangeColorClass(data.monthlyReturn)}`}>
                                {data.monthlyReturn >= 0 ? '+' : ''}{formatPercentage(data.monthlyReturn)}
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-sm text-gray-600 dark:text-gray-400">Yearly</div>
                            <div className={`text-lg font-semibold ${getChangeColorClass(data.yearlyReturn)}`}>
                                {data.yearlyReturn >= 0 ? '+' : ''}{formatPercentage(data.yearlyReturn)}
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
