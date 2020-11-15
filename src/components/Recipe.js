import React, { useContext, useState } from 'react'
import { ModalContext } from '../context/ModalContext'
import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles'

const getModalStyle = () => {
    const top = 50
    const left = 50

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    }
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'fixed',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        height: 600,
        overflow: 'auto',
    },
}))

const Recipe = ({ recipe }) => {
    const [modalStyle] = useState(getModalStyle)
    const [open, setOpen] = useState(false)
    const classes = useStyles()
    const {
        setIdRecipe,
        recipe: recipeDetails,
        setRecipe: setRecipeDetails,
    } = useContext(ModalContext)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
        setIdRecipe(null)
        setRecipeDetails({})
    }

    const handleClick = () => {
        setIdRecipe(recipe.idDrink)
        handleOpen()
    }

    const listIngredients = () => {
        let ingredients = []
        let ingredient

        for (let i = 1; i < 16; i += 1) {
            ingredient = recipeDetails[`strIngredient${i}`]

            if (ingredient) {
                ingredients.push(<li key={i}>{ingredient}</li>)
            }
        }

        return ingredients
    }

    return (
        <div className="col-12 col-md-4 mb-3">
            <div className="card w-100">
                <img
                    className="card-img-top"
                    src={recipe.strDrinkThumb}
                    alt={recipe.strDrink}
                />
                <h2 className="card-header">{recipe.strDrink}</h2>
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={handleClick}
                    >
                        Ver Receta
                    </button>
                    <Modal open={open} onClose={() => handleClose()}>
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{recipeDetails.strDrink}</h2>
                            <h3 className="mt-4">Instrucciones</h3>
                            <p>{recipeDetails.strInstructions}</p>
                            <img
                                className="img-fluid my-4"
                                src={recipeDetails.strDrinkThumb}
                            />
                            <h3>Ingredientes y cantidades</h3>
                            <ul>{listIngredients()}</ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Recipe
