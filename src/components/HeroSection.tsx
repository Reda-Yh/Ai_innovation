import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowRight, Brain } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1512&h=700&q=80",
  ctaText,
  ctaLink = "#featured-articles",
}: HeroSectionProps) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-[700px] bg-slate-900 overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          {/* Icon */}
          <div className="mb-6 inline-flex p-3 rounded-full bg-primary/10 text-primary">
            <Brain size={32} />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight gradient-text">
            {title || t("hero.title")}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            {subtitle || t("hero.subtitle")}
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="group animate-pulse hover:animate-none"
            asChild
          >
            <Link to={ctaLink}>
              {ctaText || t("hero.cta")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default HeroSection;
