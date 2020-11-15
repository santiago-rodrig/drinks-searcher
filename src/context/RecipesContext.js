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
        if (Object.values(query).filter((v) => v.trim() !== '').length === 2) {
            const queryAPI = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}c=${category}`
                const payload = await axios.get(url)

                setRecipes(payload.data.drinks)
            }
        }
    }, [query])

    return (
        <RecipesContext.Provider value={{ setQuery }}>
            {children}
        </RecipesContext.Provider>
    )
}

export default RecipesProvider
