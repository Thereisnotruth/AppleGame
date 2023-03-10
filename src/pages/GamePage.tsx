import React from 'react';

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
    time,
    createApple,
  } = props;

  return (
    <div
      className="bg-green h-full select-none"
      onMouseUp={handleMouseUp}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
    >
      <div className="h-1/6 w-5/6 flex items-center mx-auto justify-around mx-auto">
        <div className="w-4/6 h-1/6 bg-light_green rounded-xl">
          <div
            className="h-full bg-red rounded-xl"
            style={{
              width: `${((time - 1) / 119) * 100}%`,
              transition: 'width 1s linear',
            }}
          />
        </div>
        <div className="w-1/6 bg-light_green py-4 text-3xl rounded-xl">{score}</div>
      </div>
      <div
        className="h-4/6 w-5/6 bg-light_green mx-auto rounded-xl max-w-6xl flex justify-center items-center"
        ref={boundaryRef}
      >
        {createApple()}
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
