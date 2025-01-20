import { useState } from 'react';
import Form from './components/Form';
import ArticleList from './components/ArticleList';

const App = () => {
  const [articles, setArticles] = useState([]);

  const addArticle = (newArticle) => {
    setArticles([...articles, newArticle]);
  };

  const editArticle = (index, newTitle) => {
    const updatedArticles = [...articles];
    updatedArticles[index] = newTitle;
    setArticles(updatedArticles);
  }

  const deleteArticle = (index) => {
    setArticles(articles.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-5">
      <h1>Blog</h1>
      <Form addArticle={addArticle} />
      <ArticleList articles={articles} editArticle={editArticle} deleteArticle={deleteArticle} />
    </div>
  )
}

export default App