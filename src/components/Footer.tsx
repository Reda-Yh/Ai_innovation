import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  ArrowRight,
} from "lucide-react";

interface FooterProps {
  logo?: string;
  navigationLinks?: Array<{ label: string; href: string }>;
  socialLinks?: Array<{ icon: React.ReactNode; href: string }>;
}

const Footer = ({
  logo = "/vite.svg",
  navigationLinks,
  socialLinks = [
    { icon: <Facebook size={20} />, href: "https://facebook.com" },
    { icon: <Twitter size={20} />, href: "https://twitter.com" },
    { icon: <Instagram size={20} />, href: "https://instagram.com" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
  ],
}: FooterProps) => {
  const { t } = useTranslation();

  const defaultNavigationLinks = [
    { label: t("navbar.home"), href: "/" },
    { label: t("navbar.articles"), href: "/articles" },
    { label: t("navbar.innovations"), href: "/innovations" },
    { label: t("navbar.about"), href: "/about" },
    { label: t("navbar.contact"), href: "/contact" },
  ];

  const links = navigationLinks || defaultNavigationLinks;
  return (
    <footer className="w-full bg-slate-900 text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="AI Innovations Hub" className="h-8 w-8" />
            <span className="text-xl font-bold">AI Innovations Hub</span>
          </div>
          <p className="text-slate-300 text-sm">
            Exploring the cutting-edge of artificial intelligence and showcasing
            the latest breakthroughs in AI technology.
          </p>
          <div className="flex space-x-4 pt-2">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">{t("footer.quickLinks")}</h3>
          <ul className="space-y-2">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">{t("footer.resources")}</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/blog"
                className="text-slate-300 hover:text-white transition-colors text-sm"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/research"
                className="text-slate-300 hover:text-white transition-colors text-sm"
              >
                Research Papers
              </a>
            </li>
            <li>
              <a
                href="/events"
                className="text-slate-300 hover:text-white transition-colors text-sm"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className="text-slate-300 hover:text-white transition-colors text-sm"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">{t("footer.stayUpdated")}</h3>
          <p className="text-slate-300 text-sm">{t("footer.subscribeText")}</p>
          <div className="flex mt-2">
            <input
              type="email"
              placeholder={t("footer.emailPlaceholder")}
              className="px-4 py-2 text-sm bg-slate-800 border border-slate-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-white w-full"
            />
            <Button
              className="rounded-l-none bg-blue-600 hover:bg-blue-700"
              size="icon"
            >
              <ArrowRight size={18} />
            </Button>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            {t("footer.privacyNotice")}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="/privacy"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              {t("footer.privacyPolicy")}
            </a>
            <a
              href="/terms"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              {t("footer.termsOfService")}
            </a>
            <a
              href="/cookies"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              {t("footer.cookiePolicy")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
