import React from "react";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { Button } from "./ui/button";

interface ArticleCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  readMoreUrl?: string;
  date?: string;
  category?: string;
}

const ArticleCard = ({
  title = "The Future of AI in Healthcare",
  description = "Discover how artificial intelligence is revolutionizing medical diagnostics and patient care with breakthrough technologies.",
  imageUrl = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  readMoreUrl = "#",
  date = "May 15, 2023",
  category = "Healthcare",
}: ArticleCardProps) => {
  return (
    <Card className="w-[350px] h-[450px] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg bg-white dark:bg-gray-800">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold py-1 px-2 rounded">
          {category}
        </div>
      </div>

      <CardHeader className="pb-2">
        <div className="text-sm text-muted-foreground mb-2">{date}</div>
        <CardTitle className="text-xl font-bold line-clamp-2">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-grow">
        <CardDescription className="text-sm line-clamp-4">
          {description}
        </CardDescription>
      </CardContent>

      <CardFooter className="pt-2">
        <Button
          variant="ghost"
          className="p-0 h-auto text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all"
          asChild
        >
          <a href={readMoreUrl}>
            Read More <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
