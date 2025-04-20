import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";

interface Article {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  readTime: string;
}

interface FeaturedArticlesCarouselProps {
  articles?: Article[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

const FeaturedArticlesCarousel = ({
  articles = [
    {
      id: "1",
      title: "The Future of Generative AI in Creative Industries",
      description:
        "How generative AI is transforming design, music, and content creation across various industries.",
      imageUrl:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      date: "May 15, 2023",
      readTime: "8 min read",
    },
    {
      id: "2",
      title: "Ethical Considerations in AI Development",
      description:
        "Exploring the ethical challenges and responsibilities in developing advanced AI systems.",
      imageUrl:
        "https://images.unsplash.com/photo-1655720828018-edd2daec9349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      date: "June 2, 2023",
      readTime: "10 min read",
    },
    {
      id: "3",
      title: "Machine Learning Breakthroughs in Healthcare",
      description:
        "Recent advancements in ML algorithms are revolutionizing disease diagnosis and treatment planning.",
      imageUrl:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      date: "June 18, 2023",
      readTime: "7 min read",
    },
    {
      id: "4",
      title: "The Rise of Autonomous Vehicles",
      description:
        "How AI is powering the next generation of self-driving cars and transforming transportation.",
      imageUrl:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      date: "July 5, 2023",
      readTime: "9 min read",
    },
    {
      id: "5",
      title: "Natural Language Processing: Current State and Future",
      description:
        "An in-depth look at where NLP stands today and what developments we can expect in the coming years.",
      imageUrl:
        "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      date: "July 22, 2023",
      readTime: "12 min read",
    },
  ],
  autoPlay = true,
  autoPlayInterval = 5000,
  className = "",
}: FeaturedArticlesCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === articles.length - 1 ? 0 : prevIndex + 1,
    );
    setTimeout(() => setIsAnimating(false), 500); // Match this with the transition duration
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? articles.length - 1 : prevIndex - 1,
    );
    setTimeout(() => setIsAnimating(false), 500); // Match this with the transition duration
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500); // Match this with the transition duration
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoPlay) {
      interval = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay, autoPlayInterval, currentIndex]);

  return (
    <div
      className={cn(
        "relative w-full max-w-[1200px] mx-auto bg-background py-12 px-4 md:px-8",
        className,
      )}
    >
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-2 text-foreground">
          Featured Articles
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover the latest breakthroughs and insights in artificial
          intelligence and machine learning
        </p>
      </div>

      <div className="relative overflow-hidden h-[600px]">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full carousel-slide"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {articles.map((article) => (
            <div key={article.id} className="w-full flex-shrink-0 px-4">
              <div className="flex flex-col md:flex-row h-full gap-8 items-center">
                <div className="w-full md:w-1/2 h-[300px] md:h-[400px] overflow-hidden rounded-xl">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-muted-foreground">
                      {article.date}
                    </span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {article.description}
                  </p>
                  <Link
                    to={`/articles/${article.id}`}
                    className="self-start px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors inline-block"
                  >
                    Read Article
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center border border-border hover:bg-muted transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-foreground" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center border border-border hover:bg-muted transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-foreground" />
      </button>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {articles.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-primary w-6" : "bg-muted"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticlesCarousel;
