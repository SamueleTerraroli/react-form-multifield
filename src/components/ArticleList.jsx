import Article from "./Article"

const ArticleList = ({ articles, editArticle, deleteArticle }) => {

    return (
        <ul className="list-group">
            {articles.map((title, index) => (
                <Article
                    key={index}
                    title={title}
                    editArticle={(newTitle) => editArticle(index, newTitle)}
                    deleteArticle={() => deleteArticle(index)}
                />
            ))}
        </ul>
    )
}

export default ArticleList