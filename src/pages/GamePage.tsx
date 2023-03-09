import React from 'react';
import { FaAppleAlt } from 'react-icons/fa';

const GamePage = (props: any) => {
  const {
    boundaryRef,
    isDragged,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
    startX,
    startY,
    width,
    height,
  } = props;

  return (
    <div
      className="bg-green h-full select-none"
      onMouseUp={handleMouseUp}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
    >
      <div className="h-1/6">헤더</div>
      <div
        className="h-4/6 w-5/6 bg-light_green mx-auto rounded-xl max-w-6xl"
        ref={boundaryRef}
      ></div>
      <div className="h-1/6"></div>
      <div
        style={
          isDragged
            ? {
                position: 'absolute',
                boxSizing: 'border-box',
                border: '0.5px solid black',
                top: startY,
                left: startX,
                width: width,
                height: height,
              }
            : {
                display: 'hidden',
              }
        }
      ></div>
    </div>
  );
};

export default GamePage;
