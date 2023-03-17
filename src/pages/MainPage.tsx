import React from 'react';
import { Link } from 'react-router-dom';
import { FaAppleAlt } from 'react-icons/fa';
import { TbApple } from 'react-icons/tb';
import { RiFileExcel2Line } from 'react-icons/ri';
import ExcelTop from '../components/ExcelTop';
import ExcelSide from '../components/ExcelSide';

const MainPage = (props: any) => {
  const {
    skin,
    handleSkinChange,
    startGame,
    ranking,
    isModalOpen,
    handleModalOpen,
    handleModalClose,
  } = props;
  return (
    <div
      className={
        skin === 'normal'
          ? 'w-full h-full bg-green flex justify-center content-end flex-wrap ease-in-out duration-200'
          : 'w-full h-full flex justify-center content-end flex-wrap ease-in-out duration-200'
      }
      style={
        skin === 'excel'
          ? {
              backgroundSize: '60px 20px',
              backgroundImage:
                'linear-gradient(to right, #dddddd 1px, transparent 1px), linear-gradient(to bottom, #dddddd 1px, transparent 1px)',
            }
          : {}
      }
    >
      {skin === 'excel' ? <ExcelTop /> : null}
      {skin === 'excel' ? <ExcelSide /> : null}
      <div
        className={
          skin === 'normal'
            ? 'w-3/4 h-3/4 bg-light_green rounded-xl flex justify-center items-center absolute top-1/2 translate-y-[-50%]'
            : 'w-3/4 h-3/4 flex justify-center items-center absolute top-1/2 translate-y-[-50%]'
        }
      >
        <div className="flex flex-col items-center w-1/2">
          {skin === 'normal' ? (
            <FaAppleAlt className="text-red xl:text-[200px] text-[80px] lg:text-[120px] my-3" />
          ) : (
            <TbApple className="xl:text-[200px] text-[80px] lg:text-[120px] my-3" />
          )}
          <button
            type="button"
            className={
              skin === 'normal'
                ? 'my-5 bg-green w-1/2 xl:py-4 text-xl py-2 text-white xl:text-2xl rounded-xl'
                : 'my-5 w-1/2 xl:py-4 text-xl py-2 xl:text-2xl hover:shadow-green ease-in-out duration-200 rounded-md'
            }
            onClick={startGame}
          >
            게임시작
          </button>
          <button
            type="button"
            className={
              skin === 'normal'
                ? 'my-5 bg-green w-1/2 xl:py-4 py-2 text-white xl:text-2xl text-xl rounded-xl'
                : 'my-5 w-1/2 xl:py-4 text-xl py-2 xl:text-2xl hover:shadow-green rounded-md ease-in-out duration-200'
            }
            onClick={handleModalOpen}
          >
            랭킹
          </button>
        </div>
      </div>
      <div className="h-1/6 flex items-center justify-end mx-auto w-3/4">
        <button
          type="button"
          onClick={handleSkinChange}
          className={'py-2 px-4 text-3xl hover:shadow-green ease-in-out duration-200 rounded-md'}
        >
          {skin === 'normal' ? <TbApple /> : <RiFileExcel2Line />}
        </button>
      </div>
      {isModalOpen ? (
        <div className="absolute w-full h-full" onClick={handleModalClose}>
          <div
            className={
              skin === 'normal'
                ? 'absolute bg-green top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] p-2 rounded-md border-solid border-2 border-[#000000] min-w-[40%] lg:rounded-xl lg:p-4'
                : 'absolute bg-white top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] p-2 border-[#000000] border-[1px] rounded-md min-w-[40%] lg:rounded-xl lg:p-4'
            }
          >
            <div
              className={
                skin === 'normal'
                  ? 'bg-light_green rounded-md lg:rounded-xl p-2 lg:p-4'
                  : 'rounded-md lg:rounded-xl'
              }
            >
              <div className="flex justify-center text-lg lg:text-3xl mx-auto relative bg-[#dddddd]">
                <div className="mx-auto">Top 100</div>
              </div>
              <div className="p-1 max-h-36 lg:max-h-72 overflow-auto scrollbar-hide">
                {ranking.map((rank: any, i: number) => (
                  <div
                    key={i}
                    className={
                      skin === 'normal'
                        ? 'flex justify-center bg-green text-white text-[10px] rounded-md p-2 my-1 lg:rounded-xl lg:text-lg snap-none'
                        : 'flex justify-center text-[10px] rounded-md p-2 my-1 lg:rounded-xl lg:text-lg snap-none'
                    }
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
