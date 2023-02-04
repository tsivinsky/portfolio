import type { Load } from "@sveltejs/kit";
import fs from "fs/promises";
import path from "path";
import fm from "front-matter";
import type { Article } from "../../types/blog";

export const load: Load = async () => {
  const files = await fs.readdir("blog");

  const articles: Article[] = [];
  for (const file of files) {
    const data = await fs.readFile(path.join("blog", file), "utf-8");
    const metadata = fm<Article>(data);

    articles.push({ ...metadata.attributes, body: metadata.body });
  }

  return {
    articles,
  };
};
