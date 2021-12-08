import {Button, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const WinnerModal = ({resetGame, isWinner}) => {

    const navigate = useNavigate()

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(isWinner)
    }, [isWinner])

    const handleClose = () => setShow(false);

    const handlePlayAgain = () => {
        setShow(false)
        resetGame()
    }
    const handleGoHome = () => {
        setShow(false)
        navigate('/')
    }

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Ganaste 👏</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, has ganado esta ronda!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handlePlayAgain}>
                    Jugar de nuevo
                </Button>
                <Button variant="primary" onClick={handleGoHome}>
                    Ir al inicio
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default WinnerModal