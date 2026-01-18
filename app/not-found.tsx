import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
            <div className="text-center max-w-md">
                <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Page Not Found
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Sorry, we couldn't find the page you're looking for. It may have been moved or doesn't exist.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Go Home
                    </Link>
                    <Link
                        href="/medical-uses"
                        className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        Browse Articles
                    </Link>
                </div>
            </div>
        </div>
    )
}
