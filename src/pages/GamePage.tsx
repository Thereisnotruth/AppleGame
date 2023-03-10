import React from 'react';
import AppleContainer from '../containers/AppleContainer';

const GamePage = (props: any) => {
  const {
    boundaryRef,
    isSelected,
    isDragged,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
    startX,
    startY,
    endX,
    endY,
    width,
    height,
    direction,
    score,
    drag,
    reset,
  } = props;

  return (
    <div
      className="bg-green h-full select-none"
      onMouseUp={handleMouseUp}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
    >
      <div className="h-1/6 w-5/6 flex items-center mx-auto justify-around">
        <div className="w-4/6">타이머</div>
        <div className="w-1/6 bg-light_green py-4 text-3xl rounded-xl">{score}</div>
      </div>
      <div
        className="h-4/6 w-5/6 bg-light_green mx-auto rounded-xl max-w-6xl flex justify-center items-center"
        ref={boundaryRef}
      >
        <AppleContainer
          test={3}
          isDragged={isDragged}
          isSelected={isSelected}
          endX={endX}
          endY={endY}
          width={width}
          height={height}
          direction={direction}
          drag={drag}
        />
        <AppleContainer
          test={7}
          isDragged={isDragged}
          isSelected={isSelected}
          endX={endX}
          endY={endY}
          width={width}
          height={height}
          direction={direction}
          drag={drag}
        />
      </div>
      <div className="h-1/6 flex items-center w-5/6 mx-auto">
        <button
          type="button"
          className="bg-light_green py-4 px-9 text-2xl rounded-xl"
          onClick={reset}
        >
          초기화
        </button>
      </div>
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
