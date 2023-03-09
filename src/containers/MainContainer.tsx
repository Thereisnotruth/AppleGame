import React from 'react';
import { useNavigate } from 'react-router-dom';

import MainPage from '../pages/MainPage';

const MainContainer = () => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate('/game');
  };

  return <MainPage startGame={startGame} />;
};

export default MainContainer;
