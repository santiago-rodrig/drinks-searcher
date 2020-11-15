import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const ModalContext = createContext()

const ModalProvider = ({ children }) => {
    const [idRecipe, setIdRecipe] = useState(null)
    const [recipe, setRecipe] = useState({})

    useEffect(() => {
        if (idRecipe) {
            const getRecipeFromAPI = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`
                const payload = await axios.get(url)
                setRecipe(payload.data.drinks[0])
            }

            getRecipeFromAPI()
        }
    }, [idRecipe, setRecipe])

    return (
        <ModalContext.Provider value={{ setIdRecipe, recipe, setRecipe }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider
