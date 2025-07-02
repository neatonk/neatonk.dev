import { Metadata } from "next";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import content from "./content.md";

export const metadata: Metadata = {
  title: "Terms of Service - neatonk.dev",
  description: "Terms of Service for Abstract Goods LLC bookings",
};

// Convert markdown to HTML at build time
async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(markdown);
  return result.toString();
}

export default async function TermsPage() {
  const htmlContent = await markdownToHtml(content);

  return (
    <>
      {/* Header */}
      <header className="w-full max-w-2xl mx-auto px-4 lg:px-0 py-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          Terms of Service
        </h1>
      </header>

      {/* Content */}
      <main className="w-full max-w-2xl mx-auto px-4 lg:px-0 pb-16">
        <article
          className="markdown-content"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </main>
    </>
  );
}
