import React, { useState, useEffect } from 'react';
import "./PlayerBtn.css";
import PLayerBanner from '../Components/Images/playerBanner.png';
// import { FaBeer } from 'react-icons/fa';

const PlayerBtn = (props) => {

  return (
    <button className="playerBtn">{props.value}</button>
  );
};

export default PlayerBtn;