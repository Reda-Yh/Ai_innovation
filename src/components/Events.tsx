import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";

const Events = ({ className = "" }) => {
  // Mock events data
  const events = [
    {
      id: 1,
      title: "AI Innovations Summit 2025",
      date: "June 15, 2025",
      location: "Agadir, Morocco",
      description: "Join us for a conference on the latest AI breakthroughs.",
      url: "#",
    },
    {
      id: 2,
      title: "Workshop: Ethical AI Design",
      date: "April 30, 2025",
      location: "Online",
      description: "Learn how to design AI systems with ethics in mind.",
      url: "#",
    },
  ];

  return (
    <div className={cn("min-h-screen bg-background flex flex-col", className)}>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Events
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Explore our upcoming and past events to engage with the AI community.
            </p>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
                Upcoming Events
              </h2>
              <div className="space-y-8">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                      {event.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-2">
                      <strong>Date:</strong> {event.date}
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 mb-2">
                      <strong>Location:</strong> {event.location}
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {event.description}
                    </p>
                    <Button asChild variant="outline">
                      <a href={event.url} target="_blank" rel="noopener noreferrer">
                        Learn More
                      </a>
                    </Button>
                  </div>
                ))}
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

export default Events;