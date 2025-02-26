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

interface InventionCardProps {
  title?: string;
  description?: string;
  image?: string;
  category?: string;
  readMoreLink?: string;
}

const InventionCard = ({
  title = "Neural Interface Breakthrough",
  description = "Revolutionary brain-computer interface allowing direct thought-to-text communication with 99% accuracy.",
  image = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop",
  category = "Neuroscience",
  readMoreLink = "#",
}: InventionCardProps) => {
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
            src={image}
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
            <a href={readMoreLink}>Learn More</a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default InventionCard;
