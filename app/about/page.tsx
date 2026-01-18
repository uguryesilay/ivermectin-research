import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Us | Ivermectin Research Hub",
    description: "Learn about Ivermectin Research, our mission to provide evidence-based medical information on ivermectin uses, dosage, safety, and the latest clinical research. Trusted by healthcare professionals worldwide.",
    keywords: ["ivermectin research", "medical information", "evidence-based medicine", "ivermectin safety", "antiparasitic medication"],
    alternates: {
        canonical: "https://ivermectintablets2026.com/about"
    },
    openGraph: {
        title: "About Ivermectin Research | Evidence-Based Medical Information",
        description: "Our mission is to provide comprehensive, evidence-based information on ivermectin research and medical applications. Trusted by healthcare professionals worldwide.",
        type: "website",
        url: "https://ivermectintablets2026.com/about"
    },
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent">
                        About Ivermectin Research
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Your trusted source for evidence-based, comprehensive information on ivermectin research and medical applications
                    </p>
                </div>

                {/* Mission Statement */}
                <section className="mb-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our Mission</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Ivermectin Research was created with one clear goal: to make complex medical research easy to understand for everyone. We want to help people learn the facts about ivermectin, a medicine that the World Health Organization calls essential.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        We believe that when people have access to good medical information, they can make better choices about their health. That is why we gather research from trusted medical sources and explain it in simple terms that anyone can follow.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        Our team works hard to give you the most up-to-date and accurate information. Whether you are a patient, a doctor, or just someone who wants to learn more, we are here to help you find the answers you need.
                    </p>
                </section>

                {/* What We Cover */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">What We Cover</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Link href="/medical-uses" className="group bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-blue-200 dark:border-gray-600 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-blue-300 group-hover:text-blue-700">Medical Uses</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Learn about FDA-approved uses, off-label applications, and what the latest clinical research shows.
                            </p>
                        </Link>
                        <Link href="/safety-side-effects" className="group bg-gradient-to-br from-teal-50 to-teal-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-teal-200 dark:border-gray-600 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-3 text-teal-900 dark:text-teal-300 group-hover:text-teal-700">Safety Information</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Find out about side effects, drug interactions, and safety information based on real clinical data.
                            </p>
                        </Link>
                        <Link href="/dosage-administration" className="group bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-purple-200 dark:border-gray-600 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-3 text-purple-900 dark:text-purple-300 group-hover:text-purple-700">Dosage Guidelines</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Get clear dosing information based on weight, condition, and the best way to take the medicine.
                            </p>
                        </Link>
                        <Link href="/research-mechanism" className="group bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-indigo-200 dark:border-gray-600 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-3 text-indigo-900 dark:text-indigo-300 group-hover:text-indigo-700">Latest Research</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Stay updated with the newest studies, clinical trials, and what scientists are learning.
                            </p>
                        </Link>
                    </div>
                </section>

                {/* Editorial Standards */}
                <section className="mb-16 bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-700 dark:to-teal-700 rounded-2xl p-8 text-white">
                    <h2 className="text-3xl font-bold mb-6">Our Editorial Standards</h2>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1">
                                <span className="text-xl">✓</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Evidence-Based</h3>
                                <p className="text-blue-100 dark:text-blue-200">Every article we write is based on real research from medical journals and trusted health organizations.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1">
                                <span className="text-xl">✓</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Expert Review</h3>
                                <p className="text-blue-100 dark:text-blue-200">Medical professionals who specialize in pharmacology and infectious diseases check our content for accuracy.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1">
                                <span className="text-xl">✓</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Regular Updates</h3>
                                <p className="text-blue-100 dark:text-blue-200">We keep our articles fresh by adding new research and following the latest medical guidelines.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1">
                                <span className="text-xl">✓</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Transparency</h3>
                                <p className="text-blue-100 dark:text-blue-200">We always tell you where our information comes from, so you can check the sources yourself.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Our Team</h2>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                            <div className="flex-shrink-0">
                                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                                    SC
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Dr. Sarah Chen, MD</h3>
                                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">Lead Medical Reviewer</p>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                    Dr. Chen is a board-certified physician who has spent over 15 years studying infectious diseases and how medicines work in the body. She has written many research papers about antiparasitic drugs and is passionate about helping people understand their treatment options.
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    MD from Johns Hopkins University School of Medicine • Fellowship in Infectious Diseases, Harvard Medical School
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Medical Disclaimer */}
                <section className="mb-16 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4 text-amber-900 dark:text-amber-300 flex items-center">
                        <span className="mr-3">⚠️</span>
                        Medical Disclaimer
                    </h2>
                    <div className="text-gray-700 dark:text-gray-300 space-y-3">
                        <p>
                            <strong>The information on this website is for learning purposes only.</strong> It is not meant to replace advice from your doctor or other health care provider.
                        </p>
                        <p>
                            Always talk to your doctor before starting any new medicine or if you have questions about your health. Do not ignore medical advice or wait to see a doctor because of something you read here.
                        </p>
                        <p>
                            If you think you have a medical emergency, call your doctor or emergency services right away. We do not recommend any specific tests, doctors, or products mentioned on this site.
                        </p>
                    </div>
                </section>

                {/* Explore Our Guides */}
                <section className="text-center">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Explore Our Comprehensive Guides</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        Start learning with our detailed, fact-based articles on ivermectin
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/research-mechanism/ivermectin-comprehensive-guide"
                            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors shadow-md"
                        >
                            Comprehensive Guide
                        </Link>
                        <Link
                            href="/medical-uses"
                            className="inline-flex items-center px-6 py-3 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-semibold rounded-lg transition-colors shadow-md"
                        >
                            Medical Uses
                        </Link>
                        <Link
                            href="/dosage-administration/ivermectin-dosage-guide"
                            className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors shadow-md"
                        >
                            Dosage Guide
                        </Link>
                        <Link
                            href="/safety-side-effects/ivermectin-side-effects"
                            className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold rounded-lg transition-colors shadow-md"
                        >
                            Safety & Side Effects
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
