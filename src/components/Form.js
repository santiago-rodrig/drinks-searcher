import React, { useContext } from "react";
import { CategoriesContext } from "../context/CategoriesContext";

const Form = () => {
  const { state } = useContext(CategoriesContext);
  alert(state);

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
              name="name"
              className="form-control"
              placeholder="Ingrediente"
            />
          </div>
          <div className="col-md-4">
            <select className="form-control" name="category" defaultValue="">
              <option value="" disabled>
                -- Selecciona una categoría --
              </option>
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
