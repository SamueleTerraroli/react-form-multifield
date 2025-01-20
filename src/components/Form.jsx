import { useState } from 'react';

function Form({ addArticle }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      addArticle(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-control"
        placeholder="Inserisci il titolo dell'articolo"
      />
      <button type="submit" className="btn btn-primary mt-2">Aggiungi Articolo</button>
    </form>
  );
}

export default Form;
