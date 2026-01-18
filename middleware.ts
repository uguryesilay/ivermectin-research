import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Article slug to category mapping - matches actual MDX filenames
const ARTICLE_CATEGORIES: Record<string, string> = {
    // Medical Uses
    'ivermectin-for-parasites-types-treated-and-effectiveness': 'medical-uses',
    'ivermectin-for-scabies-treatment-protocol-and-success-rates': 'medical-uses',
    'ivermectin-for-lyme-disease-treatment-protocol-evidence': 'medical-uses',
    'ivermectin-for-pinworms-effectiveness-and-alternatives': 'medical-uses',
    'ivermectin-for-skin-conditions-rosacea-and-dermatological-uses': 'medical-uses',
    'ivermectin-for-inflammation-research-anti-inflammatory-effects': 'medical-uses',
    'ivermectin-for-arthritis-evidence-protocols-user-experiences': 'medical-uses',
    'ivermectin-for-diabetes-research-and-evidence': 'medical-uses',
    'what-is-ivermectin-used-for-fda-approved-and-off-label-uses': 'medical-uses',
    'tapeworm-treatment-does-ivermectin-work': 'medical-uses',
    'best-human-dewormer-options-ivermectin-vs-alternatives': 'medical-uses',

    // Dosage & Administration
    'ivermectin-dosage-for-humans-complete-guide-by-weight-and-condition': 'dosage-administration',
    'ivermectin-12mg-tablets-complete-usage-guide': 'dosage-administration',
    'how-to-take-ivermectin-timing-food-interactions-best-practices': 'dosage-administration',
    'ivermectin-for-kids-pediatric-safety-and-dosing': 'dosage-administration',
    'ivermectin-tablets-vs-paste-vs-liquid-which-form-to-choose': 'dosage-administration',
    'ivermectin-paste-dosage-for-humans-converting-horse-paste-safely': 'dosage-administration',
    'liquid-ivermectin-dosage-for-humans-injectable-vs-oral-solutions': 'dosage-administration',
    'oral-ivermectin-vs-topical-choosing-the-right-form': 'dosage-administration',
    'ivermectin-dosage-for-covid-clinical-trial-protocols': 'dosage-administration',
    'ivermectin-dosage-guide': 'dosage-administration',

    // Safety & Side Effects
    'ivermectin-side-effects-complete-safety-guide': 'safety-side-effects',
    'is-ivermectin-safe-for-humans-fda-status-and-clinical-evidence': 'safety-side-effects',
    'ivermectin-drug-interactions-what-you-cannot-take-together': 'safety-side-effects',
    'ivermectin-overdose-symptoms-treatment-safe-limits': 'safety-side-effects',
    'ivermectin-safety-in-pregnancy-and-breastfeeding': 'safety-side-effects',
    'how-long-does-ivermectin-stay-in-your-system': 'safety-side-effects',
    'horse-ivermectin-for-humans-safety-guide-and-conversion': 'safety-side-effects',
    'can-humans-take-dog-dewormer-safety-analysis': 'safety-side-effects',
    'ivermectin-side-effects': 'safety-side-effects',
    'ivermectin-ingredients-whats-in-the-tablets': 'safety-side-effects',
    'ivermectin-shelf-life-storage-expiration-viability': 'safety-side-effects',

    // Research & Mechanism
    'how-ivermectin-works-mechanism-of-action-explained': 'research-mechanism',
    'ivermectin-and-covid-19-what-the-research-shows-2026-update': 'research-mechanism',
    'ivermectin-history-discovery-nobel-prize-global-impact': 'research-mechanism',
    'ivermectin-faq-50-common-questions-answered': 'research-mechanism',
    'ivermectin-comprehensive-guide': 'research-mechanism',
    'ivermectin-uses': 'research-mechanism',
    'anti-parasitic-medications-for-humans-complete-guide': 'research-mechanism',
    'deworming-medicine-for-humans-options-and-protocols': 'research-mechanism',
    'ivermectin-and-fenbendazole-complete-combination-protocol': 'research-mechanism',
    'ivermectin-vs-fenbendazole-which-dewormer-is-better': 'research-mechanism',

    // Buying Guide
    'where-to-buy-ivermectin-for-humans-legal-options-in-2026': 'buying-guide',
    'how-to-get-ivermectin-prescription-and-access-guide': 'buying-guide',
    'buy-ivermectin-online-verified-pharmacies-vs-scam-sites': 'buying-guide',
    'ivermectin-over-the-counter-states-where-its-available-without-prescription': 'buying-guide',
    'ivermectin-near-me-finding-local-pharmacies-that-stock-it': 'buying-guide',
    'ivermectin-price-guide-cost-comparison-by-form-and-pharmacy-2026': 'buying-guide',
    'ivermectin-brand-names-generic-vs-branded-products': 'buying-guide',
    'stromectol-brand-ivermectin-complete-guide-and-comparison': 'buying-guide',
    'durvet-ivermectin-guide-paste-injectable-tablet-forms': 'buying-guide',
    'parapurge-review-ivermectin-fenbendazole-supplement-analysis': 'buying-guide',
    'parasite-cleanse-supplements-ivermectin-and-natural-options': 'buying-guide',
    'over-the-counter-parasite-medication-whats-available': 'buying-guide',
}

// Known categories (to avoid redirecting category pages)
const CATEGORIES = [
    'medical-uses',
    'dosage-administration',
    'safety-side-effects',
    'research-mechanism',
    'buying-guide',
]

// Known static paths to ignore
const STATIC_PATHS = [
    'api',
    'images',
    '_next',
    'favicon.ico',
    'robots.txt',
    'sitemap.xml',
    'feed.xml',
    'llms.txt',
]

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    // Skip static paths
    if (STATIC_PATHS.some(path => pathname.startsWith(`/${path}`))) {
        return NextResponse.next()
    }

    // Get the first path segment
    const segments = pathname.split('/').filter(Boolean)

    // If it's a root-level path (single segment)
    if (segments.length === 1) {
        const slug = segments[0]

        // Skip if it's a category page
        if (CATEGORIES.includes(slug)) {
            return NextResponse.next()
        }

        // Check if it's an article that needs redirect
        const category = ARTICLE_CATEGORIES[slug]
        if (category) {
            const newUrl = new URL(`/${category}/${slug}`, request.url)
            return NextResponse.redirect(newUrl, 301)
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        // Match all paths except static files
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
}
