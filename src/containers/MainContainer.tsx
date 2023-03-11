import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import RankViewModel from '../viewmodels/RankViewModel';

const MainContainer = () => {
  const navigate = useNavigate();
  const [ranking, setRanking] = useState<Array<any>>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const startGame = () => {
    navigate('/game');
  };

  const handleModalOpen = async () => {
    const getRankResponse = await RankViewModel.getRank();
    setRanking(getRankResponse);
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
