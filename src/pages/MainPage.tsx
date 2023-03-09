import React from 'react';
import { Link } from 'react-router-dom';
import { FaAppleAlt } from 'react-icons/fa';

const MainPage = (props: any) => {
  const { startGame } = props;
  return (
    <div className="w-full h-full bg-green flex justify-center content-center flex-wrap">
      <div className="w-3/4 h-3/4 bg-light_green rounded-xl flex justify-center items-center">
        <div className="flex flex-col items-center w-1/2">
          <FaAppleAlt className="text-red text-[200px] my-3" />
          <button
            type="button"
            className="my-5 bg-green w-full py-4 text-white text-2xl rounded-xl"
            onClick={startGame}
          >
            게임시작
          </button>
          <button
            type="button"
            className="my-5 bg-green w-full py-4 text-white text-2xl rounded-xl"
          >
            랭킹
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
