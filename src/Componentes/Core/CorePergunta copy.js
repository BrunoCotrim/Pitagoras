import React, { useState, useEffect } from 'react';

function GeradorEnunciados() {
  const [termos, setTermos] = useState([]);
  const [enunciado, setEnunciado] = useState('');
  const [opcoesResposta, setOpcoesResposta] = useState([]);

  useEffect(() => {
    gerarTermos(5); // Gerar 5 termos (você pode ajustar esse valor)
    selecionarEnunciado();
  }, []);

  const gerarTermos = (n) => {
    const termos = [];
    for (let i = 0; i < n; i++) {
      const termo = Math.floor(Math.random() * 20) + 1; // Gera um número aleatório entre 1 e 100
      termos.push(termo);
    }
    setTermos(termos);
  };

  const selecionarEnunciado = () => {
    const enunciados = [
      'Qual é o valor da soma dos termos?',
      'Qual é o resultado da multiplicação dos termos?',
      'Qual é o valor da subtração dos termos?',
    ];
    const enunciado = enunciados[Math.floor(Math.random() * enunciados.length)];
    setEnunciado(enunciado);
  };

  const gerarOpcoesResposta = (verdadeira, falsas) => {
    const opcoes = [verdadeira, ...falsas];
    for (let i = opcoes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [opcoes[i], opcoes[j]] = [opcoes[j], opcoes[i]];
    }
    setOpcoesResposta(opcoes);
  };

  const verificarResposta = (opcao) => {
    const respostaVerdadeira = obterRespostaVerdadeira();
    if (opcao === respostaVerdadeira) {
      alert('Resposta correta!');
    } else {
      alert('Resposta incorreta. Tente novamente!');
    }
  };

  const obterRespostaVerdadeira = () => {
    let respostaVerdadeira;
    if (enunciado === 'Qual é o valor da soma dos termos?') {
      respostaVerdadeira = termos.reduce((sum, termo) => sum + termo, 0);
    } else if (enunciado === 'Qual é o resultado da multiplicação dos termos?') {
      respostaVerdadeira = termos.reduce((mul, termo) => mul * termo, 1);
    } else if (enunciado === 'Qual é o maior valor entre os termos?') {
      respostaVerdadeira = Math.max(...termos);
    } else if (enunciado === 'Qual é o menor valor entre os termos?') {
      respostaVerdadeira = Math.min(...termos);
    }
    return respostaVerdadeira;
  };

  const exibirOpcoesResposta = () => {
    return opcoesResposta.map((opcao, index) => (
      <button key={index} onClick={() => verificarResposta(opcao)}>
        {opcao}
      </button>
    ));
  };

  return (
    <div>
      <h1>Gerador de Enunciados</h1>
      <p>Enunciado: {enunciado}</p>
      <p>Termos: {termos.join(', ')}</p>
      <div>{exibirOpcoesResposta()}</div>
    </div>
  );
}

export default GeradorEnunciados;