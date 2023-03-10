import React from 'react';
import { FaAppleAlt } from 'react-icons/fa';

const GamePage = (props: any) => {
  const {
    boundaryRef,
    isDragged,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    startX,
    startY,
    width,
    height,
    score,
    moveMain,
    time,
    createApple,
    isGameOver,
    tryAgain,
    nickname,
    handleNicknameChange,
    handleRegistRank,
  } = props;

  return (
    <div
      className="bg-green h-full select-none min-w-fit min-h-full"
      onMouseUp={handleMouseUp}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="h-1/6 w-5/6 flex items-center mx-auto justify-around mx-auto">
        <div className="w-4/6 h-1/6 bg-light_green rounded-xl mx-w-6xl">
          <div
            className="h-full bg-red rounded-xl"
            style={{
              width: `${((time - 1) / 119) * 100}%`,
              transition: 'width 1s linear',
            }}
          />
        </div>
        <div className="w-1/6 bg-light_green xl:py-4 lg:py-3 py-1 xl:text-3xl lg:text-2xl text-xl rounded-xl">
          {score}
        </div>
      </div>
      <div
        className="h-4/6 w-5/6 bg-light_green rounded-xl max-w-6xl flex justify-center items-center flex-wrap mx-auto"
        ref={boundaryRef}
      >
        {createApple()}
      </div>
      <div className="h-1/6 flex items-center w-5/6 mx-auto max-w-6xl">
        <button
          type="button"
          className="bg-light_green xl:py-4 lg:py-3 py-1 px-9 xl:text-2xl lg:text-2xl text-lg rounded-xl"
          onClick={moveMain}
        >
          메인으로
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
      />
      <div
        className="absolute top-0 z-10 w-full h-full bg-trans_gray flex justify-center items-center"
        style={isGameOver ? {} : { display: 'none' }}
      >
        <div className="bg-green w-3/6 rounded-xl p-[10px]">
          <div className="flex-wrap flex-col bg-light_green rounded-xl w-full py-6 flex justify-center items-center">
            <div className="w-1/2 justify-center flex items-center font-bold xl:text-3xl lg:text-2xl text-lg">
              <FaAppleAlt className="text-red xl:text-6xl lg:text-4xl text-2xl mx-1" />
              게임 오버...
            </div>
            <div className="w-1/2 flex xl:text-2xl justify-center">{score}점</div>
            <input
              type="text"
              className="w-1/2 text-center xl:text-2xl text-md bg-light_green outline-none border-none my-4"
              style={{ borderBottom: '0.5px solid black' }}
              placeholder="닉네임 입력..."
              value={nickname}
              onChange={handleNicknameChange}
            />
            <div className="w-1/4 flex flex-col">
              <button
                type="button"
                className="bg-green w-full xl:text-xl rounded-xl py-2 text-white my-1"
                onClick={handleRegistRank}
              >
                랭킹등록(미구현)
              </button>
              <button
                type="button"
                className="bg-green w-full xl:text-xl rounded-xl py-2 text-white my-1"
                onClick={tryAgain}
              >
                다시하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
