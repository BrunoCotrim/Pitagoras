import React, { useState } from 'react';



export class PERGUNTA {
    constructor(diff) {
        this.a = this.gerarTermo(20,40);
        this.b = this.gerarTermo(1,20);
        this.c = this.gerarTermo(1,10);
        this.d = this.gerarTermo(2,10);

        
        this.facil = {
            soma:{
                tipo:`Adição`,
                enunciado:'Qual é o valor da soma dos termos?',
                termos:`${this.a} + ${this.b}`,
                respostas:[this.a + this.b],
            },
            multiplicacao:{
                tipo:`Multiplicação`,
                enunciado:'Qual é o resultado da multiplicação dos termos?',
                termos:`${this.c} x ${this.d}`,
                respostas:[this.c * this.d],
            },
            subtracao:{
                tipo:`Subtração`,
                enunciado:'Qual é o resultado da subtração dos termos?',
                termos:`${this.a} - ${this.b}`,
                respostas:[this.a - this.b],
            },
        }

        this.medio = {
            soma:{
                tipo:`Adição`,
                enunciado:'Qual é o valor da soma dos termos?',
                termos:`${this.a} + ${this.b} + ${this.c} + ${this.d}`,
                respostas:[this.a + this.b + this.c + this.d],
            },
            multiplicacao:{
                tipo:`Multiplicação`,
                enunciado:'Qual é o resultado da multiplicação dos termos?',
                termos:`${this.c} x ${this.d} x ${3}`,
                respostas:[this.c * this.d * 3],
            },
            subtracao:{
                tipo:`Subtração`,
                enunciado:'Qual é o resultado da subtração dos termos?',
                termos:`${this.a} - ${this.c} - ${this.d}`,
                respostas:[this.a - this.c - this.d],
            },
        }

        this.dificil = {
            soma:{
                tipo:`Adição`,
                enunciado:'Qual é o valor da soma dos termos?',
                termos:`${this.a} + ${this.b + this.a} + ${this.c + this.b} + ${this.d} + ${this.a + this.d}`,
                respostas:[this.a + this.b + this.a + this.c + this.b + this.d + this.a + this.d],
            },
            multiplicacao:{
                tipo:`Multiplicação`,
                enunciado:'Qual é o resultado da multiplicação dos termos?',
                termos:`${this.c} x ${this.d} x ${this.a}`,
                respostas:[this.c * this.d * this.a],
            },
            subtracao:{
                tipo:`Subtração`,
                enunciado:'Qual é o resultado da subtração dos termos?',
                termos:`${this.a + this.a} - ${this.c * 2} - ${this.d}`,
                respostas:[this.a + this.a - this.c * 2 - this.d],
            },
        };

        switch (diff){
            case 'Fácil':
                this.pergunta = this.gerarPergunta(this.facil);
                break;

            case 'Médio':
                this.pergunta = this.gerarPergunta(this.medio);
                break;

            case 'Difícil':
                this.pergunta = this.gerarPergunta(this.dificil);
                break;
        }


    }

    gerarTermo(min,max){
        return Math.floor(Math.random()*max) +min;
    }

    gerarResposta(operacao) {

        const mixOpcoesResposta = (verdadeira, falsas) => {  //algoritmo para embaralhamento
            const opcoes = [verdadeira, ...falsas];
            for (let i = opcoes.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [opcoes[i], opcoes[j]] = [opcoes[j], opcoes[i]];
            };
            return opcoes;
          };

          let respCerta = operacao.respostas[0];
          let a = respCerta + this.gerarTermo(1,5);
          let b = respCerta - this.gerarTermo(1,5);
          let c = Math.floor(respCerta * Math.random()*2);
          let valores = mixOpcoesResposta([respCerta,true],[[a,false],[b,false],[c,false]]);
          operacao.respostas = valores;

    }

    gerarPergunta(dificuldade){
        const operacoes = Object.keys(dificuldade); // Selecionando as chaves
        const operacaoEscolhida = operacoes[Math.floor(Math.random() * operacoes.length)];
        const operacao = dificuldade[operacaoEscolhida];
        this.gerarResposta(operacao);
        return operacao; // Acessando e retornando a operação escolhida
    }

}


let perg = new PERGUNTA('facil');

function gerarNumeroAleatorio() {
    console.log("pergunta gerada:", perg);

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
