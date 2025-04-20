import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { cn } from "../lib/utils";

const PrivacyPolicy = ({ className = "" }) => {
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
              Privacy Policy
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
          </div>
        </section>

        {/* Policy Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                Our Commitment to Privacy
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                At RYNOVA, we are committed to safeguarding your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website or use our services.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                1. Information We Collect
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 mb-6">
                <li>
                  <strong>Personal Information:</strong> Name, email address, phone number, and other details you provide when contacting us or submitting forms.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you interact with our website, such as IP address, browser type, pages visited, and time spent.
                </li>
                <li>
                  <strong>Cookies:</strong> Small data files stored on your device to enhance your experience (see our Cookie Policy for details).
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                2. How We Use Your Information
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 mb-6">
                <li>Respond to your inquiries and provide customer support.</li>
                <li>Improve our website and services.</li>
                <li>Send you updates, newsletters, or promotional materials (with your consent).</li>
                <li>Analyze website usage to enhance user experience.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                3. Sharing Your Information
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                We do not sell or rent your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 mb-6">
                <li>Service providers who assist us in operating our website (e.g., hosting or analytics providers).</li>
                <li>Legal authorities if required by law or to protect our rights.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                4. Data Security
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                We implement reasonable security measures to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                5. Your Rights
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 mb-6">
                <li>Access or correct your personal information.</li>
                <li>Request deletion of your data.</li>
                <li>Opt out of marketing communications.</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                To exercise these rights, contact us at{" "}
                <a href="mailto:redayahyapro@gmail.com" className="text-primary hover:underline">
                  redayahyapro@gmail.com
                </a>.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                6. Changes to This Policy
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                7. Contact Us
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                If you have questions about this Privacy Policy, please contact us at{" "}
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

export default PrivacyPolicy;