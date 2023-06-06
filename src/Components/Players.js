import React, { useState, useEffect } from 'react'
import "./Players.css";
import { FaPlus } from "react-icons/fa";
import WinnerBanner from './WinnerBanner';
import PlayerBtn from './PlayerBtn'

// import { FaBeer } from 'react-icons/fa';

const Players = ({openEditPlayers, allPlayers}) => {

    // let playersList =['Guest', 'Teste1', 'Teste2'];

    // LOAD PLAYERS LIST
    const handleLoadPlayers = allPlayers.map((playerItem, index) =>
        <PlayerBtn data-key={playerItem.id} value={playerItem.name}/>
    );

    return (
    <div className="playersContainer">
        <div className="playersListContainer">
            <div className="playersListOverflow">
                {/* <PlayerBtn/> */}
                {handleLoadPlayers}
            </div>
        </div>
        <div className="addPlayerContainer">
            <button onClick={function(){ openEditPlayers()}} className="addPlayerBtn"><FaPlus/></button>
        </div>
    </div>
    );
};

export default Players;