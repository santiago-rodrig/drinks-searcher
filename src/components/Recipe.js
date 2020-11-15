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
        position: 'absolute',
        width: 600,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadow[5],
        padding: theme.spacing(2, 4, 3),
    },
}))

const Recipe = ({ recipe }) => {
    const [modalStyle] = useState(getModalStyle)
    const [open, setOpen] = useState(false)
    const classes = useStyles()
    const { setIdRecipe } = useContext(ModalContext)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
        setIdRecipe(null)
    }

    const handleClick = () => {
        setIdRecipe(recipe.idDrink)
        handleOpen()
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
                            <h1>Modal component</h1>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Recipe
