import React from 'react';

import { FaAppleAlt } from 'react-icons/fa';

const GamePage = (props: any) => {
  const { isDragged, handleMouseDown, handleMouseUp } = props;
  return (
    <div className="bg-green h-full">
      <div className="h-1/6">헤더</div>
      <div
        className="h-4/6 w-5/6 bg-light_green mx-auto rounded-xl max-w-6xl"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      ></div>
      <div className="h-1/6">푸터</div>
      <div className={isDragged ? '' : 'hidden'}>드래그</div>
    </div>
  );
};

export default GamePage;
