import {useNavigate} from "react-router-dom";
import './HomeScreen.css'


const HomeScreen = () => {

    const navigate = useNavigate()

    return (
        <div className='home-container'>
            <p className='home-title'>MEMOTEST</p>
            <p className='game-description'>
                <p>Welcome to <strong>'MEMOTEST with countries'</strong> 👋</p>
                <p>This game consists on a board with different pairs of countries cards</p>
                <p>What is the objective?</p>
                <p>Click the cards and discover all equals pairs to win</p>
                <hr className='divider-line'/>
                <p>Do you want to try?</p>
                <button className='play-button' onClick={() => {
                    navigate('/play')
                }}>Play
                </button>
            </p>
        </div>

    )
}

export default HomeScreen