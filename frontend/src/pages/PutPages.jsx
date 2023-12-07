import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function PutPages() {
  const { id } = useParams();
  const [categorie, setCategotrie] = useState([]);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/offres/${id}`
        );
        setFormValue(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  const showMe = async () => {
    try {
      const reponse = await axios.get("http://localhost:3310/api/categories");
      setCategotrie(reponse.data);
      console.info(categorie);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    showMe();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleRadioChange = () => {
    setFormValue({ ...formValue, pro: !formValue.pro });
  };
  const navigatre = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3310/api/offres/${id}`, formValue)
      .then((res) => {
        console.info(res);
        navigatre("/");
      })
      .catch((err) => console.error(err));
  };

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
      <select
        onChange={handleChange}
        value={formValue.category_id}
        name="category_id"
      >
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

export default PutPages;
