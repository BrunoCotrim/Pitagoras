import './instrucoes.css';
import React, { useState, useEffect } from 'react';



const Instrucoes = (props) => {
    return(
        <div className='Instruct_Box'>
            <h2>Vamos Começar</h2>

            <p>Seja bem-vindo <u>jogador</u>. Siga as instruções abaixo para uma melhor <u>experiência</u>.</p>
            <h2>Informações:</h2>
        <ul>
            <li>Jogue o jogo no seu próprio <u>tempo</u>.</li>
            <li>Não utilize sua calculadora.</li>
            <li>Sinta-se livre para usar papel e caneta</li>
            <li>A cada resposta errada o contador adicionará mais tempo.</li>
            <li>A penalidade aumenta com cada erro consecutivo.</li>
            <li>Ao fim anote seu tempo total e tente conseguir um tempo melhor da proxima vez</li>
            <li>Divirta-se!</li>

        </ul>
        </div>
    );
};

export default Instrucoes;