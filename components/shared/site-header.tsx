import Link from "next/link"
import { MainNav } from "@/components/shared/main-nav"
import { ModeToggle } from "@/components/mode-toggle"

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container max-w-5xl mx-auto flex h-14 items-center px-4 sm:px-6 lg:px-8">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <span className="font-bold text-lg">Ivermectin Research</span>
                </Link>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <MainNav />
                    <nav className="flex items-center">
                        <ModeToggle />
                    </nav>
                </div>
            </div>
        </header>
    )
}
