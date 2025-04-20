import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ArticleCard from "./ArticleCard";
import { cn } from "../lib/utils";
import { useTranslation } from "react-i18next";

interface ArticlesPageProps {
  className?: string;
}

interface Article {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  category: string;
}

const ArticlesPage = ({ className = "" }: ArticlesPageProps) => {
  const { t } = useTranslation();

  // Sample articles data - expanded with more entries
  const allArticles = [
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
    {
      id: "7",
      title: "Reinforcement Learning: Beyond Games",
      description:
        "How reinforcement learning is moving beyond game playing to solve real-world problems in robotics and automation.",
      imageUrl:
        "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      date: "August 25, 2023",
      category: "Reinforcement Learning",
    },
    {
      id: "8",
      title: "Computer Vision Advancements in 2023",
      description:
        "The latest breakthroughs in computer vision technology and how they're changing industries from retail to security.",
      imageUrl:
        "https://images.unsplash.com/photo-1563630381190-77c336ea545a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      date: "September 5, 2023",
      category: "Computer Vision",
    },
    {
      id: "9",
      title: "AI and Climate Change: Modeling Solutions",
      description:
        "How artificial intelligence is helping scientists model climate change and develop innovative solutions.",
      imageUrl:
        "https://images.unsplash.com/photo-1593288942460-e321b92a6cde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      date: "September 18, 2023",
      category: "Environmental",
    },
    {
      id: "10",
      title: "The Evolution of Chatbots and Virtual Assistants",
      description:
        "From simple rule-based systems to sophisticated AI-powered assistants: the evolution of conversational interfaces.",
      imageUrl:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      date: "October 2, 2023",
      category: "NLP",
    },
    {
      id: "11",
      title: "AI in Finance: Transforming Investment Strategies",
      description:
        "How machine learning algorithms are changing the way financial institutions approach investment and risk management.",
      imageUrl:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      date: "October 15, 2023",
      category: "Finance",
    },
    {
      id: "12",
      title: "Explainable AI: Making Black Box Models Transparent",
      description:
        "The importance of transparency in AI systems and the latest techniques for making complex models more interpretable.",
      imageUrl:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      date: "November 3, 2023",
      category: "Ethics",
    },
  ];

  // Get all unique categories from articles
  const allCategories = [
    "All",
    ...new Set(allArticles.map((article) => article.category)),
  ];

  // State for filtering and pagination
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(6);

  // Filter articles based on selected category
  const filteredArticles =
    selectedCategory === "All"
      ? allArticles
      : allArticles.filter((article) => article.category === selectedCategory);

  // Calculate pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle,
  );
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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
              {t("articlesPage.title")}
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              {t("articlesPage.subtitle")}
            </p>
          </div>
        </section>

        {/* Filtering Section */}
        <section className="py-8 bg-slate-100 dark:bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {allCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === selectedCategory
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
              {currentArticles.map((article) => (
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
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  <button
                    onClick={() =>
                      handlePageChange(Math.max(1, currentPage - 1))
                    }
                    disabled={currentPage === 1}
                    className={`w-10 h-10 rounded-md flex items-center justify-center ${currentPage === 1 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 hover:bg-slate-100"}`}
                  >
                    &lt;
                  </button>

                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handlePageChange(index + 1)}
                      className={`w-10 h-10 rounded-md flex items-center justify-center ${currentPage === index + 1 ? "bg-primary text-primary-foreground" : "bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 hover:bg-slate-100"}`}
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    onClick={() =>
                      handlePageChange(Math.min(totalPages, currentPage + 1))
                    }
                    disabled={currentPage === totalPages}
                    className={`w-10 h-10 rounded-md flex items-center justify-center ${currentPage === totalPages ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 hover:bg-slate-100"}`}
                  >
                    &gt;
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ArticlesPage;
