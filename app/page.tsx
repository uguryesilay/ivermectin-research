import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getBlogPosts } from '@/lib/mdx'
import { CATEGORIES, getArticleCategory } from '@/lib/categories'
import { generateOrganizationSchema, generateWebsiteSchema, generateFAQSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Ivermectin Research Hub | Evidence-Based Medical Information (2026)',
  description: 'Comprehensive medical resource on ivermectin - FDA-approved uses, dosage guidelines, safety information, and latest 2026 research.',
}

// FAQ Data for Schema
const faqs = [
  {
    question: "What is ivermectin used for?",
    answer: "Ivermectin is FDA-approved for treating parasitic infections including strongyloidiasis, onchocerciasis (river blindness), and scabies. It works by paralyzing parasites."
  },
  {
    question: "How do you take ivermectin?",
    answer: "Ivermectin is taken orally as a tablet, usually on an empty stomach with water. The typical dose is 150-200 mcg per kilogram of body weight. Always follow your doctor's instructions."
  },
  {
    question: "Is ivermectin safe for humans?",
    answer: "Yes, ivermectin is FDA-approved and considered safe when used as prescribed. Billions of doses have been given worldwide. Common side effects are mild and include dizziness and nausea."
  },
  {
    question: "Where can I buy ivermectin?",
    answer: "Ivermectin requires a prescription in the US. You can get it from licensed pharmacies with a valid prescription from your doctor."
  },
  {
    question: "What are the side effects of ivermectin?",
    answer: "Common side effects include dizziness, nausea, diarrhea, and fatigue. Serious side effects are rare. Consult a doctor if you experience severe symptoms."
  }
]

