import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";  // Import remark-gfm

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(gfm)  // Add gfm here to enable table support
    .use(html)
    .process(markdown);
  return result.toString();
}
