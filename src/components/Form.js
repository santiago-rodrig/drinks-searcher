import React, { useContext, useState } from 'react'
import { CategoriesContext } from '../context/CategoriesContext'
import { RecipesContext } from '../context/RecipesContext'

const Form = () => {
    const { categories } = useContext(CategoriesContext)
    const { setQuery } = useContext(RecipesContext)

    const [localQuery, setLocalQuery] = useState({
        ingredient: '',
        category: '',
    })

    const { ingredient, category } = localQuery

    const handleChange = (e) => {
        setLocalQuery({
            ...localQuery,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setQuery(localQuery)
    }

    return (
        <div className="col-12 mt-4">
            <form onSubmit={handleSubmit}>
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
                                <option
                                    value={c.strCategory}
                                    key={c.strCategory}
                                >
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
    )
}

export default Form
