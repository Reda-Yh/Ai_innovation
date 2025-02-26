import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InventionCard from "./InventionCard";
import { cn } from "../lib/utils";

interface InnovationsPageProps {
  className?: string;
}

const InnovationsPage = ({ className = "" }: InnovationsPageProps) => {
  // Sample innovations data
  const innovations = [
    {
      id: "1",
      title: "Neural Interface",
      description:
        "Direct brain-computer interface with unprecedented bandwidth and minimal invasiveness.",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22731c9c64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
  ];

  // Categories for filtering
  const categories = [
    "All",
    "Neuroscience",
    "Computing",
    "Robotics",
    "Biotechnology",
    "Environmental",
    "Healthcare",
    "Human-Computer Interaction",
    "Cybersecurity",
    "Nanotechnology",
  ];

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
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
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

        {/* Innovations Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {innovations.map((innovation) => (
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

export default InnovationsPage;
