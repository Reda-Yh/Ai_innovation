import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { cn } from "../lib/utils";

const TermsOfService = ({ className = "" }) => {
  return (
    <div className={cn("min-h-screen bg-background flex flex-col", className)}>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              By using our website, you agree to these Terms of Service. Please read them carefully.
            </p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                Agreement to Terms
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                These Terms of Service ("Terms") govern your use of the RYNOVA website and services. By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please do not use our website.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                1. Use of Our Website
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of others. Prohibited activities include:
              </p>
              <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 mb-6">
                <li>Distributing harmful content, such as malware or viruses.</li>
                <li>Attempting to gain unauthorized access to our systems.</li>
                <li>Using automated tools to scrape or extract data without permission.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                2. Intellectual Property
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                All content on our website, including text, images, and code, is owned by RYNOVA or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or modify our content without prior written consent.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                3. User Content
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                If you submit content (e.g., comments or form submissions), you grant RYNOVA a non-exclusive, royalty-free license to use, reproduce, and distribute that content. You are responsible for ensuring your content does not violate any laws or third-party rights.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                4. Limitation of Liability
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Our website is provided "as is" without warranties of any kind. RYNOVA is not liable for any damages arising from your use of the website, including but not limited to direct, indirect, or consequential damages.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                5. Termination
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                We may suspend or terminate your access to our website if you violate these Terms or engage in harmful activities. You may stop using our website at any time.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                6. Governing Law
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                These Terms are governed by the laws of Morocco. Any disputes will be resolved in the courts of Agadir, Morocco.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                7. Changes to These Terms
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                We may update these Terms from time to time. Changes will be posted on this page, and continued use of our website constitutes acceptance of the updated Terms.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                8. Contact Us
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                If you have questions about these Terms, please contact us at{" "}
                <a href="mailto:redayahyapro@gmail.com" className="text-primary hover:underline">
                  redayahyapro@gmail.com
                </a>.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TermsOfService;