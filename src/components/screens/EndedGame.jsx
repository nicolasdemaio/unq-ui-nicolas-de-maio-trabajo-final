import {useNavigate} from "react-router-dom";
import './EndedGame.css'

const EndedGame = () => {

    const navigate = useNavigate()

    return (
        <div className='ended-container'>
            <div className='ended-title'>YOU WIN 👏</div>
            <p className='ended-subtitle-container'>
                <div className='ended-subtitle'>We hope you have enjoyed the game!</div>
                😄
            </p>
            <button className='ended-button' onClick={() => navigate('/play')}>
                Play again
            </button>
        </div>
    )
}

export default EndedGame
