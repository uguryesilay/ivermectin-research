import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Ivermectin: Essential Medical Information & Research Guide (2026)',
  description: 'Comprehensive medical resource on ivermectin - FDA-approved uses, dosage guidelines, safety information, and latest 2026 research. Expert insights on this essential antiparasitic medication.',
  keywords: ['ivermectin', 'antiparasitic medication', 'FDA approved', 'medical guide', 'parasitic infections', 'dosage guide', 'side effects'],
  openGraph: {
    title: 'Ivermectin: Essential Medical Information & Research Guide (2026)',
    description: 'Expert medical insights on ivermectin uses, dosage, safety, and global health impact.',
    type: 'website',
    url: 'https://ivermectintablets2026.com',
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Ivermectin: Your Complete Medical Resource
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                Evidence-based information on one of the world's most important antiparasitic medications. Discover FDA-approved uses, proper dosing, safety guidelines, and the latest 2026 research.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#overview"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
                <Link
                  href="#guides"
                  className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                >
                  View Guides
                </Link>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/ivermectin-homepage-hero-banner.webp"
                alt="Ivermectin medical research"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1975</div>
              <div className="text-gray-600 dark:text-gray-400">Discovered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2015</div>
              <div className="text-gray-600 dark:text-gray-400">Nobel Prize</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4B+</div>
              <div className="text-gray-600 dark:text-gray-400">Doses Distributed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600 dark:text-gray-400">Countries Use</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            What is Ivermectin?
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Ivermectin is a highly effective antiparasitic medication that has transformed global health since its discovery in the 1970s. This Nobel Prize-winning drug has prevented millions of cases of blindness and disfigurement worldwide, particularly in developing countries.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Why Ivermectin Matters
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              As one of the World Health Organization's Essential Medicines, ivermectin plays a crucial role in treating parasitic infections that affect billions of people globally. Its safety profile and effectiveness have made it a cornerstone of public health programs across Africa, Latin America, and Asia.
            </p>

            <div className="bg-blue-50 dark:bg-gray-700 border-l-4 border-blue-600 p-6 mb-8">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">FDA-Approved Medical Uses</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Strongyloidiasis:</strong> Intestinal parasitic infection</li>
                <li><strong>Onchocerciasis:</strong> River blindness prevention</li>
                <li><strong>Head Lice:</strong> Topical treatment (Sklice)</li>
                <li><strong>Rosacea:</strong> Topical anti-inflammatory (Soolantra)</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              How Ivermectin Works
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Ivermectin targets specific channels in parasite nerve and muscle cells, causing paralysis and death of the organisms. Importantly, it demonstrates selective toxicity—highly effective against parasites while remaining safe for humans at therapeutic doses. This unique mechanism earned its developers the 2015 Nobel Prize in Physiology or Medicine.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Global Health Impact
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Since mass distribution programs began, ivermectin has been administered over 4 billion times. These programs have nearly eliminated river blindness in several countries and dramatically reduced the burden of lymphatic filariasis. The medication's impact on neglected tropical diseases cannot be overstated—it has prevented blindness for millions and improved quality of life for countless others.
            </p>

            <div className="bg-yellow-50 dark:bg-gray-700 border-l-4 border-yellow-600 p-6 mb-8">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">⚠️ Important Safety Information</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Ivermectin is a prescription medication that should only be used under medical supervision. Never use veterinary formulations for human use, as they are highly concentrated and can cause serious harm. Always consult your healthcare provider for proper diagnosis and treatment.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Latest Research (2026)
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Recent studies continue to explore ivermectin's potential applications. The 2025 BOHEMIA trial demonstrated a 26% reduction in malaria infections when used alongside standard interventions. Research into cancer applications remains in early stages, with ongoing Phase I/II trials for triple-negative breast cancer. However, these investigational uses are not FDA-approved and should not be pursued outside clinical trials.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Guides Section */}
      <section id="guides" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Medical Guides
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Explore detailed, evidence-based information on specific aspects of ivermectin
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Uses Guide */}
            <Link href="/ivermectin-uses" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Medical Uses</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Complete guide to FDA-approved and off-label applications, including parasitic infections, treatment protocols, and emerging research areas.
                </p>
                <span className="text-blue-600 dark:text-blue-400 font-semibold group-hover:underline">
                  Read Full Guide →
                </span>
              </div>
            </Link>

            {/* Dosage Guide */}
            <Link href="/ivermectin-dosage-guide" className="group">
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Dosage Guide</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Weight-based dosage charts, administration instructions, and safety guidelines for all FDA-approved indications and special populations.
                </p>
                <span className="text-teal-600 dark:text-teal-400 font-semibold group-hover:underline">
                  View Dosage Charts →
                </span>
              </div>
            </Link>

            {/* Side Effects Guide */}
            <Link href="/ivermectin-side-effects" className="group">
              <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Safety & Side Effects</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Comprehensive safety profile covering common and serious side effects, drug interactions, warning signs, and when to seek medical attention.
                </p>
                <span className="text-red-600 dark:text-red-400 font-semibold group-hover:underline">
                  Review Safety Information →
                </span>
              </div>
            </Link>

            {/* Comprehensive Guide */}
            <Link href="/ivermectin-comprehensive-guide" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Complete Reference</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  In-depth coverage of ivermectin including mechanism of action, pharmacokinetics, global health impact, and the latest 2026 research findings.
                </p>
                <span className="text-purple-600 dark:text-purple-400 font-semibold group-hover:underline">
                  Explore Complete Guide →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 dark:bg-gray-700 border-2 border-yellow-400 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Medical Disclaimer</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              This website provides educational information only and is not intended as medical advice. Ivermectin is a prescription medication that should only be used under the supervision of a qualified healthcare provider. Never self-diagnose or self-medicate. Always consult your doctor or pharmacist before starting, stopping, or changing any medication. If you experience a medical emergency, call 911 or seek immediate medical attention.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
