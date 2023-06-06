import React, {useEffect, useState} from "react";
import './Spin.scss'
import SpinPrizeDraw from "./SpinPrizeDraw";
import WinnerBanner from "./WinnerBanner";
import $ from 'jquery';

const Spin = ({ allPlayers, setShotlessLoser, shotlessLoser}) => {

  const [visibleSpin, setVisibleSpin] = useState(true);

  const [fadeProp, setFadeProp] = useState({
    fadeIn: 'fadeIn',
    fadeOut: 'fadeOut'
  });

  //GENERATE SHOTLESS RESULT
  const shotlessResultFunction2 = () => {
    // debugger;
    const randomObject = allPlayers[Math.floor(Math.random() * allPlayers.length)];
    setShotlessLoser(randomObject);
    console.log("->", shotlessLoser);

  };

  const [countdown, setCountdown] = useState(null);
  const [countdownFinished, setCountdownFinished] = useState(false);
  const [canStartDraw, setCanStartDraw] = useState(true);

  useEffect(() => {
    if (countdown === 0) {
      setCountdownFinished(true);
      console.log("Finish Countdown");
      setTimeout(() => {
        setCountdown(0);
        setCanStartDraw(true);
      }, 10);
    }
  }, [countdown]);

  function handleClick() {
    if(canStartDraw == true){
      setCanStartDraw(false);
      setCountdown(3);
      //setCountdownFinished(false);
      const interval = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      }, 1000);
      setTimeout(() => {
        //clearInterval(interval); < ------------ DESCOMENTAR
        //setCountdown(null);
        //removeSpin();
      }, 3000);
    }
    
  }

  function handleWinnerBannerClick() {
    setCountdownFinished(false);
    handleClick();
  }

  const handleSpinPrizeDrawClickAgain = () => {
    setVisibleSpin(true);
    //console.log("teste");
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

    // setFadeProp({
    //   fadeGo: 'fadeOut'
    // })
    setTimeout(function() {
      setVisibleSpin((prev) => !prev)
    }, 1000);

    // {shotlessResultFunction};
  };


  return (
    <div className="gameButtonContainer">
        
        {visibleSpin ? ( <button className={`spinButton ${fadeProp.fadeGo}`} onClick={() => { removeSpin(); shotlessResultFunction2()}}>GO</button> ) : <SpinPrizeDraw shotlessLoser={shotlessLoser} onClick={handleSpinPrizeDrawClickAgain}/>}
        
        {/* {visibleSpin && (
          <button className={`spinButton ${fadeProp.fadeGo}`} onClick={handleClick}>
            {countdown !== null ? countdown : "GO"}
          </button>
        )} */}
        {/* {!countdownFinished ? ( 
           <button className={`spinButton ${fadeProp.fadeIn} `} onClick={() => { handleClick(); shotlessResultFunction2()}}>
            {countdown !== null ? countdown : "GO"}
           </button>
        ) : (
          // <div className={fadeProp.fadeIn}>
            <WinnerBanner shotlessLoser={shotlessLoser} onClick={handleWinnerBannerClick}/>
          // </div>

        )
        
        } */}
        
    </div>
  );
};

export default Spin;