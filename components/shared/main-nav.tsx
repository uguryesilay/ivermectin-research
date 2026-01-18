"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { CATEGORIES } from "@/lib/categories"

export function MainNav() {
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

    React.useEffect(() => {
        setMobileMenuOpen(false)
    }, [pathname])

    return (
        <>
            {/* Desktop Navigation - Simple Links */}
            <nav className="hidden lg:flex items-center gap-6">
                {CATEGORIES.map((category) => (
                    <Link
                        key={category.slug}
                        href={`/${category.slug}`}
                        className={cn(
                            "text-sm transition-colors",
                            pathname === `/${category.slug}`
                                ? "text-blue-600 dark:text-blue-400 font-medium"
                                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                        )}
                    >
                        {category.title.split(' & ')[0]}
                    </Link>
                ))}
                <Link
                    href="/about"
                    className={cn(
                        "text-sm transition-colors",
                        pathname === "/about"
                            ? "text-blue-600 dark:text-blue-400 font-medium"
                            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    )}
                >
                    About
                </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
                className="lg:hidden p-2 text-gray-600 dark:text-gray-400"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
            >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-x-0 top-14 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 lg:hidden z-50">
                    <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
                        {CATEGORIES.map((category) => (
                            <Link
                                key={category.slug}
                                href={`/${category.slug}`}
                                className={cn(
                                    "px-3 py-2 text-sm rounded",
                                    pathname === `/${category.slug}`
                                        ? "bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium"
                                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900"
                                )}
                            >
                                {category.title}
                            </Link>
                        ))}
                        <Link
                            href="/about"
                            className={cn(
                                "px-3 py-2 text-sm rounded",
                                pathname === "/about"
                                    ? "bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium"
                                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900"
                            )}
                        >
                            About
                        </Link>
                    </nav>
                </div>
            )}
        </>
    )
}
