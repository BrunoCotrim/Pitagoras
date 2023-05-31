import React, { useState, useEffect } from 'react';
import './Contador.css';

const Contador = (props) => {
    const [timer, updateTimer] = useState(0);
    const [contando, setContando] = useState(false);
    const [adicional, adicionarTempo] = useState(props.adicional);

    useEffect(() => {
        let intervalo;
        console.log('valor', adicional); 
        if(contando){
            intervalo = setInterval(() => {
                updateTimer((valorAntes) => valorAntes + 1 + adicional);
            },100);
        }
        return () => {
            clearInterval(intervalo);
        };
    },[contando, props.adicional])

    useEffect(() => {
        
        if (props.adicional !== adicional) {
            adicionarTempo(props.adicional);
            console.log('chaaaange adicional: ', adicional);
            console.log('chaaaange props: ', props.adicional);
        }
        if (adicional !== 0) {
          updateTimer((valorAntes) => valorAntes + adicional);
          adicionarTempo(0);
        }
      }, [props.adicional]);


    const LigarDesligar = () => setContando(!contando);



    return(

        <div className='timer-container'> 
        <button>Tempo</button>
        <div onClick={LigarDesligar}>{`${Math.floor(timer/10)}.${timer % 10}`}</div>
        </div>
    );
}

export default Contador