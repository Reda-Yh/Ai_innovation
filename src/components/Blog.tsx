import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";

const Blog = ({ className = "" }) => {
  // Mock blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Healthcare",
      excerpt: "Explore how AI is transforming diagnostics and patient care.",
      date: "April 10, 2025",
      slug: "future-ai-healthcare",
    },
    {
      id: 2,
      title: "Ethical Considerations in AI Development",
      excerpt: "A deep dive into the ethical challenges of building AI systems.",
      date: "March 25, 2025",
      slug: "ethical-ai-development",
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
              RYNOVA Blog
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Stay updated with the latest insights, trends, and innovations in artificial intelligence.
            </p>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
                Latest Posts
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {post.excerpt}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                      Published on {post.date}
                    </p>
                    <Button asChild variant="outline">
                      <Link to={`/articles/${post.slug}`}>Read More</Link>
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

export default Blog;