import type { Article } from "@/data/types";

type ArticleListProps = {
  articles: Article[];
};

export function ArticleList({ articles }: ArticleListProps) {
  return (
    <ol className="article-list">
      {articles.map((article) => (
        <li className="article-row" key={`${article.date}-${article.title}`}>
          <time className="article-row__date" dateTime={article.isoDate}>
            {article.date}
          </time>
          <div className="article-row__body">
            <h2 className="article-row__title">{article.title}</h2>
            <p className="article-row__excerpt">{article.excerpt}</p>
            <a className="text-link" href={article.href} target="_blank" rel="noreferrer">
              {article.linkLabel}
            </a>
          </div>
        </li>
      ))}
    </ol>
  );
}
