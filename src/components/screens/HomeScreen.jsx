import {useNavigate} from "react-router-dom";
import {Fragment} from "react";


const HomeScreen = () => {

    const navigate = useNavigate()

    return (
        <Fragment>
            <h1>MEMOTEST</h1>
            <h2>with countries</h2>
            <h3>Try to ....</h3>
            <p>Do you want try?</p>
            <button onClick={() => {
                navigate('/play')
            }}>Play
            </button>
        </Fragment>
    )
}

export default HomeScreen