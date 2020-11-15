import React from 'react'

const Recipe = ({ recipe }) => (
    <div className="col-12 col-md-4 mb-3">
        <div className="card w-100">
            <h2 className="card-header">{recipe.strDrink}</h2>
        </div>
    </div>
)

export default Recipe
