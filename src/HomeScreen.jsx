import {Link, useNavigate} from "react-router-dom";
import {Fragment} from "react";


const HomeScreen = () => {

    const navigate = useNavigate()

    return(
        <Fragment>
        <div>Welcome</div>
    <button onClick={() => {
        navigate('/play')
    }}>Play</button>
        </Fragment>
    )
}

export default HomeScreen