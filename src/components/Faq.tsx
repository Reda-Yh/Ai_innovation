import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { cn } from "../lib/utils";

const Faq = ({ className = "" }) => {
  // Mock FAQ data
  const faqs = [
    {
      question: "What services does RYNOVA offer?",
      answer:
        "RYNOVA provides AI consulting, research, and development services to help businesses integrate cutting-edge AI solutions.",
    },
    {
      question: "How can I contribute to your blog or research?",
      answer:
        "We welcome contributions! Please contact us at <a href='mailto:redayahyapro@gmail.com' className='text-primary hover:underline'>redayahyapro@gmail.com</a> to submit articles or research papers.",
    },
    {
      question: "Do you host AI-related events?",
      answer:
        "Yes, we organize conferences, workshops, and webinars. Check our Events page for upcoming activities.",
    },
  ];

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
              Frequently Asked Questions
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Find answers to common questions about our AI services and initiatives.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-slate-100 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm"
                >
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                    {faq.question}
                  </h3>
                  <p
                    className="text-slate-600 dark:text-slate-300"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Faq;