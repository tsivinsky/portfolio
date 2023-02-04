import { type Load, redirect } from "@sveltejs/kit";
import fs from "fs/promises";
import path from "path";
import fm from "front-matter";
import { marked } from "marked";
import hljs from "highlight.js";
import type { Article } from "../../../types/blog";

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: (code, lang) => {
    const language = hljs.getLanguage(lang) ? lang : "plaintext";
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: "hljs language-",
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: true,
  smartypants: true,
  xhtml: true,
});

export const load: Load = async ({ params }) => {
  const { slug } = params as { slug: string };

  const files = await fs.readdir("blog");

  let article: Article | null = null;
  for (const file of files) {
    const data = await fs.readFile(path.join("blog", file), "utf-8");
    const metadata = fm<Article>(data);

    if (metadata.attributes.slug === slug) {
      const body = marked.parse(metadata.body);
      article = { ...metadata.attributes, body };
    }
  }

  if (!article) {
    throw redirect(302, "/blog");
  }

  return {
    article,
  };
};
