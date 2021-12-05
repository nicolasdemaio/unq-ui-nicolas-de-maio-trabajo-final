import {useNavigate} from "react-router-dom";
import './EndedGame.css'

const EndedGame = () => {

    const navigate = useNavigate()

    return (
        <div className='ended-container'>
            <div className='ended-title'>GANASTE 👏</div>
            <p className='ended-subtitle-container'>
                <div className='ended-subtitle'>Espero que hayas disfrutado del juego!</div>
                😄
            </p>
            <button className='ended-button' onClick={() => navigate('/play')}>
                Jugar de nuevo
            </button>
        </div>
    )
}

export default EndedGame
