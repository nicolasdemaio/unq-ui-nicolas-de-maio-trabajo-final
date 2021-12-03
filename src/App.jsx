import './App.css';
import GameScreen from "./components/screens/GameScreen";
import {Route, Routes} from "react-router-dom";
import HomeScreen from "./components/screens/HomeScreen";
import EndedGame from "./components/screens/EndedGame";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<HomeScreen/>}/>
                <Route path='/play' element={<GameScreen/>}/>
                <Route path='/done' element={<EndedGame/>}/>
                <Route path="*" element={<HomeScreen/>}/>
            </Routes>
        </div>
    );
}

export default App;
