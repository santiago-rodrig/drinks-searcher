import React from 'react'

const Recipe = ({ recipe }) => (
    <div className="col-12 col-md-4 mb-3">
        <div className="card w-100">
            <img
                className="card-img-top"
                src={recipe.strDrinkThumb}
                alt={recipe.strDrink}
            />
            <h2 className="card-header">{recipe.strDrink}</h2>
            <div className="card-body">
                <button type="button" className="btn btn-block btn-primary">
                    Ver Receta
                </button>
            </div>
        </div>
    </div>
)

export default Recipe
