import { useState, useEffect } from 'react';

const Form = ({ addArticle }) => {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    content: '',
    category: '',
    tags: [],
    publish: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleTagChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      tags: checked
        ? [...prevData.tags, value]
        : prevData.tags.filter((tag) => tag !== value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addArticle(formData);
    setFormData({
      title: '',
      image: '',
      content: '',
      category: '',
      tags: [],
      publish: false
    });
  };

  useEffect(() => {
    if (formData.publish) {
      alert("Articolo pubblicato");
    }
  }, [formData.publish]);

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        className="form-control"
        placeholder="Inserisci il titolo dell'articolo"
      />
      <input
        type="text"
        name="image"
        value={formData.image}
        onChange={handleChange}
        className="form-control mt-2"
        placeholder="URL dell'immagine"
      />
      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
        className="form-control mt-2"
        placeholder="Inserisci il contenuto dell'articolo"
      />
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="form-control mt-2"
      >
        <option value="">Seleziona una categoria</option>
        <option value="React">React</option>
        <option value="Html">Html</option>
        <option value="Css">Css</option>
      </select>
      <div className="form-group mt-2">
        <label>Tags</label><br />
        <label><input type="checkbox" value="React" onChange={handleTagChange} /> React</label>
        <label><input type="checkbox" value="JavaScript" onChange={handleTagChange} className="ms-2" /> JavaScript</label>
        <label><input type="checkbox" value="CSS" onChange={handleTagChange} className="ms-2" /> CSS</label>
      </div>
      <div className="form-check mt-2">
        <input
          type="checkbox"
          name="publish"
          checked={formData.publish}
          onChange={handleChange}
          className="form-check-input"
        />
        <label className="form-check-label">
          Pubblica articolo
        </label>
      </div>
      <button type="submit" className="btn btn-primary mt-2">Aggiungi Articolo</button>
    </form>
  );
}

export default Form;

