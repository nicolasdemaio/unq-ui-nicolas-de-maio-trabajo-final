import {useNavigate} from "react-router-dom";
import './HomeScreen.css'


const HomeScreen = () => {

    const navigate = useNavigate()

    return (
        <div className='home-container'>
            <p className='home-title'>MEMOTEST</p>
            <p className='game-description'>
                <p>Bienvenido a <strong>'MEMOTEST con Paises'</strong> 👋</p>
                <p>El juego consiste en un tablero con distintos pares de paises</p>
                <p>Tu objetivo:</p>
                <p>Descubrir todos los pares iguales</p>
                <hr className='divider-line'/>
                <p>¿Querés intentarlo?</p>
                <button className='play-button' onClick={() => {
                    navigate('/play')
                }}>Jugar
                </button>
            </p>
        </div>

    )
}

export default HomeScreen