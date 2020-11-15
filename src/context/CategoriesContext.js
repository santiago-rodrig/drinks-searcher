import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const CategoriesContext = createContext()

const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState([]) // this is not used, it is an example

    useEffect(() => {
        const getCategories = async () => {
            const url =
                'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            const payload = await axios.get(url)
            setCategories(payload.data.drinks)
        }

        getCategories()
    }, [])

    // everything in the value is going to be made available to all the
    // children components of this context provider
    return (
        <CategoriesContext.Provider value={{ categories, setCategories }}>
            {children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesProvider
