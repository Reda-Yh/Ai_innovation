import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface InventionCardProps {
  id?: string;
  title?: string;
  description?: string;
  image?: string;
  imageUrl?: string; // Added for compatibility with LatestInventionsGrid
  category?: string;
  readMoreLink?: string; // Added for custom link path
}

const InventionCard = ({
  id = "1",
  title = "Neural Interface Breakthrough",
  description = "Revolutionary brain-computer interface allowing direct thought-to-text communication with 99% accuracy.",
  image,
  imageUrl, // Added for compatibility
  category = "Neuroscience",
  readMoreLink,
}: InventionCardProps) => {
  // Use imageUrl if provided, otherwise use image (for compatibility with different components)
  const displayImage =
    imageUrl ||
    image ||
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop";
  // Use custom link if provided, otherwise use default format
  const linkPath = readMoreLink || `/innovations/${id}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg">
        <div className="relative h-48 overflow-hidden">
          <img
            src={displayImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-2 right-2">
            <Badge
              variant="secondary"
              className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
            >
              {category}
            </Badge>
          </div>
        </div>

        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-grow">
          <CardDescription className="text-gray-600 dark:text-gray-400">
            {description}
          </CardDescription>
        </CardContent>

        <CardFooter className="pt-2">
          <Button variant="outline" className="w-full" asChild>
            <Link to={linkPath}>Learn More</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default InventionCard;
