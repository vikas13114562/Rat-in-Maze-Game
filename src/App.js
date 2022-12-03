

import './components/Components.css'
import Solution from "./components/Solution";
import GameSetup from "./components/GameSetup";


function App() {
 
  return (
    <div className="container" >
      <GameSetup />
      <div className="problem-container">
        {/* <h3>Initial Maze</h3>
        <Problem arr = {arr} size = {size} /> */}
       
      </div>
      <>
        <Solution />
      </>
    </div>
  );
}

export default App;
