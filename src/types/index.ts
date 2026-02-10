import type { ReactNode } from "react";

export interface Post {
  id: number;
  title: string;
  category: string;
  readTime: string;
  image: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
  size: "small" | "large";
}
