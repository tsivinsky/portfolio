import type { Load } from "@sveltejs/kit";
import fs from "fs/promises";
import path from "path";
import fm from "front-matter";
import { marked } from "marked";
import type { Article } from "../../../types/blog";

export const load: Load = async ({ params }) => {
  const { slug } = params as { slug: string };

  const files = await fs.readdir("blog");

  let article: Article | null = null;
  for (const file of files) {
    const data = await fs.readFile(path.join("blog", file), "utf-8");
    const metadata = fm<Article>(data);

    if (metadata.attributes.slug === slug) {
      const body = marked(metadata.body, { gfm: true });
      article = { ...metadata.attributes, body };
    }
  }

  return {
    article,
  };
};
