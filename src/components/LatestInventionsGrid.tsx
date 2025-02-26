import React from "react";
import { motion } from "framer-motion";

interface InventionCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  category?: string;
}

// Importing the component directly here since we need to fix the import error
const InventionCard = ({
  title = "AI Innovation",
  description = "A cutting-edge AI technology revolutionizing the industry",
  imageUrl = "https://images.unsplash.com/photo-1581092160607-ee22731c9c64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  category = "Technology",
}: InventionCardProps) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-semibold rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4 flex-grow">
          {description}
        </p>
        <button className="text-indigo-600 dark:text-indigo-400 font-medium flex items-center hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

interface Invention {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

interface LatestInventionsGridProps {
  inventions?: Invention[];
  title?: string;
  subtitle?: string;
}

const LatestInventionsGrid = ({
  inventions = [
    {
      id: "1",
      title: "Neural Interface",
      description:
        "Direct brain-computer interface with unprecedented bandwidth and minimal invasiveness.",
      imageUrl:
        "https://images.unsplash.com/photo-1581092160607-ee22731c9c64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Neuroscience",
    },
    {
      id: "2",
      title: "Quantum AI Processor",
      description:
        "Quantum computing architecture specifically designed for advanced AI model training.",
      imageUrl:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Computing",
    },
    {
      id: "3",
      title: "Autonomous Drone Swarms",
      description:
        "Self-organizing drone networks with collective intelligence for complex tasks.",
      imageUrl:
        "https://images.unsplash.com/photo-1506947411487-a56738267384?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Robotics",
    },
    {
      id: "4",
      title: "Synthetic Biology Platform",
      description:
        "AI-driven platform for designing custom microorganisms with specific functions.",
      imageUrl:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Biotechnology",
    },
    {
      id: "5",
      title: "Climate Prediction Engine",
      description:
        "Ultra-precise climate modeling system using multi-modal AI and satellite data.",
      imageUrl:
        "https://images.unsplash.com/photo-1545193544-312983719627?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Environmental",
    },
    {
      id: "6",
      title: "Personalized Medicine AI",
      description:
        "AI system that creates custom treatment plans based on individual genetic profiles.",
      imageUrl:
        "https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Healthcare",
    },
  ],
  title = "Latest AI Inventions",
  subtitle = "Discover cutting-edge AI technologies shaping our future",
}: LatestInventionsGridProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-slate-50 dark:bg-slate-900 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            {title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {inventions.map((invention) => (
            <motion.div key={invention.id} variants={item}>
              <InventionCard
                title={invention.title}
                description={invention.description}
                imageUrl={invention.imageUrl}
                category={invention.category}
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium transition-colors duration-200">
            View All Inventions
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestInventionsGrid;
