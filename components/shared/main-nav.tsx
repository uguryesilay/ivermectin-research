"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"

const articles = [
    { href: "/ivermectin-comprehensive-guide", label: "Comprehensive Guide" },
    { href: "/ivermectin-uses", label: "Medical Uses" },
    { href: "/ivermectin-dosage-guide", label: "Dosage Guide" },
    { href: "/ivermectin-side-effects", label: "Side Effects" },
]

export function MainNav() {
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

    // Close mobile menu when route changes
    React.useEffect(() => {
        setMobileMenuOpen(false)
    }, [pathname])

    return (
        <>
            {/* Desktop Navigation */}
            <div className="mr-4 hidden md:flex">
                <nav className="flex items-center space-x-6 text-sm font-medium">
                    {articles.map((article) => (
                        <Link
                            key={article.href}
                            href={article.href}
                            className={cn(
                                "transition-colors hover:text-foreground/80 whitespace-nowrap",
                                pathname === article.href ? "text-foreground" : "text-foreground/60"
                            )}
                        >
                            {article.label}
                        </Link>
                    ))}
                    <Link
                        href="/about"
                        className={cn(
                            "transition-colors hover:text-foreground/80",
                            pathname === "/about" ? "text-foreground" : "text-foreground/60"
                        )}
                    >
                        About
                    </Link>
                </nav>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-2 hover:bg-accent rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
            >
                {mobileMenuOpen ? (
                    <X className="h-5 w-5" />
                ) : (
                    <Menu className="h-5 w-5" />
                )}
            </button>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="absolute top-14 left-0 right-0 bg-background border-b shadow-lg md:hidden z-50">
                    <nav className="container max-w-5xl mx-auto px-4 py-4 flex flex-col space-y-3">
                        {articles.map((article) => (
                            <Link
                                key={article.href}
                                href={article.href}
                                className={cn(
                                    "px-4 py-2 rounded-md transition-colors hover:bg-accent",
                                    pathname === article.href
                                        ? "bg-accent text-foreground font-medium"
                                        : "text-foreground/70"
                                )}
                            >
                                {article.label}
                            </Link>
                        ))}
                        <Link
                            href="/about"
                            className={cn(
                                "px-4 py-2 rounded-md transition-colors hover:bg-accent",
                                pathname === "/about"
                                    ? "bg-accent text-foreground font-medium"
                                    : "text-foreground/70"
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