export default function HomePage() {
  const allPosts = getBlogPosts()
  const latestPosts = allPosts.slice(0, 3)

  const orgSchema = generateOrganizationSchema()
  const websiteSchema = generateWebsiteSchema()
  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />


      <div className="min-h-screen bg-white dark:bg-gray-950">


        {/* Hero Section - NO H1 here */}
        <section className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-3">
              Updated January 2026 • Evidence-Based Medical Resource
            </p>
            <p className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Your Complete Guide to Ivermectin
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              FDA-approved uses, dosage guidelines, safety profiles, drug interactions, and the latest clinical research.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/medical-uses" className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Medical Uses
              </Link>
              <Link href="/dosage-administration" className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                Dosage Guide
              </Link>
              <Link href="/safety-side-effects" className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                Safety Info
              </Link>
            </div>
          </div>
        </section>

        {/* Main Article with proper H1, H2 structure */}
        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* H1 - Main Article Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Ivermectin Tablets: Complete Guide to Uses, Dosage, and Safety
            </h1>

            {/* Table of Contents */}
            <nav className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mb-10">
              <p className="font-semibold text-gray-900 dark:text-white mb-4">Table of Contents</p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li><a href="#what-is-ivermectin" className="hover:text-blue-600">What is Ivermectin?</a></li>
                <li><a href="#fda-approved-uses" className="hover:text-blue-600">FDA-Approved Uses</a></li>
                <li><a href="#how-ivermectin-works" className="hover:text-blue-600">How Ivermectin Works</a></li>
                <li><a href="#dosage-guidelines" className="hover:text-blue-600">Proper Dosage Guidelines</a></li>
                <li><a href="#side-effects" className="hover:text-blue-600">Potential Side Effects</a></li>
                <li><a href="#drug-interactions" className="hover:text-blue-600">Drug Interactions</a></li>
                <li><a href="#special-populations" className="hover:text-blue-600">Special Populations</a></li>
                <li><a href="#global-health-impact" className="hover:text-blue-600">Global Health Impact</a></li>
              </ul>
            </nav>

            <div className="prose prose-gray dark:prose-invert max-w-none">

              {/* H2 Sections */}
              <h2 id="what-is-ivermectin">What is Ivermectin?</h2>

              <p>Ivermectin is a drug that has changed global health since it was found in the late 1970s. It is part of a class called avermectins, which come from a natural compound made by the bacteria Streptomyces avermitilis. The discovery of ivermectin was so important that William C. Campbell and Satoshi Ōmura won the Nobel Prize in Physiology or Medicine in 2015.</p>

              <p>This drug is mainly used to treat <Link href="/medical-uses" className="text-blue-600 hover:underline">parasite infections</Link> in people and animals. In humans, ivermectin is approved to treat infections caused by roundworms, threadworms, and other parasites. The World Health Organization has listed ivermectin on its list of essential medicines since the 1980s, showing its key role in health care around the world.</p>

              <p>Ivermectin comes in different forms: tablets for oral use, creams and lotions for the skin, and shots for animals. For people, the most common form is the oral tablet, often in 3mg doses. For more details on different forms, see our <Link href="/dosage-administration/ivermectin-tablets-vs-paste-vs-liquid-which-form-to-choose" className="text-blue-600 hover:underline">comparison of ivermectin forms</Link>.</p>

              <p>The drug has been used safely in hundreds of millions of people all over the world. It has been part of large programs that give the medicine to fight river blindness and lymphatic filariasis in tropical areas. For more on this topic, read our guide on <Link href="/research-mechanism/ivermectin-history-discovery-nobel-prize-global-impact" className="text-blue-600 hover:underline">ivermectin's history and Nobel Prize</Link>.</p>

              <h2 id="fda-approved-uses">FDA-Approved Uses</h2>

              <p>The U.S. Food and Drug Administration has approved ivermectin for several parasite diseases. For a complete overview, visit our <Link href="/medical-uses" className="text-blue-600 hover:underline">Medical Uses category</Link>.</p>

              <h3>Intestinal Strongyloidiasis</h3>
              <p>Strongyloidiasis is an infection caused by the roundworm Strongyloides stercoralis. This parasite is common in tropical and subtropical areas. Ivermectin is the best treatment for this condition, with cure rates over 80% after one dose. Learn more about <Link href="/medical-uses/ivermectin-for-parasites-types-treated-and-effectiveness" className="text-blue-600 hover:underline">parasites treated by ivermectin</Link>.</p>

              <h3>Onchocerciasis (River Blindness)</h3>
              <p>Onchocerciasis is caused by the worm Onchocerca volvulus. Without treatment, it can cause permanent blindness. Ivermectin kills the microfilariae, or young worms, that are made by the adult worms. Treatment is usually given every 6 to 12 months.</p>

              <h3>Scabies</h3>
              <p>Oral ivermectin is approved for treating scabies, especially if people can't use creams or lotions. For detailed treatment protocols, see our <Link href="/medical-uses/ivermectin-for-scabies-treatment-protocol-and-success-rates" className="text-blue-600 hover:underline">scabies treatment guide</Link>.</p>

              <h3>Head Lice</h3>
              <p>Ivermectin is also approved for head lice. A single dose often works, but a second dose after 7 to 10 days may be needed.</p>

              <h2 id="how-ivermectin-works">How Ivermectin Works</h2>

              <p>Ivermectin works through a special way that targets the nervous systems of invertebrate animals. For a deep dive into the science, read our article on <Link href="/research-mechanism/how-ivermectin-works-mechanism-of-action-explained" className="text-blue-600 hover:underline">ivermectin's mechanism of action</Link>.</p>

              <h3>Mechanism of Action</h3>
              <p>The drug binds to channels called glutamate-gated chloride channels, which are found in nerves and muscles of worms and insects but not in humans. When ivermectin binds to these channels, they open and let in chloride ions. This causes paralysis and death of the parasite.</p>

              <h3>Pharmacokinetics</h3>
              <p>After taking it by mouth, ivermectin is well absorbed in the stomach and intestines. Its highest level in blood happens around 4 hours after taking it. For timing tips, see <Link href="/dosage-administration/how-to-take-ivermectin-timing-food-interactions-best-practices" className="text-blue-600 hover:underline">how to take ivermectin</Link>.</p>

              <h2 id="dosage-guidelines">Proper Dosage Guidelines</h2>

              <p>Getting the right dose of ivermectin depends on what disease is being treated and the person's weight. For complete dosing charts, visit our <Link href="/dosage-administration" className="text-blue-600 hover:underline">Dosage & Administration category</Link>.</p>

              <h3>Weight-Based Dosing</h3>
              <p>For most parasite infections, ivermectin is given based on body weight. The usual dose is about 150 to 200 micrograms per kilogram. A 70 kg adult would get about 12 mg. See our detailed <Link href="/dosage-administration/ivermectin-dosage-for-humans-complete-guide-by-weight-and-condition" className="text-blue-600 hover:underline">dosage guide by weight</Link>.</p>

              <h3>12mg Tablets</h3>
              <p>The standard tablet form comes in 3mg doses. For most adults, this means taking four tablets. Read more in our <Link href="/dosage-administration/ivermectin-12mg-tablets-complete-usage-guide" className="text-blue-600 hover:underline">12mg tablets guide</Link>.</p>

              <h2 id="side-effects">Potential Side Effects</h2>

              <p>Like all drugs, ivermectin can cause side effects. For comprehensive safety information, visit our <Link href="/safety-side-effects" className="text-blue-600 hover:underline">Safety & Side Effects category</Link>.</p>

              <h3>Common Side Effects</h3>
              <p>The most common side effects are mild: headache, dizziness, muscle ache, nausea, and diarrhea. For a complete list, see our <Link href="/safety-side-effects/ivermectin-side-effects-complete-safety-guide" className="text-blue-600 hover:underline">side effects guide</Link>.</p>

              <h3>Mazzotti Reaction</h3>
              <p>When treating onchocerciasis, a reaction called the Mazzotti reaction can occur when parasites die. Symptoms include fever, headache, and joint pain.</p>

              <h2 id="drug-interactions">Drug Interactions</h2>

              <p>Understanding potential drug interactions is essential for safe use. Read our complete guide on <Link href="/safety-side-effects/ivermectin-drug-interactions-what-you-cannot-take-together" className="text-blue-600 hover:underline">ivermectin drug interactions</Link>.</p>

              <h3>CYP3A4 Interactions</h3>
              <p>Because ivermectin is processed by the CYP3A4 enzyme, drugs that affect this enzyme can change ivermectin levels. CYP3A4 inhibitors like ketoconazole can increase levels, while inducers like rifampin can decrease them.</p>

              <h2 id="special-populations">Special Populations</h2>

              <h3>Pregnancy and Breastfeeding</h3>
              <p>Ivermectin is Pregnancy Category C. It should only be used when benefits clearly outweigh risks. For detailed information, see our guide on <Link href="/safety-side-effects/ivermectin-safety-in-pregnancy-and-breastfeeding" className="text-blue-600 hover:underline">ivermectin in pregnancy</Link>.</p>

              <h3>Children</h3>
              <p>Ivermectin is generally not recommended for children weighing less than 15 kg. For pediatric dosing, see our <Link href="/dosage-administration/ivermectin-for-kids-pediatric-safety-and-dosing" className="text-blue-600 hover:underline">pediatric safety guide</Link>.</p>

              <h2 id="global-health-impact">Global Health Impact</h2>

              <p>Ivermectin has had a profound impact on global public health. Since the late 1980s, large-scale programs have distributed billions of doses in Africa, Latin America, and the Middle East. The Mectizan Donation Program has provided ivermectin free of charge since 1987.</p>

              <p>The World Health Organization includes ivermectin on its Model List of Essential Medicines. Learn more about <Link href="/research-mechanism/ivermectin-history-discovery-nobel-prize-global-impact" className="text-blue-600 hover:underline">ivermectin's global impact</Link>.</p>

            </div>
          </div>
        </article>

        {/* Medical Disclaimer */}
        <section className="py-6 bg-yellow-50 dark:bg-yellow-900/20 border-t border-yellow-200 dark:border-yellow-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Medical Disclaimer:</strong> This is educational content only. Ivermectin is a prescription medication. Always consult a healthcare provider before use.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <summary className="flex justify-between items-center cursor-pointer p-4 font-medium text-gray-900 dark:text-white">
                    {faq.question}
                    <span className="ml-2 text-gray-500">+</span>
                  </summary>
                  <p className="px-4 pb-4 text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </details>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/research-mechanism/ivermectin-faq-50-common-questions-answered" className="text-blue-600 hover:underline text-sm">
                → View all 50 FAQs
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-12 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xl font-bold text-gray-900 dark:text-white mb-6">Related Articles</p>
            <div className="grid md:grid-cols-3 gap-4">
              {latestPosts.map((post) => {
                const category = getArticleCategory(post.slug)
                return (
                  <Link key={post.slug} href={`/${category.slug}/${post.slug}`} className="group">
                    <article className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative aspect-video">
                        <Image src={`/images/${post.slug}-hero.webp`} alt={post.metadata.title} fill sizes="33vw" className="object-cover" />
                      </div>
                      <div className="p-3">
                        <p className="font-medium text-sm text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600">{post.metadata.title}</p>
                      </div>
                    </article>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Categories Footer */}
        <section className="py-8 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg font-bold text-gray-900 dark:text-white mb-4">Browse All Topics</p>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <Link key={cat.slug} href={`/${cat.slug}`} className="px-3 py-1.5 text-sm border border-gray-200 dark:border-gray-700 rounded hover:border-blue-500 hover:text-blue-600 transition-colors">
                  {cat.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

