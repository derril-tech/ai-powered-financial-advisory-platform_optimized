"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, ArrowUpRight, ArrowDownLeft, DollarSign, Eye } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

interface Activity {
    id: string;
    type: 'buy' | 'sell' | 'dividend' | 'deposit' | 'withdrawal';
    symbol?: string;
    description: string;
    amount: number;
    timestamp: string;
    status: 'completed' | 'pending' | 'failed';
}

const mockActivities: Activity[] = [
    {
        id: '1',
        type: 'buy',
        symbol: 'AAPL',
        description: 'Bought 10 shares of Apple Inc.',
        amount: 1502.50,
        timestamp: '2024-01-15T10:30:00Z',
        status: 'completed',
    },
    {
        id: '2',
        type: 'dividend',
        symbol: 'VTI',
        description: 'Dividend received from Vanguard Total Stock Market ETF',
        amount: 245.75,
        timestamp: '2024-01-14T09:15:00Z',
        status: 'completed',
    },
    {
        id: '3',
        type: 'sell',
        symbol: 'TSLA',
        description: 'Sold 5 shares of Tesla Inc.',
        amount: 1250.00,
        timestamp: '2024-01-13T14:45:00Z',
        status: 'completed',
    },
    {
        id: '4',
        type: 'deposit',
        description: 'Deposit from bank account',
        amount: 5000.00,
        timestamp: '2024-01-12T08:00:00Z',
        status: 'completed',
    },
    {
        id: '5',
        type: 'buy',
        symbol: 'MSFT',
        description: 'Bought 15 shares of Microsoft Corporation',
        amount: 4811.25,
        timestamp: '2024-01-11T11:20:00Z',
        status: 'pending',
    },
];

const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
        case 'buy':
            return <ArrowUpRight className="w-4 h-4 text-success-600" />;
        case 'sell':
            return <ArrowDownLeft className="w-4 h-4 text-danger-600" />;
        case 'dividend':
            return <DollarSign className="w-4 h-4 text-primary-600" />;
        case 'deposit':
            return <ArrowUpRight className="w-4 h-4 text-success-600" />;
        case 'withdrawal':
            return <ArrowDownLeft className="w-4 h-4 text-danger-600" />;
    }
};

const getStatusColor = (status: Activity['status']) => {
    switch (status) {
        case 'completed':
            return 'text-success-600 bg-success-50 dark:bg-success-900/20';
        case 'pending':
            return 'text-warning-600 bg-warning-50 dark:bg-warning-900/20';
        case 'failed':
            return 'text-danger-600 bg-danger-50 dark:bg-danger-900/20';
    }
};

const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) {
        return 'Just now';
    } else if (diffInHours < 24) {
        return `${diffInHours}h ago`;
    } else {
        const diffInDays = Math.floor(diffInHours / 24);
        return `${diffInDays}d ago`;
    }
};

export function RecentActivity() {
    const activities = mockActivities; // In real app, this would come from API

    return (
        <Card className="financial-card-hover">
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-gray-500" />
                        <span>Recent Activity</span>
                    </div>
                    <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View All
                    </Button>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {activities.map((activity) => (
                        <div
                            key={activity.id}
                            className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                            {/* Activity Icon */}
                            <div className="flex-shrink-0">
                                {getActivityIcon(activity.type)}
                            </div>

                            {/* Activity Details */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                            {activity.description}
                                        </p>
                                        {activity.symbol && (
                                            <Badge variant="outline" className="text-xs">
                                                {activity.symbol}
                                            </Badge>
                                        )}
                                    </div>
                                    <div className="text-right">
                                        <div className={`text-sm font-semibold ${activity.type === 'buy' || activity.type === 'deposit' || activity.type === 'dividend'
                                                ? 'text-success-600'
                                                : 'text-danger-600'
                                            }`}>
                                            {activity.type === 'buy' || activity.type === 'deposit' || activity.type === 'dividend' ? '+' : ''}
                                            {formatCurrency(activity.amount)}
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            {formatTimestamp(activity.timestamp)}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-1">
                                    <Badge
                                        variant="outline"
                                        className={`text-xs ${getStatusColor(activity.status)}`}
                                    >
                                        {activity.status}
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Activity Summary */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                            <div className="text-sm text-gray-600 dark:text-gray-400">This Week</div>
                            <div className="text-lg font-semibold text-success-600">
                                +{formatCurrency(6749.50)}
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-sm text-gray-600 dark:text-gray-400">Transactions</div>
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">
                                {activities.length}
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
