import React from 'react';
import { Link } from 'react-router-dom';
import { FaAppleAlt } from 'react-icons/fa';

const MainPage = (props: any) => {
  const { startGame, ranking, isModalOpen, handleModalOpen, handleModalClose } = props;
  return (
    <div className="w-full h-full bg-green flex justify-center content-center flex-wrap">
      <div className="w-3/4 h-3/4 bg-light_green rounded-xl flex justify-center items-center">
        <div className="flex flex-col items-center w-1/2">
          <FaAppleAlt className="text-red xl:text-[200px] text-[80px] lg:text-[120px] my-3" />
          <button
            type="button"
            className="my-5 bg-green w-full xl:py-4 text-xl py-2 text-white xl:text-2xl rounded-xl"
            onClick={startGame}
          >
            게임시작
          </button>
          <button
            type="button"
            className="my-5 bg-green w-full xl:py-4 py-2 text-white xl:text-2xl text-xl rounded-xl"
            onClick={handleModalOpen}
          >
            랭킹
          </button>
        </div>
      </div>
      {isModalOpen ? (
        <div className="absolute w-full h-full" onClick={handleModalClose}>
          <div className="absolute bg-green top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] p-2 rounded-md border-solid border-2 border-[#000000] min-w-[40%] lg:rounded-xl lg:p-4">
            <div className="bg-light_green rounded-md lg:rounded-xl p-2 lg:p-4">
              <div className="flex justify-center text-lg lg:text-3xl mx-auto relative">
                <div className="mx-auto">Top 100</div>
              </div>
              <div className="p-1 max-h-36 lg:max-h-72 overflow-auto scrollbar-hide">
                {ranking.map((rank: any, i: number) => (
                  <div
                    key={i}
                    className="flex justify-center bg-green text-white text-[10px] rounded-md p-2 my-1 lg:rounded-xl lg:text-lg snap-none"
                  >
                    <div className="w-2/12">{i + 1}</div>
                    <div className="w-8/12">{rank.nickname}</div>
                    <div className="w-2/12">{rank.score}점</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MainPage;
