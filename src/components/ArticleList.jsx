import Article from "./Article"

const ArticleList = ({ articles, editArticle, deleteArticle }) => {
    return (
        <ul className="list-group">
            {articles.map((article, index) => (
                <Article
                    key={index}
                    article={article}
                    editArticle={(newData) => editArticle(index, newData)}
                    deleteArticle={() => deleteArticle(index)}
                />
            ))}
        </ul>
    );
}

export default ArticleList;
