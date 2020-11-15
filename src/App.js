import React from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Recipes from './components/Recipes'
import CategoriesProvider from './context/CategoriesContext'
import RecipesProvider from './context/RecipesContext'

function App() {
    return (
        <CategoriesProvider>
            <RecipesProvider>
                <Header />
                <div className="container">
                    <div className="row">
                        <Form />
                    </div>
                    <Recipes />
                </div>
            </RecipesProvider>
        </CategoriesProvider>
    )
}

export default App
