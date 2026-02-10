import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Search, ShieldCheck, Zap } from "lucide-react";
import type { Post } from "../types";

const getIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case "analysis":
      return <ShieldCheck className="w-5 h-5 text-accent" />;
    case "tools":
      return <Search className="w-5 h-5 text-accent" />;
    case "tips":
      return <Zap className="w-5 h-5 text-accent" />;
    default:
      return <BookOpen className="w-5 h-5 text-accent" />;
  }
};

const KnowledgeSection: React.FC = () => {
  const posts: Post[] = [
    {
      id: 1,
      title: "The Anatomy of a Facebook Hoax",
      category: "Analysis",
      readTime: "5 min",
      image: "/path-to-img.jpg",
    },
    {
      id: 2,
      title: "Reverse Image Search 101",
      category: "Tools",
      readTime: "3 min",
      image: "/path-to-img2.jpg",
    },
  ];

  return (
    <section id="knowledge" className="py-24 bg-midnight text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-display text-4xl font-bold mb-4">
            Knowledge Sharing
          </h2>
          <p className="text-slate-400">
            Master the skills to verify information independently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:!grid-cols-3 gap-6">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-white/5 p-6 hover:border-accent/50 transition-colors"
            >
              <div className="aspect-video mb-6 rounded-2xl bg-slate-800 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 group-hover:scale-110 transition-transform duration-500" />
              </div>

              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent">
                  {getIcon(post.category)}
                  {post.category}
                </span>
                <span className="text-xs text-slate-500">
                  • {post.readTime}
                </span>
              </div>

              <h3 className="text-xl font-bold leading-tight group-hover:text-accent transition-colors">
                {post.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;
