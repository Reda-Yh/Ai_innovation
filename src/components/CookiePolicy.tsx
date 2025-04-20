import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { cn } from "../lib/utils";

const CookiePolicy = ({ className = "" }) => {
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
              Cookie Policy
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              We use cookies to enhance your experience on our website. Learn more about how we use them.
            </p>
          </div>
        </section>

        {/* Policy Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                About Cookies
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Cookies are small text files stored on your device when you visit our website. They help us provide a better user experience and understand how our website is used.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                1. Types of Cookies We Use
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                We use the following types of cookies:
              </p>
              <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 mb-6">
                <li>
                  <strong>Essential Cookies:</strong> Necessary for the website to function, such as maintaining user sessions.
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting anonymous usage data.
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> Used to deliver personalized advertisements (if applicable, with your consent).
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                2. How We Use Cookies
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Cookies are used to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 mb-6">
                <li>Ensure the website functions correctly.</li>
                <li>Analyze website performance and user behavior.</li>
                <li>Personalize content and ads (where applicable).</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                3. Managing Cookies
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                You can control cookies through your browser settings. Most browsers allow you to block or delete cookies. Note that disabling essential cookies may affect the functionality of our website.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                4. Third-Party Cookies
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Some cookies may be set by third-party services, such as analytics providers (e.g., Google Analytics). These providers have their own privacy policies, and we encourage you to review them.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                5. Consent
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                By continuing to use our website, you consent to the use of cookies as described in this policy. We may display a cookie consent banner to allow you to manage your preferences.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                6. Changes to This Policy
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated effective date.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                7. Contact Us
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                If you have questions about our use of cookies, please contact us at{" "}
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

export default CookiePolicy;