import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "../components/Card";

function HomeContent() {
  const data = useLoaderData();
  const [update, setUpdate] = useState([...data]);

  const deleteData = (id) => {
    try {
      axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/offres/${id}`);
      console.info("ca marche");
      const updateData = update.filter((el) => el.id !== id);
      setUpdate(updateData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    deleteData();
  }, []);

  return (
    <div className="home-container">
      {update.map((el) => (
        <div>
          <Link to={`offres/${el.id}`} key={el.id}>
            <Card key={el.id} item={el} />
          </Link>
          <div className="button-container">
            <Link to={`/putUser/${el.id}`}>
              <button className="all_button" type="button">
                Update
              </button>
            </Link>
            <button
              className="all_button"
              type="button"
              onClick={() => deleteData(el.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeContent;
