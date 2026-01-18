import Link from "next/link"
import { MainNav } from "@/components/shared/main-nav"
import { ModeToggle } from "@/components/mode-toggle"

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-6xl mx-auto flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo - Simple Text */}
                <Link href="/" className="font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Ivermectin Research
                </Link>

                {/* Navigation */}
                <div className="flex items-center gap-4">
                    <MainNav />
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}
