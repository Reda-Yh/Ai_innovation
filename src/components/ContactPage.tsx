import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Globe, Mail, MapPin, Phone, Send } from "lucide-react";
import Swal from "sweetalert2";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface ContactPageProps {
  className?: string;
}

const ContactPage = ({ className = "" }: ContactPageProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://formspree.io/f/mpwpvvra", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "Your message has been sent successfully!",
          icon: "success",
          background: "#020817",
          color: "#ffffff",
          confirmButtonColor: "#3085d6",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "There was an issue sending your message. Please try again later.",
        icon: "error",
        background: "#020817",
        color: "#ffffff",
        confirmButtonColor: "#d33",
      });
    }
  };

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
              Get in Touch
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Have questions about AI innovations or interested in
              collaborating? We'd love to hear from you!
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Contact Information */}
              <div className="lg:w-1/3">
                <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900 dark:text-white">
                        Our Location
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 mt-1">
                        Agadir
                        <br />
                        Morocco
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900 dark:text-white">
                        Email Us
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 mt-1">
                        <a href="mailto:redayahyapro@gmail.com" className="hover:underline">
                          redayahyapro@gmail.com
                        </a>
                        <br />
                        <a href="mailto:rynovapro@gmail.com" className="hover:underline">
                          rynovapro@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900 dark:text-white">
                        Call Us
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 mt-1">
                        +212 651834041
                        <br />
                        RYNOVA, 9am-5pm (GMT+1)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8">
                  <h3 className="font-medium text-slate-900 dark:text-white mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/in/reda-yahya-920976253/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-200 dark:bg-slate-700 p-3 rounded-full hover:bg-primary/20 transition-colors"
                    >
                      <svg
                        className="h-5 w-5 text-slate-700 dark:text-slate-200"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 
                            0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 
                            0-1.75-.79-1.75-1.76s.78-1.76 
                            1.75-1.76 1.75.79 1.75 1.76-.78 
                            1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 
                            0-2.16 1.46-2.16 2.96v5.7h-3v-10h2.89v1.36h.04c.4-.75 
                            1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"
                        />
                      </svg>
                    </a>

                    <a
                      href="https://github.com/Reda-Yh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-200 dark:bg-slate-700 p-3 rounded-full hover:bg-primary/20 transition-colors"
                    >
                      <svg
                        className="h-5 w-5 text-slate-700 dark:text-slate-200"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 
                            11.385.6.111.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.744.084-.729.084-.729 
                            1.205.084 1.837 1.236 1.837 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.604-2.665-.303-5.466-1.332-5.466-5.93 
                            0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 6 0c2.292-1.552 3.3-1.23 3.3-1.23.653 1.652.242 
                            2.873.118 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.803 5.625-5.475 
                            5.922.43.37.814 1.102.814 2.222 0 1.604-.015 2.896-.015 3.29 
                            0 .319.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.628-5.372-12-12-12z"
                        />
                      </svg>
                    </a>

                    <a
                      href="https://www.instagram.com/rynova_officiel/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-200 dark:bg-slate-700 p-3 rounded-full hover:bg-primary/20 transition-colors"
                    >
                      <svg
                        className="h-5 w-5 text-slate-700 dark:text-slate-200"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>

                    <a
                      href="https://rynova.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-200 dark:bg-slate-700 p-3 rounded-full hover:bg-primary/20 transition-colors"
                    >
                      <Globe className="h-5 w-5 text-slate-700 dark:text-slate-200" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:w-2/3">
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8">
                  <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                    Send Us a Message
                  </h2>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-slate-700 dark:text-white"
                          placeholder="John Doe"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-slate-700 dark:text-white"
                          placeholder="john@example.com"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-slate-700 dark:text-white"
                        placeholder="How can we help you?"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={6}
                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-slate-700 dark:text-white"
                        placeholder="Your message here..."
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>

                    <div>
                      <Button className="w-full md:w-auto" size="lg" onClick={handleSubmit}>
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="h-96 rounded-lg overflow-hidden">
              <MapContainer
                center={[30.4278, -9.5981]}
                zoom={13}
                style={{ height: "100%", width: "100%" }}
                className="rounded-lg"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[30.4278, -9.5981]}>
                  <Popup>RYNOVA - Agadir, Morocco</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-slate-100 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  How can I contribute to AI Innovations Hub?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  We welcome contributions from AI researchers, developers, and
                  enthusiasts. You can submit articles, research papers, or
                  project showcases through our contribution form or by emailing
                  our editorial team.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  Do you offer consulting services for AI implementation?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Yes, our team of AI experts provides consulting services for
                  businesses looking to implement AI solutions. Please contact
                  us with your specific requirements for more information.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  How can I stay updated on the latest AI news and events?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Subscribe to our newsletter to receive regular updates on AI
                  breakthroughs, upcoming events, and exclusive content. You can
                  also follow us on social media for daily updates.
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

export default ContactPage;