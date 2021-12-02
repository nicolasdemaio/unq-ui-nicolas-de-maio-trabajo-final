import {useNavigate} from "react-router-dom";

const EndedGame = () => {

    const navigate = useNavigate()

    return (
        <div>
            <div>Ganaste</div>
            <button onClick={() => navigate('/play')}>
                Jugar de nuevo
            </button>
        </div>
    )
}

export default EndedGame
