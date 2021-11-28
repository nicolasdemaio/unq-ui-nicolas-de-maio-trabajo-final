
import './App.css';
import GameScreen from "./GameScreen";
import {
    Route, Routes
} from "react-router-dom";
import HomeScreen from "./HomeScreen";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<HomeScreen/>} />
            <Route path='/play' element={<GameScreen />} />
        </Routes>
    </div>
  );
}

export default App;
