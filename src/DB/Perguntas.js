import React, { useState } from 'react';


function gerarNumeroAleatorio() {
    let perg = new PERGUNTA();
    console.log("a",perg.a);
    console.log("b",perg.b);
    console.log("b",perg.b);
    console.log("c",perg.c);
}

const Enunc = {facil : "as",}

class PERGUNTA {
    constructor() {
        ['a', 'b', 'c', 'd', 'e'].forEach( i => this[i] = this.gerar());
    }

    gerar(){
        return Math.floor(Math.random()*20) +1;
    }
}



const Pergunta = () => {
    return(
        <>
        <button onClick={gerarNumeroAleatorio}>Gerar Número Aleatório</button>
        <div id="enunc"></div>
        <div id="numero"></div>
        </>
    );
}

export default Pergunta;