import React, { useContext, useState } from "react";
import { CategoriesContext } from "../context/CategoriesContext";

const Form = () => {
  const { categories } = useContext(CategoriesContext);

  const [query, setQuery] = useState({
    ingredient: "",
    category: "",
  });

  const { ingredient, category } = query;

  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="col-12 mt-4">
      <form>
        <fieldset>
          <legend>Busca bebidas por categoría o ingrediente</legend>
        </fieldset>
        <div className="row">
          <div className="col-md-4">
            <input
              type="text"
              name="ingredient"
              className="form-control"
              placeholder="Ingrediente"
              value={ingredient}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <select
              className="form-control"
              name="category"
              value={category}
              onChange={handleChange}
            >
              <option value="" disabled>
                -- Selecciona una categoría --
              </option>
              {categories.map((c) => (
                <option value={c.strCategory} key={c.strCategory}>
                  {c.strCategory}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4">
            <input
              type="submit"
              className="btn btn-block btn-primary"
              value="Buscar"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
