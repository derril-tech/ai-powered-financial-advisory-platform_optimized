"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Bell,
    Settings,
    User,
    LogOut,
    Menu,
    X,
    TrendingUp,
    DollarSign
} from 'lucide-react';

export function DashboardHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo and Brand */}
                    <div className="flex items-center">
                        <Link href="/dashboard" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                                <DollarSign className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-gray-900 dark:text-white">
                                FinGenius
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/dashboard"
                            className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                        >
                            Dashboard
                        </Link>
                        <Link
                            href="/portfolio"
                            className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                        >
                            Portfolio
                        </Link>
                        <Link
                            href="/market"
                            className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                        >
                            Market
                        </Link>
                        <Link
                            href="/advisor"
                            className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                        >
                            Advisor
                        </Link>
                    </nav>

                    {/* Right Side Actions */}
                    <div className="flex items-center space-x-4">
                        {/* Notifications */}
                        <Button variant="ghost" size="sm" className="relative">
                            <Bell className="w-5 h-5" />
                            <Badge
                                variant="destructive"
                                className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs"
                            >
                                3
                            </Badge>
                        </Button>

                        {/* User Menu */}
                        <div className="relative">
                            <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                                    <User className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                                </div>
                                <span className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    John Doe
                                </span>
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="sm"
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
                        <nav className="flex flex-col space-y-4">
                            <Link
                                href="/dashboard"
                                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Dashboard
                            </Link>
                            <Link
                                href="/portfolio"
                                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Portfolio
                            </Link>
                            <Link
                                href="/market"
                                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Market
                            </Link>
                            <Link
                                href="/advisor"
                                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Advisor
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
