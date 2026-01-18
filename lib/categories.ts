export type Category = {
    slug: string
    title: string
    description: string
    icon: string
}

export const CATEGORIES: Category[] = [
    {
        slug: 'medical-uses',
        title: 'Medical Uses & Applications',
        description: 'Comprehensive guide to FDA-approved and off-label treatments, including parasitic infections and dermatological conditions.',
        icon: 'Stethoscope'
    },
    {
        slug: 'dosage-administration',
        title: 'Dosage & Administration',
        description: 'Weight-based dosage charts, administration forms (tablet vs liquid), and proper protocols for safe usage.',
        icon: 'Pill'
    },
    {
        slug: 'safety-side-effects',
        title: 'Safety & Side Effects',
        description: 'Critical safety information, potential side effects, drug interactions, and warning signs to monitor.',
        icon: 'ShieldAlert'
    },
    {
        slug: 'buying-guide',
        title: 'Buying Guide & Legal',
        description: 'Where to buy, prescription requirements, cost comparisons, and identifying legitimate pharmacy sources.',
        icon: 'ShoppingBag'
    },
    {
        slug: 'research-mechanism',
        title: 'Research & Mechanism',
        description: 'Scientific analysis of how ivermectin works, its history, clinical trials, and emerging medical research.',
        icon: 'Microscope'
    }
]

// Map specific article slugs to categories
// This avoids needing to update 50 MDX files manually
export const ARTICLE_CATEGORY_MAP: Record<string, string> = {
    // Medical Uses
    'ivermectin-for-scabies': 'medical-uses',
    'ivermectin-for-parasites': 'medical-uses',
    'ivermectin-for-skin-conditions': 'medical-uses',
    'ivermectin-for-rosacea': 'medical-uses',
    'ivermectin-for-lice': 'medical-uses',
    'ivermectin-for-bed-bugs': 'medical-uses',
    'ivermectin-for-dogs': 'medical-uses', // If relevant to human context in article
    'what-is-ivermectin-used-for': 'medical-uses',
    'ivermectin-for-inflammation': 'medical-uses',
    'ivermectin-for-arthritis': 'medical-uses',
    'ivermectin-for-lyme-disease': 'medical-uses',
    'ivermectin-for-pinworms': 'medical-uses',
    'tapeworm-treatment-does-ivermectin-work': 'medical-uses',
    'ivermectin-for-diabetes': 'medical-uses',
    'ivermectin-and-covid-19': 'medical-uses',

    // Dosage
    'ivermectin-dosage-guide': 'dosage-administration',
    'ivermectin-dosage-for-humans': 'dosage-administration',
    'how-to-take-ivermectin': 'dosage-administration',
    'ivermectin-paste-dosage-for-humans': 'dosage-administration',
    'liquid-ivermectin-dosage-for-humans': 'dosage-administration',
    'ivermectin-12mg-tablets': 'dosage-administration',
    'ivermectin-3mg-tablets': 'dosage-administration',
    'ivermectin-tablets-vs-paste-vs-liquid': 'dosage-administration',
    'oral-ivermectin-vs-topical': 'dosage-administration',
    'ivermectin-dosage-for-covid': 'dosage-administration',
    'ivermectin-for-kids': 'dosage-administration',
    'how-long-does-ivermectin-stay-in-your-system': 'dosage-administration',

    // Safety
    'ivermectin-side-effects': 'safety-side-effects',
    'is-ivermectin-safe-for-humans': 'safety-side-effects',
    'ivermectin-drug-interactions': 'safety-side-effects',
    'ivermectin-overdose': 'safety-side-effects',
    'ivermectin-safety-in-pregnancy-and-breastfeeding': 'safety-side-effects',
    'can-humans-take-dog-dewormer': 'safety-side-effects',
    'horse-ivermectin-for-humans': 'safety-side-effects',
    'ivermectin-shelf-life': 'safety-side-effects',
    'ivermectin-ingredients': 'safety-side-effects',
    'parasite-cleanse-supplements': 'safety-side-effects',

    // Buying
    'where-to-buy-ivermectin-for-humans': 'buying-guide',
    'buy-ivermectin-online-verified-pharmacies-vs-scam-sites': 'buying-guide',
    'ivermectin-price-guide': 'buying-guide',
    'ivermectin-over-the-counter': 'buying-guide',
    'how-to-get-ivermectin': 'buying-guide',
    'ivermectin-near-me': 'buying-guide',
    'stromectol-brand-ivermectin': 'buying-guide',
    'ivermectin-brand-names': 'buying-guide',
    'durvet-ivermectin-guide': 'buying-guide',
    'parapurge-review': 'buying-guide',
    'over-the-counter-parasite-medication': 'buying-guide',
    'best-human-dewormer-options': 'buying-guide',

    // Research
    'how-ivermectin-works-mechanism-of-action': 'research-mechanism',
    'ivermectin-history-discovery-nobel-prize': 'research-mechanism',
    'ivermectin-and-fenbendazole': 'research-mechanism',
    'ivermectin-vs-fenbendazole': 'research-mechanism',
    'anti-parasitic-medications-for-humans': 'research-mechanism',
    'deworming-medicine-for-humans': 'research-mechanism',
    'ivermectin-faq': 'research-mechanism',
    'ivermectin-comprehensive-guide': 'research-mechanism', // Flagship
    'ivermectin-uses': 'research-mechanism',
}

export function getCategoryBySlug(slug: string): Category | undefined {
    return CATEGORIES.find(c => c.slug === slug)
}

export function getArticleCategory(articleSlug: string): Category {
    // First try exact match
    if (ARTICLE_CATEGORY_MAP[articleSlug]) {
        return getCategoryBySlug(ARTICLE_CATEGORY_MAP[articleSlug])!
    }

    // Then try partial match (article slug starts with map key)
    for (const [mapKey, categorySlug] of Object.entries(ARTICLE_CATEGORY_MAP)) {
        if (articleSlug.startsWith(mapKey)) {
            return getCategoryBySlug(categorySlug)!
        }
    }

    // Default fallback
    return getCategoryBySlug('medical-uses')!
}
