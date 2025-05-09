import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermOfServices";
import CookiePolicy from "./components/CookiePolicy";
import ResearchPapers from "./components/ResearchPapers";
import Events from "./components/Events";
import Faq from "./components/Faq";
import Blog from "./components/Blog";

// Lazy load pages for better performance
const ArticlesPage = lazy(() => import("./components/ArticlesPage"));
const InnovationsPage = lazy(() => import("./components/InnovationsPage"));
const AboutPage = lazy(() => import("./components/AboutPage"));
const ContactPage = lazy(() => import("./components/ContactPage"));
const ArticleDetailPage = lazy(() => import("./components/ArticleDetailPage"));
const InnovationDetailPage = lazy(
  () => import("./components/InnovationDetailPage"),
);

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:id" element={<ArticleDetailPage />} />
          <Route path="/innovations" element={<InnovationsPage />} />
          <Route path="/innovations/:id" element={<InnovationDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/research-papers" element={<ResearchPapers />} />
          <Route path="/events" element={<Events />} />
          <Route path="/faq" element={<Faq />} />

          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
