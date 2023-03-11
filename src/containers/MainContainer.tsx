import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MainPage from '../pages/MainPage';

const MainContainer = () => {
  const navigate = useNavigate();
  const [ranking, setRanking] = useState<Array<any>>([
    {
      nickname: '닉네임sdfsdfsdfsdfd',
      score: 122,
    },
    {
      nickname: '닉네임',
      score: 12,
    },
    {
      nickname: '닉네임',
      score: 12,
    },
    {
      nickname: '닉네임',
      score: 12,
    },
    {
      nickname: '닉네임',
      score: 12,
    },
    {
      nickname: '닉네임',
      score: 12,
    },
    {
      nickname: '닉네임',
      score: 12,
    },
    {
      nickname: '닉네임',
      score: 12,
    },
    {
      nickname: '닉네임',
      score: 12,
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const startGame = () => {
    navigate('/game');
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <MainPage
      startGame={startGame}
      ranking={ranking}
      isModalOpen={isModalOpen}
      handleModalOpen={handleModalOpen}
      handleModalClose={handleModalClose}
    />
  );
};

export default MainContainer;
