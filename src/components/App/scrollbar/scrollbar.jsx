import React from 'react';
import styled from 'styled-components';

export default function Scrollbars() {
  return (
      <Content>
        <Storie>stores 1</Storie>
        <Storie>stores 2</Storie>
        <Storie>stores 3</Storie>
        <Storie>stores 4</Storie>
        <Storie>stores 5</Storie>
        <Storie>stores 6</Storie>
        <Storie>stores 7</Storie>
        <Storie>stores 8</Storie>
        <Storie>stores 9</Storie>
        <Storie>stores 10</Storie>
        <Storie>stores 11</Storie>
        <Storie>stores 12</Storie>
      </Content>
  );
}

const Storie = styled.div`
  flex: 0 0 auto;
  height: 100%;
  width: 100px;
  background-color: brown;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const Content = styled.section`
  display: flex;
  height: 100%;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;

  width: 100%;
  overflow-x: auto; 
  overflow-y: hidden; 

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
