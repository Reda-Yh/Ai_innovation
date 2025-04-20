import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Sample innovation data - in a real app, this would come from an API or database
const innovationsData = [
  {
    id: "1",
    title: "Neural Interface Breakthrough",
    description:
      "Revolutionary brain-computer interface allowing direct thought-to-text communication with 99% accuracy.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop",
    category: "Neuroscience",
    content:
      "This groundbreaking neural interface technology represents a quantum leap in brain-computer interaction. By utilizing advanced machine learning algorithms and nanoscale sensors, researchers have achieved near-perfect thought-to-text translation. The implications for assistive technology, communication, and human augmentation are profound. Clinical trials have shown remarkable success in helping patients with speech impairments communicate effectively, and future applications could extend to enhanced learning, memory augmentation, and seamless human-computer collaboration.",
    date: "2023-09-15",
  },
  {
    id: "2",
    title: "Quantum Computing Milestone",
    description:
      "First stable 1000-qubit quantum computer achieving quantum supremacy across multiple algorithms.",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
    category: "Computing",
    content:
      "Scientists have successfully developed and demonstrated the world's first stable 1000-qubit quantum computer, marking a historic milestone in quantum computing. This breakthrough system maintains quantum coherence for unprecedented durations, allowing for complex calculations that would take traditional supercomputers millennia to complete. The system has demonstrated quantum supremacy across a diverse range of algorithms, from cryptography to molecular simulation. This achievement opens new frontiers in drug discovery, materials science, and artificial intelligence, potentially revolutionizing these fields within the next decade.",
    date: "2023-10-22",
  },
  {
    id: "3",
    title: "Fusion Energy Breakthrough",
    description:
      "Compact fusion reactor achieves energy-positive reaction sustained for 10 minutes, promising unlimited clean energy.",
    image:
      "https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=2074&auto=format&fit=crop",
    category: "Energy",
    content:
      "In a landmark achievement for clean energy, scientists have successfully maintained an energy-positive fusion reaction for ten continuous minutes in a compact tokamak reactor. This breakthrough represents a critical step toward practical fusion power, potentially providing humanity with virtually unlimited clean energy. The innovative reactor design uses advanced superconducting materials and novel plasma containment techniques to achieve unprecedented stability. Engineers project that commercial fusion power plants based on this technology could begin operation within 15 years, dramatically accelerating the global transition away from fossil fuels.",
    date: "2023-11-05",
  },
];

const InnovationDetailPage = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const innovation = innovationsData.find((item) => item.id === id);

  if (!innovation) {
    return (
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-2xl font-bold mb-4">{t("innovation.notFound")}</h1>
        <Button asChild>
          <Link to="/innovations">{t("innovation.backToInnovations")}</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <div className="container mx-auto py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button variant="outline" className="mb-6" asChild>
            <Link to="/innovations">{t("innovation.backToInnovations")}</Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative h-[400px] mb-6 rounded-lg overflow-hidden">
                <img
                  src={innovation.image}
                  alt={innovation.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                  >
                    {innovation.category}
                  </Badge>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                {innovation.title}
              </h1>

              <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Published on {innovation.date}
              </div>

              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {innovation.description}
                </p>
                <div className="text-gray-700 dark:text-gray-300">
                  {innovation.content.split("\n").map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg sticky top-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                  {t("innovation.aboutThisInnovation")}
                </h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {t("innovation.category")}
                  </h4>
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                    {innovation.category}
                  </Badge>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {t("innovation.published")}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {innovation.date}
                  </p>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-800 pt-4 mt-4">
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {t("innovation.shareThisInnovation")}
                  </h4>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm">
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm">
                      Facebook
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InnovationDetailPage;
