import React, { useState, useEffect } from 'react'
import "./WinnerBanner.scss";

// import { FaBeer } from 'react-icons/fa';

const WinnerBanner = ({shotlessLoser, onClick}) => {


    return (
        <div className="winnerBannerContainer" onClick={onClick}>
            <div className="winnerBanner">
                <div className='winnerNameContainer'>
                    {shotlessLoser.name}
                </div>
            </div>
        </div>
    );
};

export default WinnerBanner;