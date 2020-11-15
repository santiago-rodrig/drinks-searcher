import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'


export const ModalContext = createContext()

const ModalProvider = ({ children }) => {
    const [idRecipe, setIdRecipe] = useState(null)

    return (
        <ModalContext.Provider value={{setIdRecipe}}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider
