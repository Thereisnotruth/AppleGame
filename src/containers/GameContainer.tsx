import React, { useState } from 'react';

import GamePage from '../pages/GamePage';

const GameContainer = () => {
  const [isDragged, setIsDragged] = useState<boolean>(false);
  const handleMouseDown = (event: React.MouseEvent) => {
    console.log(event);
    setIsDragged(true);
  };
  const handleMouseUp = (event: React.MouseEvent) => {
    console.log(event);
    setIsDragged(false);
  };
  return (
    <GamePage
      isDragged={isDragged}
      handleMouseDown={handleMouseDown}
      handleMouseUp={handleMouseUp}
    />
  );
};

export default GameContainer;
