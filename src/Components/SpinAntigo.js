import React, {useEffect, useState} from "react";
import './Spin.css'
import SpinPrizeDraw from "./SpinPrizeDraw";
import WinnerBanner from "./WinnerBanner";
import $ from 'jquery';

const Spin = ({ allPlayers, setShotlessLoser, shotlessLoser}) => {

  const [visibleSpin, setVisibleSpin] = useState(true);

  const [fadeProp, setFadeProp] = useState({
    fadeGo: 'fadeIn',
    fadeSpin: 'fadeOut'
  });

    //GENERATE SHOTLESS RESULT
    const shotlessResultFunction2 = () => {
      // debugger;
      const randomObject = allPlayers[Math.floor(Math.random() * allPlayers.length)];
      setShotlessLoser(randomObject);
      console.log("->", shotlessLoser);
  
    };

  const removeSpin = () => {
      // if (fadeProp.fadeGo === 'fadeIn'){
      //   setFadeProp({
      //     fadeGo: 'fadeOut',
      //     fadeSpin: 'fadeIn'
      //   })
      // }else {
      //   setFadeProp({
      //     fadeGo: 'fadeOut',
      //     fadeSpin: 'fadeIn'
      //   })
      // }
      // setVisibleSpin((prev) => !prev);

      setFadeProp({
        fadeGo: 'fadeOut'
      })
      setTimeout(function() {
        setVisibleSpin((prev) => !prev)
      }, 1000);

      // {shotlessResultFunction};
  };

  // setTimeout(() => {
  //   alert('Interval triggered');
  // }, 1000);

  return (
    <div className="gameButtonContainer">
        {/* {visibleSpin ? ( <button className={`spinButton ${fadeProp.fadeGo}`} onClick={() => { removeSpin(); shotlessResultFunction2()}}>GO</button> ) : <SpinPrizeDraw shotlessLoser={shotlessLoser}/>} */}
        {visibleSpin ? ( <button className={`spinButton ${fadeProp.fadeGo}`} onClick={() => { removeSpin(); shotlessResultFunction2()}}>GO</button> ) : <WinnerBanner shotlessLoser={shotlessLoser}/>}
        
    </div>
  );
};

export default Spin;