import React, { useState, useEffect } from 'react'
import "./Style/EditPlayers.scss";
import { FaCheck } from "react-icons/fa";
import { ImCross, ImArrowLeft2 } from "react-icons/im";
import PlayerBtn from './PlayerBtn'

// import { FaBeer } from 'react-icons/fa';

const Players = ({openEditPlayers, allPlayers, changePlayersList}) => {

    const [playerButton,setPlayerButton] = useState([<PlayerBtn key={0} />]);

    // PLAYERS
    const [players, setPlayers] = useState(['Guest']);

    // PLAYER NAME FROM INPUT
    const [playerNameInput, setPlayerNameInput] = useState('');

    //HANDLE CHANGE NEW PLAYER INPUT
    const handleChangePlayerName = event => {
        setPlayerNameInput(event.target.value);
    
    };

    // let handleAddPlayer = (e) => {
    //     e.preventDefault()
    //     setPlayerButton([...playerButton,<PlayerBtn key={playerButton.length} />]);

    //     // Push to end of state array
    //     setPlayers(current => [...current, 'Carl']);

    //     console.log(players);
    // }

    //DELETE PLAYER FROM LIST
    const deletePlayerFromList = (event, key) => {
        // let element = event.target.options.selectedIndex;
        console.log(key);
        changePlayersList(current =>
            current.filter(player => {
                return player.id !== key;
            }),
        );
        console.log(allPlayers);
    }

    // LOAD PLAYERS LIST INPUTS BOX'S
    const handleLoadPlayersInputs = allPlayers.map((playerItem, index) =>
        <div className='playersInputContainer'>
            <input type="text" data-key={playerItem.id} value={playerItem.name}/>
            <ImCross className='deletePlayerIcon' data-key={playerItem.id} onClick={event => deletePlayerFromList(event, playerItem.id)}/>
        </div>
    );

    const handleKeyDownEnter = event => {

        if (event.key === 'Enter') {
            // debugger;
            event.preventDefault();
            const randId = 100 + Math.random() * (100000 - 100);
            let newPlayerObj = {'id': randId , 'name': playerNameInput};
            // allPlayers.changePlayersList({
            //     allPlayers: [...this.state.allPlayers, newPlayerObj]
            // });
            const newPlayersList = [...allPlayers];
            newPlayersList.push(newPlayerObj);
            changePlayersList(newPlayersList);
            setPlayerNameInput(''); // Clear the input field
            
        }
    };

    const handleSavePLayersBtn = event => {
        event.preventDefault();
        const randId = 100 + Math.random() * (100000 - 100);
        let newPlayerObj = {'id': randId , 'name': playerNameInput};
        const newPlayersList = [...allPlayers];
        newPlayersList.push(newPlayerObj);
        changePlayersList(newPlayersList);
        setPlayerNameInput(''); // Clear the input field
    }

    return (
    <div className="playersEditContainer">
        <ImArrowLeft2 className='goBackFromPlayers' onClick={function(){ openEditPlayers()}}/>
        <h1 className='editPlayersTitle'>Edit Players</h1>
        <div className="playersEditListContainer">
            <div className='playersEditListOverflow'>
                {handleLoadPlayersInputs}
                    <h3 className='newPlayerTitle'>New Player</h3>
                <div className='playersNewInputContainer'>
                    <input type="text" value={playerNameInput} onKeyDown={handleKeyDownEnter} onChange={handleChangePlayerName}/>
                    <button className='savaPlayerBtn' onClick={handleSavePLayersBtn}>Save</button>
                </div>
            </div>
        </div>
        <div className="editPlayerContainer">
            <button onClick={function(){ openEditPlayers()}} className="editPlayerBtn"><FaCheck/></button>
        </div>
    </div>
    );
};

export default Players;