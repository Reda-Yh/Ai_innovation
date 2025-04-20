import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InventionCard from "./InventionCard";
import { cn } from "../lib/utils";

interface InnovationsPageProps {
  className?: string;
}

interface Innovation {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

const InnovationsPage = ({ className = "" }: InnovationsPageProps) => {
  // Sample innovations data - expanded with more entries
  const allInnovations = [
    {
      id: "1",
      title: "Neural Interface",
      description:
        "Direct brain-computer interface with unprecedented bandwidth and minimal invasiveness.",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop",
      category: "Neuroscience",
    },
    {
      id: "2",
      title: "Quantum AI Processor",
      description:
        "Quantum computing architecture specifically designed for advanced AI model training.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Computing",
    },
    {
      id: "3",
      title: "Autonomous Drone Swarms",
      description:
        "Self-organizing drone networks with collective intelligence for complex tasks.",
      image:
        "https://images.unsplash.com/photo-1506947411487-a56738267384?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Robotics",
    },
    {
      id: "4",
      title: "Synthetic Biology Platform",
      description:
        "AI-driven platform for designing custom microorganisms with specific functions.",
      image:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Biotechnology",
    },
    {
      id: "5",
      title: "Climate Prediction Engine",
      description:
        "Ultra-precise climate modeling system using multi-modal AI and satellite data.",
      image:
        "https://images.unsplash.com/photo-1545193544-312983719627?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Environmental",
    },
    {
      id: "6",
      title: "Personalized Medicine AI",
      description:
        "AI system that creates custom treatment plans based on individual genetic profiles.",
      image:
        "https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Healthcare",
    },
    {
      id: "7",
      title: "Emotion Recognition System",
      description:
        "Advanced AI that can accurately detect and interpret human emotions from facial expressions and voice.",
      image:
        "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Human-Computer Interaction",
    },
    {
      id: "8",
      title: "Quantum Encryption Network",
      description:
        "Unhackable communication system using quantum entanglement for secure data transmission.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Cybersecurity",
    },
    {
      id: "9",
      title: "Nanoscale AI Processors",
      description:
        "Microscopic computing units that can be deployed in previously inaccessible environments.",
      image:
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Nanotechnology",
    },
    {
      id: "10",
      title: "Adaptive Learning Algorithms",
      description:
        "Self-improving algorithms that continuously optimize their performance based on new data inputs.",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Machine Learning",
    },
    {
      id: "11",
      title: "Holographic AI Interfaces",
      description:
        "Three-dimensional interactive displays that allow intuitive manipulation of complex data sets.",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Human-Computer Interaction",
    },
    {
      id: "12",
      title: "Autonomous Surgical Robot",
      description:
        "AI-powered surgical system capable of performing complex procedures with minimal human intervention.",
      image:
        "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Healthcare",
    },
    {
      id: "13",
      title: "Predictive Maintenance System",
      description:
        "AI system that forecasts equipment failures before they occur, optimizing maintenance schedules.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112c4e25a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Industrial",
    },
    {
      id: "14",
      title: "Neural Network Chip",
      description:
        "Specialized hardware designed to accelerate neural network computations with minimal power consumption.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Computing",
    },
    {
      id: "15",
      title: "Smart Material Compiler",
      description:
        "AI system that designs new materials with specific properties by simulating molecular structures.",
      image:
        "https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Materials Science",
    },
  ];

  // Get all unique categories from innovations
  const allCategories = [
    "All",
    ...new Set(allInnovations.map((innovation) => innovation.category)),
  ];

  // State for filtering and pagination
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [innovationsPerPage] = useState(6);

  // Filter innovations based on selected category
  const filteredInnovations =
    selectedCategory === "All"
      ? allInnovations
      : allInnovations.filter(
          (innovation) => innovation.category === selectedCategory,
        );

  // Calculate pagination
  const indexOfLastInnovation = currentPage * innovationsPerPage;
  const indexOfFirstInnovation = indexOfLastInnovation - innovationsPerPage;
  const currentInnovations = filteredInnovations.slice(
    indexOfFirstInnovation,
    indexOfLastInnovation,
  );
  const totalPages = Math.ceil(filteredInnovations.length / innovationsPerPage);

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
        <section className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Cutting-Edge AI Innovations
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Discover revolutionary technologies powered by artificial
              intelligence that are transforming industries and shaping our
              future.
            </p>
          </div>
        </section>

        {/* Filtering Section */}
        <section className="py-8 bg-slate-100 dark:bg-slate-800 overflow-x-auto">
          <div className="container mx-auto px-4">
            <div className="flex flex-nowrap gap-2 justify-start md:justify-center min-w-max md:flex-wrap">
              {allCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
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

        {/* Innovations Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentInnovations.map((innovation) => (
                <InventionCard
                  key={innovation.id}
                  title={innovation.title}
                  description={innovation.description}
                  image={innovation.image}
                  category={innovation.category}
                  readMoreLink={`/innovations/${innovation.id}`}
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

export default InnovationsPage;
