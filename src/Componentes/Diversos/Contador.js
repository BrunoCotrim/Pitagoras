import React, { useState, useEffect } from 'react';
import './Contador.css';

const Contador = (props) => {
    const [timer, updateTimer] = useState(0);
    const [contando, setContando] = useState(false);
    const [adicional, adicionarTempo] = useState(props.adicional);

    useEffect(() => {
        let intervalo;
        if(contando){
            intervalo = setInterval(() => {
                updateTimer((valorAntes) => valorAntes + 1);
            },100);
        }
        return () => {
            clearInterval(intervalo);
        };
    },[contando])


    useEffect(() => {
        adicionarTempo(props.adicional);
        console.log("adicional", adicional);
        updateTimer(timer+adicional);
    },[props.adicional]);




    const LigarDesligar = () => setContando(!contando);



    return(

        <div className='timer-container'> 
        <div>Tempo</div>
        <div onClick={LigarDesligar}>{`${Math.floor(timer/10)}.${timer % 10}`}</div>
        </div>
    );
}

export default Contador