import React, { createContext, useState } from 'react'

export const RecipesContext = createContext()

const RecipesProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([])

    const [query, setQuery] = useState({
        ingredient: '',
        category: '',
    })

    return (
        <RecipesContext.Provider value={{ setQuery }}>
            {children}
        </RecipesContext.Provider>
    )
}

export default RecipesProvider
