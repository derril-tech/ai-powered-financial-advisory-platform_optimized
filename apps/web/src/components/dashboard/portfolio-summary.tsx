"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, Eye, Plus } from 'lucide-react';
import { formatCurrency, formatPercentage, getChangeColorClass } from '@/lib/utils';

interface Holding {
    id: string;
    symbol: string;
    name: string;
    quantity: number;
    currentPrice: number;
    currentValue: number;
    changePercent: number;
    allocation: number;
    sector: string;
}

const mockHoldings: Holding[] = [
    {
        id: '1',
        symbol: 'AAPL',
        name: 'Apple Inc.',
        quantity: 100,
        currentPrice: 150.25,
        currentValue: 15025,
        changePercent: 2.5,
        allocation: 12.8,
        sector: 'Technology',
    },
    {
        id: '2',
        symbol: 'MSFT',
        name: 'Microsoft Corporation',
        quantity: 50,
        currentPrice: 320.75,
        currentValue: 16037.5,
        changePercent: -0.8,
        allocation: 13.7,
        sector: 'Technology',
    },
    {
        id: '3',
        symbol: 'VTI',
        name: 'Vanguard Total Stock Market ETF',
        quantity: 200,
        currentPrice: 245.50,
        currentValue: 49100,
        changePercent: 1.2,
        allocation: 41.9,
        sector: 'ETF',
    },
    {
        id: '4',
        symbol: 'BND',
        name: 'Vanguard Total Bond Market ETF',
        quantity: 150,
        currentPrice: 78.25,
        currentValue: 11737.5,
        changePercent: 0.3,
        allocation: 10.0,
        sector: 'Bonds',
    },
];

export function PortfolioSummary() {
    const holdings = mockHoldings; // In real app, this would come from API
    const totalValue = holdings.reduce((sum, holding) => sum + holding.currentValue, 0);

    return (
        <Card className="financial-card-hover">
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <span>Portfolio Holdings</span>
                    <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            View All
                        </Button>
                        <Button size="sm">
                            <Plus className="w-4 h-4 mr-2" />
                            Add Holding
                        </Button>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {holdings.map((holding) => (
                        <div
                            key={holding.id}
                            className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                            {/* Stock Info */}
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                                    <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                                        {holding.symbol}
                                    </span>
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900 dark:text-white">
                                        {holding.symbol}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        {holding.name}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        {holding.quantity} shares @ {formatCurrency(holding.currentPrice)}
                                    </div>
                                </div>
                            </div>

                            {/* Value and Performance */}
                            <div className="text-right">
                                <div className="font-semibold text-gray-900 dark:text-white">
                                    {formatCurrency(holding.currentValue)}
                                </div>
                                <div className={`flex items-center justify-end space-x-1 text-sm ${getChangeColorClass(holding.changePercent)}`}>
                                    {holding.changePercent >= 0 ? (
                                        <TrendingUp className="w-3 h-3" />
                                    ) : (
                                        <TrendingDown className="w-3 h-3" />
                                    )}
                                    <span>
                                        {holding.changePercent >= 0 ? '+' : ''}{formatPercentage(holding.changePercent)}
                                    </span>
                                </div>
                                <div className="text-xs text-gray-500">
                                    {formatPercentage(holding.allocation)} of portfolio
                                </div>
                            </div>

                            {/* Sector Badge */}
                            <div className="hidden md:block">
                                <Badge variant="outline" className="text-xs">
                                    {holding.sector}
                                </Badge>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Portfolio Summary */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                            <div className="text-sm text-gray-600 dark:text-gray-400">Total Value</div>
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">
                                {formatCurrency(totalValue)}
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-sm text-gray-600 dark:text-gray-400">Holdings</div>
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">
                                {holdings.length}
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-sm text-gray-600 dark:text-gray-400">Avg Return</div>
                            <div className="text-lg font-semibold text-success-600">
                                +{formatPercentage(1.05)}
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
