import { useState } from 'react';

const Article = ({ title, editArticle, deleteArticle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleSave = () => {
    editArticle({ title: newTitle });
    setIsEditing(false);
  };

  return isEditing ? (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        className="form-control me-2"
      />
      <button onClick={handleSave} className="btn btn-success btn-sm me-2">Salva</button>
      <button onClick={() => setIsEditing(false)} className="btn btn-secondary btn-sm">Annulla</button>
    </li>
  ) : (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <h5>{title}</h5>
      </div>
      <div> <button onClick={() => setIsEditing(true)} className="btn btn-primary btn-sm me-2">Modifica</button>
        <button onClick={deleteArticle} className="btn btn-danger btn-sm">Elimina</button>
      </div>
    </li>
  );
}

export default Article;
