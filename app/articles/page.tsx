import { ArticleList } from "@/components/article-list";
import { PageIntro } from "@/components/page-intro";
import { articles, articlesPage } from "@/data/articles";

export default function ArticlesPage() {
  return (
    <>
      <PageIntro intro={articlesPage.intro} />
      <ArticleList articles={articles} />
    </>
  );
}
