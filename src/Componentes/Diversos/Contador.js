import React, { useState, useEffect } from 'react';
import './Contador.css';

const Contador = (props) => {
    const [timer, updateTimer] = useState(0);
    const [contando, setContando] = useState(false); //comecar com falso pois no load o valor inverte
    const [penalidade, adicionarTempo] = useState(props.penalidade||0);

    useEffect(() => {
        let intervalo;
        if(contando){
            intervalo = setInterval(() => {
                updateTimer((valorAntes) => valorAntes + 1);
            },100);
        } else{
            props.PescarTempo((valorAntes) => valorAntes + timer); // se o contador parar atualiza o tempo geral
        }
        return () => {
            clearInterval(intervalo);
        };
    },[contando])


    useEffect(() => {
        adicionarTempo(props.penalidade); // pega o valor do pai a adicionar
        updateTimer(timer+penalidade); // adiciona o valor
    },[props.penalidade]);


    const LigarDesligar = () => setContando(!contando);

    useEffect(() => {
        LigarDesligar();
    },[props.acerto]);



    return(

        <div className='timer-container'> 
        <div>Tempo</div>
        <div>{`${Math.floor(timer/10)}.${timer % 10}`}</div>
        {/* <div onClick={LigarDesligar}>{`${Math.floor(timer/10)}.${timer % 10}`}</div> */}
        </div>
    );
}

export default Contador