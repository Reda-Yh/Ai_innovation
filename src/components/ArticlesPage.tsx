import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ArticleCard from "./ArticleCard";
import { cn } from "../lib/utils";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({ className = "" }: ArticlesPageProps) => {
  // Sample articles data
  const articles = [
    {
      id: "1",
      title: "The Future of Generative AI in Creative Industries",
      description:
        "How generative AI is transforming design, music, and content creation across various industries.",
      imageUrl:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      date: "May 15, 2023",
      category: "Creative AI",
    },
    {
      id: "2",
      title: "Ethical Considerations in AI Development",
      description:
        "Exploring the ethical challenges and responsibilities in developing advanced AI systems.",
      imageUrl:
        "https://images.unsplash.com/photo-1655720828018-edd2daec9349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      date: "June 2, 2023",
      category: "Ethics",
    },
    {
      id: "3",
      title: "Machine Learning Breakthroughs in Healthcare",
      description:
        "Recent advancements in ML algorithms are revolutionizing disease diagnosis and treatment planning.",
      imageUrl:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      date: "June 18, 2023",
      category: "Healthcare",
    },
    {
      id: "4",
      title: "The Rise of Autonomous Vehicles",
      description:
        "How AI is powering the next generation of self-driving cars and transforming transportation.",
      imageUrl:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      date: "July 5, 2023",
      category: "Transportation",
    },
    {
      id: "5",
      title: "Natural Language Processing: Current State and Future",
      description:
        "An in-depth look at where NLP stands today and what developments we can expect in the coming years.",
      imageUrl:
        "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      date: "July 22, 2023",
      category: "NLP",
    },
    {
      id: "6",
      title: "AI in Education: Personalized Learning",
      description:
        "How artificial intelligence is creating customized educational experiences for students worldwide.",
      imageUrl:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      date: "August 10, 2023",
      category: "Education",
    },
  ];

  // Categories for filtering
  const categories = [
    "All",
    "Creative AI",
    "Ethics",
    "Healthcare",
    "Transportation",
    "NLP",
    "Education",
  ];

  return (
    <div className={cn("min-h-screen bg-background flex flex-col", className)}>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              AI Articles & Insights
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Explore our collection of in-depth articles on artificial
              intelligence, machine learning, and emerging technologies.
            </p>
          </div>
        </section>

        {/* Filtering Section */}
        <section className="py-8 bg-slate-100 dark:bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === "All"
                      ? "bg-primary text-primary-foreground"
                      : "bg-white dark:bg-slate-700 text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <ArticleCard
                  key={article.id}
                  title={article.title}
                  description={article.description}
                  imageUrl={article.imageUrl}
                  date={article.date}
                  category={article.category}
                  readMoreUrl={`/articles/${article.id}`}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <button className="w-10 h-10 rounded-md flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600">
                  &lt;
                </button>
                <button className="w-10 h-10 rounded-md flex items-center justify-center bg-primary text-primary-foreground">
                  1
                </button>
                <button className="w-10 h-10 rounded-md flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600">
                  2
                </button>
                <button className="w-10 h-10 rounded-md flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600">
                  3
                </button>
                <button className="w-10 h-10 rounded-md flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600">
                  &gt;
                </button>
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

export default ArticlesPage;
