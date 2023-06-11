import React, { useState } from 'react';

function gerarNumeroAleatorio() {

    console.log("pergunta gerada:", perg.pergunta);
    console.log("pergunta gerada:", perg.pergunta);
    console.log("resposta gerada:", perg.pergunta.respostas);
    console.log("resposta gerada:", perg.pergunta.respostas[0]);
    console.log("resposta gerada:", perg.pergunta.respostas[1]);
    console.log("resposta gerada:", perg.pergunta.respostas[2]);
    console.log("resposta gerada:", perg.pergunta.respostas[3]);
}


class PERGUNTA {
    constructor(diff) {
        this.a = this.gerarTermo(20,40);
        this.b = this.gerarTermo(1,20);
        this.c = this.gerarTermo(1,10);
        this.d = this.gerarTermo(2,10);

        
        this.facil = {
            soma:{
                enunciado:'Qual é o valor da soma dos termos?',
                termos:`${this.a} + ${this.b}`,
                respostas:[this.a + this.b],
            },
            multiplicacao:{
                enunciado:'Qual é o resultado da multiplicação dos termos?',
                termos:`${this.c} x ${this.d}`,
                respostas:[this.c * this.d],
            },
            subtracao:{
                enunciado:'Qual é o resultado da subtração dos termos?',
                termos:`${this.a} - ${this.b}`,
                respostas:[this.a - this.b],
            },
        }

        this.medio = {
            soma:{
                enunciado:'Qual é o valor da soma dos termos?',
                termos:`${this.a} + ${this.b} + ${this.c} + ${this.d}`,
                respostas:[this.a + this.b + this.c + this.d],
            },
            multiplicacao:{
                enunciado:'Qual é o resultado da multiplicação dos termos?',
                termos:`${this.c} x ${this.d} x ${3}`,
                respostas:[this.c * this.d * 3],
            },
            subtracao:{
                enunciado:'Qual é o resultado da subtração dos termos?',
                termos:`${this.a} - ${this.c} - ${this.d}`,
                respostas:[this.a - this.c - this.d],
            },
        }

        this.dificil = {
            soma:{
                enunciado:'Qual é o valor da soma dos termos?',
                termos:`${this.a} + ${this.b + this.a} + ${this.c + this.b} + ${this.d} + ${this.a + this.d}`,
                respostas:[this.a + this.b + this.a + this.c + this.b + this.d + this.a + this.d],
            },
            multiplicacao:{
                enunciado:'Qual é o resultado da multiplicação dos termos?',
                termos:`${this.c} x ${this.d} x ${this.a}`,
                respostas:[this.c * this.d * this.a],
            },
            subtracao:{
                enunciado:'Qual é o resultado da subtração dos termos?',
                termos:`${this.a + this.a} - ${this.c * 2} - ${this.d}`,
                respostas:[this.a + this.a - this.c * 2 - this.d],
            },
        };

        switch (diff){
            case 'facil':
                this.pergunta = this.gerarPergunta(this.facil);
                break;

            case 'medio':
                this.pergunta = this.gerarPergunta(this.medio);
                break;

            case 'dificil':
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