import React, { useContext } from 'react'
import { RecipesContext } from '../context/RecipesContext'
import Recipe from './Recipe'

const Recipes = () => {
    const { recipes } = useContext(RecipesContext)

    return (
        <div className="row mt-5">
            {recipes.map(r => <Recipe key={r.idDrink} recipe={r} />)}
        </div>
    )
}

export default Recipes
