import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";

const ResearchPapers = ({ className = "" }) => {
  // Mock research papers data
  const papers = [
    {
      id: 1,
      title: "Advances in Neural Network Optimization",
      authors: "John Doe, Jane Smith",
      abstract: "A comprehensive study on optimizing neural networks for faster training.",
      date: "January 2025",
      url: "#",
    },
    {
      id: 2,
      title: "AI for Climate Change Mitigation",
      authors: "Alice Brown, Bob Wilson",
      abstract: "Exploring AI applications in predicting and mitigating climate change effects.",
      date: "December 2024",
      url: "#",
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
              Research Papers
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover cutting-edge AI research from our team and collaborators.
            </p>
          </div>
        </section>

        {/* Papers Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
                Recent Publications
              </h2>
              <div className="space-y-8">
                {papers.map((paper) => (
                  <div
                    key={paper.id}
                    className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                      {paper.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-2">
                      <strong>Authors:</strong> {paper.authors}
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {paper.abstract}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                      Published: {paper.date}
                    </p>
                    <Button asChild variant="outline">
                      <a href={paper.url} target="_blank" rel="noopener noreferrer">
                        View Paper
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ResearchPapers;