import React, {useState} from "react";
import Spin from './Spin';
import Players from './Players';
import EditPlayers from './EditPlayers';
import SpinPrizeDraw from './SpinPrizeDraw';
import { HiOutlineClock } from "react-icons/hi";

import "./Style/Game.css";



const GamePage = (props) => {

  // Open and close edit players
  const [visibleEditPlayers, setVisibleEditPlayers] = useState(false);

  //Shows and hides "GO" button
  const [visibleSpin, setVisibleSpin] = useState(true);

  const openEditPlayers = () => {
    setVisibleEditPlayers((prev) => !prev);
  }

  // PLAYERS ARRAY
  let [playersList, setPlayersList] = useState([
    {
      id: 1,
      name: 'Bot2'
    },
    {
      id: 2,
      name: 'Bot1'
    }
    
  ]);

  let [shotlessLoser, setShotlessLoser] = useState();

  //GENERATE SHOTLESS RESULT
  // const shotlessResultFunction = () => {
  //   // debugger;
  //   const randomObject = playersList[Math.floor(Math.random() * playersList.length)];
  //   setShotlessLoser(randomObject);
  //   console.log(randomObject);

  // };

  


  return (
    <div className="game">
      <HiOutlineClock className="historyIcon"/>
      <h1 className="shotlessTitle">Shotless</h1>
      <div className="gameHeaderContainer">
        <Spin allPlayers={playersList} setShotlessLoser={setShotlessLoser} shotlessLoser={shotlessLoser} setVisibleSpin={setVisibleSpin} visibleSpin={visibleSpin}/>
      </div>
      
      {/* {visibleEditPlayers &&
        <EditPlayers/>
      } */}

      {visibleEditPlayers ? ( <EditPlayers openEditPlayers={openEditPlayers} allPlayers={playersList} changePlayersList={setPlayersList} setVisibleSpin={setVisibleSpin}/> ) : <Players openEditPlayers={openEditPlayers} allPlayers={playersList}/>}
      {/* <Players/> */}
      {/* <EditPlayers/> */}
    </div>
  );
};

export default GamePage;