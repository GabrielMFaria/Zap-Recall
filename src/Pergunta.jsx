import React from "react";
import setaplay from "./assets/seta_play.png";
import setavirar from "./assets/seta_virar.png";
import Botoes from "./Botões";
import styled from "styled-components";
import iconErro from "./assets/icone_erro.png";
import iconMeio from "./assets/icone_quase.png";
import iconAcerto from "./assets/icone_certo.png";

export default function Pergunta(props) {
  const { perguntacard, addRespondidos } = props;
  const [cliquei, setCliquei] = React.useState(0);
  
  function clicarPergunta() {
    const addCliquei = (cliquei + 1) % 4;
    setCliquei(addCliquei);
  }

  if (cliquei === 0) {
    return (
      <Fechada data-identifier="flashcard" onClick={() => clicarPergunta()} idCard={perguntacard.id}>
        <p data-identifier="flashcard-index-item">Pergunta {perguntacard.id}</p>
        <img src={setaplay} alt="setaplay" data-identifier="flashcard-show-btn"/>
      </Fechada>
    );
  } else if (cliquei === 1) {
    return (
      <Aberta >
        <p data-identifier="flashcard-question">{perguntacard.Q}</p>
        <img
        data-identifier="flashcard-turn-btn"
          src={setavirar}
          onClick={() => {
            clicarPergunta();
          }}
          alt="setaplay"
        />
      </Aberta>
    );
  } else if (cliquei === 2) {
    return (
      <Resposta onClick={() => clicarPergunta()}>
        <p data-identifier="flashcard-answer">{perguntacard.R}</p>
        <div>
          <Botoes idCard={perguntacard.id} addRespondidos={addRespondidos} />
        </div>
      </Resposta>
    );
  } else if (cliquei === 3) {
    if (perguntacard.states === "erro") {
      return (
        <Respondida idCard={perguntacard.id} estado="erro">
          <p>Pergunta {perguntacard.id}</p>
          <img data-identifier="flashcard-status" src={iconErro} alt="iconErro" />
        </Respondida>
      );
    }
    if (perguntacard.states === "meio") {
      return (
        <Respondida idCard={perguntacard.id} estado="meio">
          <p>Pergunta {perguntacard.id}</p>
          <img data-identifier="flashcard-status" src={iconMeio} alt="iconMeio" />
        </Respondida>
      );
    }
    if (perguntacard.states === "acerto") {
      return (
        <Respondida idCard={perguntacard.id} estado="acerto">
          <p>Pergunta {perguntacard.id}</p>
          <img data-identifier="flashcard-status" src={iconAcerto} alt="iconAcerto" />
        </Respondida>
      );
    }
  }
}

const Respondida = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-family: "Recursive", sans-serif;
    font-style: normal;
    text-decoration: line-through;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color:${props => props.estado==='erro' ? "#ff3030": (props.estado==="meio" ? "#ff922e" : "#2fbe34") };
  }
`;

const Fechada = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor:pointer;

  p {
    font-family: "Recursive", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`;

const Aberta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor:pointer;
  }
`;

const Resposta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    margin: 0px;
  }
`;