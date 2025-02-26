import React, { useEffect } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeaturedArticlesCarousel from "./FeaturedArticlesCarousel";
import LatestInventionsGrid from "./LatestInventionsGrid";
import Footer from "./Footer";
import { cn } from "../lib/utils";

interface HomePageProps {
  className?: string;
}

const HomePage = ({ className = "" }: HomePageProps) => {
  // Initialize WOW.js for animations
  useEffect(() => {
    // Dynamic import of WOW.js to avoid SSR issues
    const initWow = async () => {
      if (typeof window !== "undefined") {
        try {
          const WOWjs = await import("wowjs");
          const WOW = WOWjs.default || WOWjs.WOW;

          if (WOW) {
            new WOW({
              boxClass: "wow",
              animateClass: "animated",
              offset: 100,
              mobile: true,
              live: true,
            }).init();
          }
        } catch (error) {
          console.error("Error initializing WOW.js:", error);
        }
      }
    };

    initWow();
  }, []);

  return (
    <div className={cn("min-h-screen bg-background flex flex-col", className)}>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="hero" className="wow fadeIn" data-wow-duration="1.5s">
          <HeroSection />
        </section>

        {/* Featured Articles Section */}
        <section
          id="featured-articles"
          className="py-16 wow fadeIn"
          data-wow-duration="1.5s"
          data-wow-delay="0.2s"
        >
          <FeaturedArticlesCarousel />
        </section>

        {/* Latest Inventions Section */}
        <section
          id="latest-inventions"
          className="wow fadeIn"
          data-wow-duration="1.5s"
          data-wow-delay="0.3s"
        >
          <LatestInventionsGrid />
        </section>

        {/* Call to Action Section */}
        <section
          className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white wow fadeIn"
          data-wow-duration="1.5s"
          data-wow-delay="0.4s"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay at the Forefront of AI Innovation
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join our community of AI enthusiasts and professionals to receive
              the latest updates, exclusive content, and special event
              invitations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md text-gray-900 w-full focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors">
                Subscribe Now
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
