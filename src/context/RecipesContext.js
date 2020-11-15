import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const RecipesContext = createContext()

const RecipesProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([])

    const [query, setQuery] = useState({
        ingredient: '',
        category: '',
    })

    const { ingredient, category } = query

    useEffect(() => {
        if (ingredient.trim() !== '' && category.trim() !== '') {
            const queryAPI = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`
                const payload = await axios.get(url)

                setRecipes(payload.data.drinks)
            }

            queryAPI()
        }
    }, [ingredient, category, setRecipes])

    return (
        <RecipesContext.Provider value={{ setQuery, recipes }}>
            {children}
        </RecipesContext.Provider>
    )
}

export default RecipesProvider
