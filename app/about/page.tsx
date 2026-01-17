import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about Ivermectin Research, our mission to provide evidence-based medical information, and our commitment to scientific accuracy and transparency.",
    openGraph: {
        title: "About Ivermectin Research",
        description: "Our mission is to provide comprehensive, evidence-based information on ivermectin research and medical applications.",
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
                        Dedicated to providing evidence-based, comprehensive information on ivermectin research and medical applications
                    </p>
                </div>

                {/* Mission Statement */}
                <section className="mb-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our Mission</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Ivermectin Research was founded with a clear purpose: to bridge the gap between complex medical research and accessible, accurate health information. Our mission is to provide the public with comprehensive, evidence-based insights into ivermectin—one of the World Health Organization's Essential Medicines.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        We believe that access to reliable medical information empowers individuals to make informed decisions about their health. Through rigorous research compilation, peer-reviewed sources, and expert medical perspectives, we strive to be a trusted resource for healthcare professionals, patients, and researchers worldwide.
                    </p>
                </section>

                {/* What We Cover */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">What We Cover</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-blue-200 dark:border-gray-600">
                            <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-blue-300">Medical Uses</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Comprehensive coverage of FDA-approved applications, off-label uses, and ongoing clinical research.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-teal-200 dark:border-gray-600">
                            <h3 className="text-xl font-semibold mb-3 text-teal-900 dark:text-teal-300">Safety Information</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Detailed analysis of side effects, drug interactions, and safety profiles based on clinical data.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-purple-200 dark:border-gray-600">
                            <h3 className="text-xl font-semibold mb-3 text-purple-900 dark:text-purple-300">Dosage Guidelines</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Evidence-based dosing protocols for various conditions, weight-based calculations, and administration methods.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-indigo-200 dark:border-gray-600">
                            <h3 className="text-xl font-semibold mb-3 text-indigo-900 dark:text-indigo-300">Latest Research</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Regular updates on peer-reviewed studies, clinical trials, and emerging scientific consensus.
                            </p>
                        </div>
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
                                <p className="text-blue-100 dark:text-blue-200">All content is grounded in peer-reviewed research and authoritative medical sources.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1">
                                <span className="text-xl">✓</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Expert Review</h3>
                                <p className="text-blue-100 dark:text-blue-200">Content is reviewed by medical professionals with expertise in pharmacology and infectious diseases.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1">
                                <span className="text-xl">✓</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Regular Updates</h3>
                                <p className="text-blue-100 dark:text-blue-200">We continuously update our content to reflect the latest research and clinical guidelines.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1">
                                <span className="text-xl">✓</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Transparency</h3>
                                <p className="text-blue-100 dark:text-blue-200">All sources are cited, and potential conflicts of interest are disclosed.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Our Team</h2>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                        <div className="flex items-start space-x-6">
                            <div className="flex-shrink-0">
                                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                                    SC
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Dr. Sarah Chen, MD</h3>
                                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">Lead Medical Reviewer</p>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                                    Board-certified physician specializing in infectious diseases and clinical pharmacology. Dr. Chen has over 15 years of experience in medical research and has published extensively on antiparasitic medications.
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
                            <strong>The information provided on this website is for educational and informational purposes only.</strong> It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
                        </p>
                        <p>
                            Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
                        </p>
                        <p>
                            If you think you may have a medical emergency, call your doctor or emergency services immediately. Ivermectin Research does not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned on this site.
                        </p>
                    </div>
                </section>

                {/* Explore Our Guides */}
                <section className="text-center">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Explore Our Comprehensive Guides</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        Dive into our detailed, evidence-based articles on ivermectin
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/ivermectin-comprehensive-guide"
                            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors shadow-md"
                        >
                            Comprehensive Guide
                        </Link>
                        <Link
                            href="/ivermectin-uses"
                            className="inline-flex items-center px-6 py-3 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-semibold rounded-lg transition-colors shadow-md"
                        >
                            Medical Uses
                        </Link>
                        <Link
                            href="/ivermectin-dosage-guide"
                            className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors shadow-md"
                        >
                            Dosage Guide
                        </Link>
                        <Link
                            href="/ivermectin-side-effects"
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
