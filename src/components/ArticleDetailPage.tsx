import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

interface ArticleDetailPageProps {
  className?: string;
}

const ArticleDetailPage = ({ className = "" }: ArticleDetailPageProps) => {
  const { id } = useParams<{ id: string }>();

  // Sample articles data - this would typically come from an API or context
  const allArticles = [
    {
      id: "1",
      title: "The Future of Generative AI in Creative Industries",
      description:
        "How generative AI is transforming design, music, and content creation across various industries.",
      imageUrl:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      date: "May 15, 2023",
      category: "Creative AI",
      content: `<p>Generative AI is revolutionizing creative industries in ways we could only imagine a few years ago. From creating realistic images from text descriptions to composing music that rivals human composers, these technologies are changing how we approach creative work.</p>

<p>In the design world, tools like DALL-E, Midjourney, and Stable Diffusion are enabling designers to quickly generate concept art, mockups, and final assets with unprecedented speed. This doesn't replace the designer but rather augments their capabilities, allowing them to explore more ideas in less time.</p>

<p>The music industry is seeing similar transformations. AI systems can now compose original pieces in various styles, create accompaniments for melodies, and even mimic the style of famous composers. This technology is being used not just for background music but increasingly for commercial releases.</p>

<p>Content creation has perhaps seen the most dramatic impact. AI writing assistants can draft articles, marketing copy, and even creative fiction. Video generation tools are beginning to enable the creation of visual content without traditional filming or animation processes.</p>

<p>As these technologies continue to evolve, we're likely to see even more profound changes in how creative work is produced. The most successful creatives will be those who learn to collaborate effectively with these AI tools, using them to enhance their unique human perspective rather than trying to compete with the machines.</p>`,
    },
    {
      id: "2",
      title: "Ethical Considerations in AI Development",
      description:
        "Exploring the ethical challenges and responsibilities in developing advanced AI systems.",
      imageUrl:
        "https://images.unsplash.com/photo-1655720828018-edd2daec9349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      date: "June 2, 2023",
      category: "Ethics",
      content: `<p>As artificial intelligence becomes increasingly powerful and pervasive, the ethical considerations surrounding its development and deployment have never been more important. These systems are making decisions that affect human lives in areas ranging from healthcare to criminal justice, raising profound questions about fairness, transparency, and accountability.</p>

<p>One of the primary ethical concerns is bias in AI systems. These biases often reflect and amplify existing societal prejudices, as the data used to train these systems frequently contains historical biases. Researchers and developers are working on techniques to detect and mitigate these biases, but the challenge remains significant.</p>

<p>Privacy is another major concern. AI systems often require vast amounts of data to function effectively, raising questions about data collection, consent, and usage. As facial recognition and other surveillance technologies become more sophisticated, the potential for privacy violations increases.</p>

<p>The question of accountability is particularly challenging. When an AI system makes a harmful decision, who is responsible? The developer? The company that deployed it? The user? Clear frameworks for accountability are still evolving.</p>

<p>As we continue to advance AI technology, it's crucial that ethical considerations are built into the development process from the beginning, rather than addressed as an afterthought. This requires collaboration between technologists, ethicists, policymakers, and the communities affected by these systems.</p>`,
    },
    {
      id: "3",
      title: "Machine Learning Breakthroughs in Healthcare",
      description:
        "Recent advancements in ML algorithms are revolutionizing disease diagnosis and treatment planning.",
      imageUrl:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      date: "June 18, 2023",
      category: "Healthcare",
      content: `<p>Machine learning is transforming healthcare in remarkable ways, from improving diagnostic accuracy to personalizing treatment plans. These advancements are not just incremental improvements but fundamental shifts in how healthcare is delivered.</p>

<p>In medical imaging, deep learning algorithms can now detect certain cancers and other conditions with accuracy that rivals or exceeds that of experienced radiologists. These systems can identify patterns too subtle for the human eye to detect, potentially enabling earlier diagnosis and better outcomes.</p>

<p>Predictive analytics is another area where machine learning is making significant contributions. By analyzing vast amounts of patient data, these systems can identify individuals at high risk for various conditions, allowing for preventive interventions before symptoms appear.</p>

<p>Drug discovery is being accelerated through machine learning approaches that can predict how different compounds will interact with biological targets. This can dramatically reduce the time and cost of bringing new treatments to market.</p>

<p>Despite these promising developments, challenges remain. Ensuring that these systems work equally well for all patient populations, integrating them into clinical workflows, and addressing privacy concerns are all active areas of research and development. As these challenges are addressed, we can expect machine learning to play an increasingly central role in healthcare delivery.</p>`,
    },
    // Additional articles would be added here
  ];

  // Find the article with the matching ID
  const article = allArticles.find((article) => article.id === id);

  if (!article) {
    return (
      <div
        className={cn("min-h-screen bg-background flex flex-col", className)}
      >
        <Navbar />
        <main className="flex-grow pt-20 container mx-auto px-4">
          <div className="py-16 text-center">
            <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
            <p className="mb-8">
              The article you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <a href="/articles">Back to Articles</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className={cn("min-h-screen bg-background flex flex-col", className)}>
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Hero Section with Article Image */}
        <div className="relative h-[400px] w-full overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
            <div className="container mx-auto px-4 pb-12">
              <div className="inline-block bg-primary text-primary-foreground text-sm font-semibold py-1 px-3 rounded mb-4">
                {article.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {article.title}
              </h1>
              <div className="text-white text-opacity-80">{article.date}</div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <Button
              variant="ghost"
              className="mb-8 flex items-center gap-2"
              asChild
            >
              <a href="/articles">
                <ArrowLeft className="h-4 w-4" /> Back to Articles
              </a>
            </Button>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl font-medium mb-8 text-slate-700 dark:text-slate-300">
                {article.description}
              </p>
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>

            {/* Related Articles could be added here */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleDetailPage;
