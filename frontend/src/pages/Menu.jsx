import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Menu() {
  const [categorie, setCategorie] = useState([]);
  const [formValue, setFormValue] = useState({
    name: "",
    title: "",
    img: "",
    prix: "",
    resumes: "",
    adresse: "",
    pro: false,
    category_id: null,
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/offres/`, formValue)
      .then((res) => {
        console.info(res);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  const handleRadioChange = () => {
    setFormValue({ ...formValue, pro: !formValue.pro });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const selectFunc = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/categories/`
      );
      setCategorie(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  console.info(categorie);
  useEffect(() => {
    selectFunc();
  }, []);
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={formValue.name}
        placeholder="Nom"
      />

      <input
        type="text"
        name="title"
        value={formValue.title}
        onChange={handleChange}
        placeholder="Titre"
      />
      <input
        type="url"
        name="img"
        value={formValue.img}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <input
        type="text"
        value={formValue.prix}
        name="prix"
        onChange={handleChange}
        placeholder="Prix"
      />
      <input
        onChange={handleChange}
        value={formValue.adresse}
        type="text"
        name="adresse"
        placeholder="Adresse"
      />
      <textarea
        value={formValue.resumes}
        onChange={handleChange}
        name="resumes"
        placeholder="Résumé"
      />
      <div className="label-container-form">
        <label>
          Professionnel :
          <input
            type="radio"
            name="pro"
            checked={formValue.pro}
            onChange={handleRadioChange}
            value="Oui"
          />{" "}
          Oui
        </label>
        <label>
          <input
            type="radio"
            name="pro"
            checked={!formValue.pro}
            onChange={handleRadioChange}
            value="Non"
          />{" "}
          Non
        </label>
      </div>
      <select onChange={handleChange} name="category_id">
        <option value="">Null</option>
        {categorie.map((el) => (
          <option key={el.id} value={el.id}>
            {el.category_type}
          </option>
        ))}
      </select>
      <input type="submit" />
    </form>
  );
}

export default Menu;
