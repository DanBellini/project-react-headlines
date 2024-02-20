import React from 'react';
import styled from 'styled-components';
import arvore from '../../../assets/images/unnamed.jpg'
export default function Scrollbars() {
  return (
      <Content>
        <Storie src={arvore}/>
        <Storie src={arvore}/>
        <Storie src={arvore}/>
        <Storie src={arvore}/>
        <Storie src={arvore}/>
        <Storie src={arvore}/>
        <Storie src={arvore}/>
        <Storie src={arvore}/>
        <Storie src={arvore}/>
        <Storie src={arvore}/>
        <Storie src={arvore}/>
        <Storie src={arvore}/>
      </Content>
  );
}

const Storie = styled.img`
  flex: 0 0 auto;
  height: 100%;
  width: 200px;
  background-color: brown;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  object-fit:cover;
`;

const Content = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-wrap: nowrap;
align-items: center;
overflow-x: auto;
overflow-y: hidden;
justify-content: flex-start;

  &::-webkit-scrollbar {
    width: 4px; /* Largura da barra de rolagem */
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.5); /* Cor da barra de rolagem */
    border-radius: 4px; /* Arredondamento das bordas */
  }

  &::-webkit-scrollbar-track {
    background-color: transparent; /* Cor do fundo da barra de rolagem */
  }
`;
