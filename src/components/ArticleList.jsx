import Article from "./Article"

const ArticleList = ({ articles, editArticle, deleteArticle }) => {

    return (
        <ul className="list-group">
            {articles.map((article, index) => (
                <Article
                    key={index}
                    title={article.title}
                    editArticle={(newTitle) => editArticle(index, newTitle)}
                    deleteArticle={() => deleteArticle(index)}
                />
            ))}
        </ul>
    )
}

export default ArticleList;
