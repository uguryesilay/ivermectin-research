// JSON-LD Schema components for SEO
import { getArticleCategory } from './categories'

type ArticleSchemaProps = {
    title: string
    description: string
    publishedAt: string
    author?: string
    slug: string
    categorySlug: string
    image?: string
}

export function generateArticleSchema({
    title,
    description,
    publishedAt,
    author = "Dr. Sarah Chen, MD",
    slug,
    categorySlug,
    image
}: ArticleSchemaProps) {
    const baseUrl = "https://ivermectintablets2026.com"

    return {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": title,
        "headline": title,
        "description": description,
        "datePublished": publishedAt,
        "dateModified": publishedAt,
        "author": {
            "@type": "Person",
            "name": author,
            "jobTitle": "Medical Doctor"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Ivermectin Research",
            "url": baseUrl,
            "logo": {
                "@type": "ImageObject",
                "url": `${baseUrl}/logo.png`
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${baseUrl}/${categorySlug}/${slug}`
        },
        "image": image ? `${baseUrl}${image}` : `${baseUrl}/og-image.jpg`,
        "url": `${baseUrl}/${categorySlug}/${slug}`,
        "inLanguage": "en-US",
        "isAccessibleForFree": true,
        "medicalAudience": {
            "@type": "MedicalAudience",
            "audienceType": "Patient"
        }
    }
}

export function generateBreadcrumbSchema(categoryTitle: string, categorySlug: string, articleTitle?: string, articleSlug?: string) {
    const baseUrl = "https://ivermectintablets2026.com"

    const items = [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": baseUrl
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": categoryTitle,
            "item": `${baseUrl}/${categorySlug}`
        }
    ]

    if (articleTitle && articleSlug) {
        items.push({
            "@type": "ListItem",
            "position": 3,
            "name": articleTitle,
            "item": `${baseUrl}/${categorySlug}/${articleSlug}`
        })
    }

    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items
    }
}

export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Ivermectin Research",
        "url": "https://ivermectintablets2026.com",
        "logo": "https://ivermectintablets2026.com/logo.png",
        "description": "Evidence-based ivermectin information and research",
        "sameAs": []
    }
}

export function generateWebsiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Ivermectin Research",
        "url": "https://ivermectintablets2026.com",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://ivermectintablets2026.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    }
}
