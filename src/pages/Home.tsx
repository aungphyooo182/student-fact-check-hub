import React from "react";
import AboutManifesto from "../components/AboutManifesto";
import Features from "../components/Features";
import KnowledgeSection from "../components/KnowledgeSection";

const Home: React.FC = () => {
  return (
    <main className="ml-auto mr-auto w-full">
      <AboutManifesto />
      <Features />
      <KnowledgeSection />
    </main>
  );
};

export default Home;
