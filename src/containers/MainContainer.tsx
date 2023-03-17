import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import MainPage from '../pages/MainPage';
import useViewModel from '../viewmodels/RankViewModel';
import useSkinViewModel from '../viewmodels/SkinViewModel';
import { skinState } from '../models/SkinAtom';

const MainContainer = () => {
  const navigate = useNavigate();
  const [ranking, setRanking] = useState<Array<any>>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { getRank, setRank } = useViewModel();

  const { changeSkin } = useSkinViewModel();

  const skin = useRecoilValue(skinState);

  const startGame = () => {
    navigate('/game');
  };

  const handleModalOpen = async () => {
    const getRankResponse = await getRank();
    setRanking(getRankResponse);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSkinChange = () => {
    changeSkin();
  };

  const handleGitMove = () => {
    window.location.href = 'https://github.com/Thereisnotruth/AppleGame';
  };

  return (
    <MainPage
      skin={skin}
      handleSkinChange={handleSkinChange}
      handleGitMove={handleGitMove}
      startGame={startGame}
      ranking={ranking}
      isModalOpen={isModalOpen}
      handleModalOpen={handleModalOpen}
      handleModalClose={handleModalClose}
    />
  );
};

export default MainContainer;
