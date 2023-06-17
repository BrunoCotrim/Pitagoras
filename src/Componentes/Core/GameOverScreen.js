import './GameOverStyle.css';
import React, { useState, useEffect } from 'react';



const GameOverScreen = (props) => {
    return(
        <div className='GO_container'>
            <h1>Jornada concluída!</h1>
            <h2>Parabéns {props.user}, por chegar até aqui!</h2>
            <h3>Seu tempo total foi de:</h3>
            <h1>{props.children}</h1>
        </div>
    );
};

export default GameOverScreen;