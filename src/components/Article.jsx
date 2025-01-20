import { useState } from 'react';

const Article = ({ article, editArticle, deleteArticle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newData, setNewData] = useState(article);

  const handleSave = () => {
    editArticle(newData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return isEditing ? (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <input
        type="text"
        name="title"
        value={newData.title}
        onChange={handleChange}
        className="form-control me-2"
        placeholder="Modifica il titolo"
      />
      <textarea
        name="content"
        value={newData.content}
        onChange={handleChange}
        className="form-control me-2 mt-2"
        placeholder="Modifica il contenuto"
      />
      <button onClick={handleSave} className="btn btn-success btn-sm me-2">Salva</button>
      <button onClick={() => setIsEditing(false)} className="btn btn-secondary btn-sm">Annulla</button>
    </li>
  ) : (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <h5>{article.title}</h5>
        <p>{article.content}</p>
      </div>
      <div>
        <button onClick={() => setIsEditing(true)} className="btn btn-primary btn-sm me-2">Modifica</button>
        <button onClick={deleteArticle} className="btn btn-danger btn-sm">Elimina</button>
      </div>
    </li>
  );
}

export default Article;
