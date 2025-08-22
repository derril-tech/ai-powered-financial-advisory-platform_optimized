"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, TrendingUp, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

interface AIInsight {
    id: string;
    type: 'recommendation' | 'warning' | 'opportunity' | 'analysis';
    title: string;
    description: string;
    confidence: number;
    priority: 'high' | 'medium' | 'low';
    action?: string;
}

const mockInsights: AIInsight[] = [
    {
        id: '1',
        type: 'recommendation',
        title: 'Rebalance Portfolio',
        description: 'Your technology allocation has grown to 26.5% of your portfolio. Consider rebalancing to maintain your target allocation of 20%.',
        confidence: 0.92,
        priority: 'high',
        action: 'View Rebalancing Options',
    },
    {
        id: '2',
        type: 'opportunity',
        title: 'Tax-Loss Harvesting Opportunity',
        description: 'You have unrealized losses in MSFT that could be harvested for tax benefits. Consider selling and replacing with a similar security.',
        confidence: 0.87,
        priority: 'medium',
        action: 'Review Tax Strategy',
    },
    {
        id: '3',
        type: 'analysis',
        title: 'Portfolio Risk Assessment',
        description: 'Your current portfolio has a Sharpe ratio of 1.2, which is above your target of 1.0. Risk-adjusted returns are performing well.',
        confidence: 0.95,
        priority: 'low',
    },
    {
        id: '4',
        type: 'warning',
        title: 'Concentration Risk',
        description: 'Your top 3 holdings represent 68.4% of your portfolio. Consider diversifying to reduce concentration risk.',
        confidence: 0.78,
        priority: 'medium',
        action: 'Diversification Analysis',
    },
];

const getInsightIcon = (type: AIInsight['type']) => {
    switch (type) {
        case 'recommendation':
            return <TrendingUp className="w-5 h-5 text-primary-600" />;
        case 'warning':
            return <AlertTriangle className="w-5 h-5 text-warning-600" />;
        case 'opportunity':
            return <CheckCircle className="w-5 h-5 text-success-600" />;
        case 'analysis':
            return <Brain className="w-5 h-5 text-blue-600" />;
    }
};

const getPriorityColor = (priority: AIInsight['priority']) => {
    switch (priority) {
        case 'high':
            return 'text-danger-600 bg-danger-50 dark:bg-danger-900/20';
        case 'medium':
            return 'text-warning-600 bg-warning-50 dark:bg-warning-900/20';
        case 'low':
            return 'text-success-600 bg-success-50 dark:bg-success-900/20';
    }
};

export function AIInsights() {
    const insights = mockInsights; // In real app, this would come from API

    return (
        <Card className="financial-card-hover">
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Brain className="w-5 h-5 text-primary-600" />
                        <span>AI Insights</span>
                    </div>
                    <Badge variant="secondary">Powered by GPT-4</Badge>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {insights.map((insight) => (
                        <div
                            key={insight.id}
                            className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex items-start space-x-3 flex-1">
                                    <div className="mt-1">
                                        {getInsightIcon(insight.type)}
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <h4 className="font-semibold text-gray-900 dark:text-white">
                                                {insight.title}
                                            </h4>
                                            <Badge
                                                variant="outline"
                                                className={`text-xs ${getPriorityColor(insight.priority)}`}
                                            >
                                                {insight.priority}
                                            </Badge>
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {insight.description}
                                        </p>
                                        <div className="flex items-center space-x-4">
                                            <div className="text-xs text-gray-500">
                                                Confidence: {Math.round(insight.confidence * 100)}%
                                            </div>
                                            {insight.action && (
                                                <Button variant="ghost" size="sm" className="text-xs">
                                                    {insight.action}
                                                    <ArrowRight className="w-3 h-3 ml-1" />
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* AI Summary */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                            <Brain className="w-5 h-5 text-primary-600 mt-1" />
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                    AI Portfolio Summary
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Your portfolio is performing well with a 12.5% YTD return, outperforming the S&P 500 by 4.2%.
                                    The AI recommends focusing on rebalancing and tax optimization opportunities in the coming quarter.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
