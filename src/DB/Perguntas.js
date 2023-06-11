import React, { useState } from 'react';


function gerarNumeroAleatorio() {
    let perg = new PERGUNTA();
    console.log("a",perg.a);
    console.log("b",perg.b);
    console.log("b",perg.b);
    console.log("c",perg.c);
    console.log("pergunta gerada:", perg.gerarPergunta(perg.facil));
}


class PERGUNTA {
    constructor() {
        this.a = this.gerar(20,40);
        this.b = this.gerar(1,20);
        this.c = this.gerar(1,10);
        this.d = this.gerar(2,10);

        
        this.facil = {
            soma:{
                enunciado:'Qual é o valor da soma dos termos?',
                termos:`${this.a} + ${this.b}`,
                respostas:[],
            },
            multiplicacao:{
                enunciado:'Qual é o resultado da multiplicação dos termos?',
                termos:`${this.c} x ${this.d}`,
                respostas:[],
            },
            subtracao:{
                enunciado:'Qual é o resultado da subtração dos termos?',
                termos:`${this.a} - ${this.b}`,
                respostas:[],
            },
        }

        this.medio = {
            soma:{
                enunciado:'Qual é o valor da soma dos termos?',
                termos:`${this.a} + ${this.b} + ${this.c} + ${this.d}`,
                respostas:[],
            },
            multiplicacao:{
                enunciado:'Qual é o resultado da multiplicação dos termos?',
                termos:`${this.c} x ${this.d} x ${3}`,
                respostas:[],
            },
            subtracao:{
                enunciado:'Qual é o resultado da subtração dos termos?',
                termos:`${this.a} - ${this.c} - ${this.d}`,
                respostas:[],
            },
        }

        this.dificil = {
            soma:{
                enunciado:'Qual é o valor da soma dos termos?',
                termos:`${this.a} + ${this.b + this.a} + ${this.c + this.b} + ${this.d} + ${this.a + this.d}`,
                respostas:[],
            },
            multiplicacao:{
                enunciado:'Qual é o resultado da multiplicação dos termos?',
                termos:`${this.c} x ${this.d} x ${this.a}`,
                respostas:[],
            },
            subtracao:{
                enunciado:'Qual é o resultado da subtração dos termos?',
                termos:`${this.a + this.a} - ${this.c * 2} - ${this.d}`,
                respostas:[],
            },
        }




    }

    gerar(min,max){
        return Math.floor(Math.random()*max) +min;
    }

    gerarPergunta(dificuldade){
        const operacoes = Object.keys(dificuldade); // Selecionando as chaves
        const operacaoEscolhida = operacoes[Math.floor(Math.random() * operacoes.length)];
        return dificuldade[operacaoEscolhida]; // Acessando e retornando a operação escolhida
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