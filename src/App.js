import React from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Recipes from './components/Recipes'
import CategoriesProvider from './context/CategoriesContext'
import RecipesProvider from './context/RecipesContext'
import ModalProvider from './context/ModalContext'

function App() {
    return (
        <CategoriesProvider>
            <RecipesProvider>
                <ModalProvider>
                    <Header />
                    <div className="container">
                        <div className="row">
                            <Form />
                        </div>
                        <Recipes />
                    </div>
                </ModalProvider>
            </RecipesProvider>
        </CategoriesProvider>
    )
}

export default App
