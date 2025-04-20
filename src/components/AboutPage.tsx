import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { cn } from "../lib/utils";
import { useTranslation } from "react-i18next";

interface AboutPageProps {
  className?: string;
}

const AboutPage = ({ className = "" }: AboutPageProps) => {
  const { t } = useTranslation();
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Reda Yahya",
      role: "Founder and CEO of RYNOVA",
      bio: "FullSTack developer Computer engineering student actually",
      image: "https://i.ibb.co/mV9NYQR3/Reda-Yahya-img.jpg",
    }
  ];

  return (
    <div className={cn("min-h-screen bg-background flex flex-col", className)}>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About AI Innovations Hub
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              We're dedicated to exploring and sharing the latest breakthroughs
              in artificial intelligence and their impact on our world.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 bg-white dark:bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="AI Innovation Mission"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
                  Our Mission
                </h2>
                <p className="text-lg mb-4 text-slate-700 dark:text-slate-300">
                  At AI Innovations Hub, we believe that artificial intelligence
                  is the most transformative technology of our time. Our mission
                  is to bridge the gap between cutting-edge AI research and
                  practical applications that benefit humanity.
                </p>
                <p className="text-lg mb-4 text-slate-700 dark:text-slate-300">
                  We are committed to providing accurate, accessible, and
                  thought-provoking content about AI advancements, while
                  fostering critical discussions about the ethical implications
                  and responsible development of these powerful technologies.
                </p>
                <p className="text-lg text-slate-700 dark:text-slate-300">
                  Through our platform, we aim to inspire the next generation of
                  AI researchers, developers, and enthusiasts to create
                  innovations that address global challenges and improve lives
                  around the world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-slate-100 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">
              Meet Our Team
            </h2>
            <div
              className={`grid gap-8 ${teamMembers.length === 1
                  ? "grid-cols-1 place-items-center"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                }`}
            >
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-sm"
                >
                  <div className="h-64 bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-slate-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-slate-600 dark:text-slate-300">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Our Values */}
        <section className="py-16 bg-white dark:bg-slate-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600 dark:text-blue-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                  Integrity
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  We are committed to accuracy, transparency, and ethical
                  reporting on AI developments, ensuring our content is
                  trustworthy and reliable.
                </p>
              </div>

              <div className="p-6 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600 dark:text-green-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                  Innovation
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  We celebrate creative thinking and groundbreaking ideas that
                  push the boundaries of what's possible with artificial
                  intelligence.
                </p>
              </div>

              <div className="p-6 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-600 dark:text-purple-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                  Inclusivity
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  We believe AI should benefit everyone. We're dedicated to
                  promoting diverse perspectives and ensuring AI technologies
                  are developed responsibly.
                </p>
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

export default AboutPage;
