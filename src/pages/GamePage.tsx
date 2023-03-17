import React from 'react';
import { FaAppleAlt } from 'react-icons/fa';
import { TbApple } from 'react-icons/tb';
import { RiFileExcel2Line } from 'react-icons/ri';

import ExcelTop from '../components/ExcelTop';
import ExcelSide from '../components/ExcelSide';

const GamePage = (props: any) => {
  const {
    skin,
    handleSkinChange,
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
      className={
        skin === 'normal'
          ? 'bg-green h-full select-none min-w-fit min-h-full ease-in-out duration-200'
          : 'bg-white h-full select-none min-w-fit min-h-full ease-in-out duration-200'
      }
      onMouseUp={handleMouseUp}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
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
      <div className="h-1/6 w-5/6 flex items-center mx-auto justify-around mx-auto max-w-6xl">
        <div
          className={
            skin === 'normal'
              ? 'w-4/6 h-1/6 bg-light_green rounded-xl'
              : 'w-4/6 h-1/6 bg-white rounded-xl shadow-grey'
          }
        >
          <div
            className={skin === 'normal' ? 'h-full bg-red rounded-xl' : 'h-full bg-grey rounded-xl'}
            style={{
              width: `${((time - 1) / 119) * 100}%`,
              transition: 'width 1s linear',
            }}
          />
        </div>
        <div
          className={
            skin === 'normal'
              ? 'w-1/6 bg-light_green xl:py-4 lg:py-3 py-1 xl:text-3xl lg:text-2xl text-xl rounded-xl'
              : 'w-1/6 bg-white xl:py-4 lg:py-3 py-1 xl:text-3xl lg:text-2xl text-xl rounded-xl shadow-grey'
          }
        >
          {score}
        </div>
      </div>
      <div
        className={
          skin === 'normal'
            ? 'h-4/6 w-5/6 bg-light_green rounded-xl max-w-6xl flex justify-center items-center flex-wrap mx-auto'
            : 'h-4/6 w-5/6 max-w-6xl flex justify-center items-center flex-wrap mx-auto'
        }
        ref={boundaryRef}
      >
        {createApple()}
      </div>
      <div className="h-1/6 flex items-center w-3/4 mx-auto max-w-6xl">
        <button
          type="button"
          className={
            skin === 'normal'
              ? 'bg-light_green xl:py-4 lg:py-3 py-1 px-9 xl:text-2xl lg:text-2xl text-lg rounded-xl'
              : 'bg-white xl:py-4 lg:py-3 py-1 px-9 xl:text-2xl lg:text-2xl text-lg rounded-xl hover:shadow-green ease-in-out duration-200'
          }
          onClick={moveMain}
        >
          메인으로
        </button>
        <button
          type="button"
          onClick={handleSkinChange}
          className={
            'py-2 px-4 text-3xl hover:shadow-green ease-in-out duration-200 rounded-md ml-auto'
          }
        >
          {skin === 'normal' ? <TbApple /> : <RiFileExcel2Line />}
        </button>
      </div>
      <div
        style={
          isDragged
            ? {
                position: 'absolute',
                boxSizing: 'border-box',
                border: '2px solid #5d9c59',
                borderRadius: '4px',
                top: startY,
                left: startX,
                width: width,
                height: height,
                zIndex: 100,
              }
            : {
                display: 'hidden',
              }
        }
      />
      <div
        className={
          skin === 'normal'
            ? 'absolute top-0 z-10 w-full h-full bg-trans_gray flex justify-center items-center'
            : 'absolute top-0 z-10 w-full h-full flex justify-center items-center'
        }
        style={isGameOver ? {} : { display: 'none' }}
      >
        <div
          className={
            skin === 'normal'
              ? 'bg-green w-3/6 rounded-xl p-[10px]'
              : 'bg-white w-3/6 rounded-xl p-[10px] shadow-grey'
          }
        >
          <div
            className={
              skin === 'normal'
                ? 'flex-wrap flex-col bg-light_green rounded-xl w-full py-6 flex justify-center items-center'
                : 'flex-wrap flex-col w-full py-6 flex justify-center items-center'
            }
          >
            <div className="w-1/2 justify-center flex items-center font-bold xl:text-3xl lg:text-2xl text-lg">
              {skin === 'normal' ? (
                <FaAppleAlt className="text-red xl:text-6xl lg:text-4xl text-2xl mx-1" />
              ) : (
                <TbApple className="xl:text-6xl lg:text-4xl text-2xl mx-1" />
              )}
              게임 오버...
            </div>
            <div className="w-1/2 flex xl:text-2xl justify-center">{score}점</div>
            <input
              type="text"
              className={
                skin === 'normal'
                  ? 'w-1/2 text-center xl:text-2xl text-md bg-light_green outline-none border-none my-4'
                  : 'w-1/2 text-center xl:text-2xl text-md outline-none border-none my-4'
              }
              style={{ borderBottom: '0.5px solid black' }}
              placeholder="닉네임(12글자 이내) 입력..."
              value={nickname}
              onChange={handleNicknameChange}
              maxLength={12}
            />
            <div className="w-1/4 flex flex-col">
              <button
                type="button"
                className={
                  skin === 'normal'
                    ? 'bg-green w-full xl:text-xl rounded-xl py-2 text-white my-1'
                    : 'w-full xl:text-xl rounded-xl py-2 my-1 hover:shadow-green ease-in-out duration-200'
                }
                onClick={handleRegistRank}
              >
                랭킹등록
              </button>
              <button
                type="button"
                className={
                  skin === 'normal'
                    ? 'bg-green w-full xl:text-xl rounded-xl py-2 text-white my-1'
                    : 'w-full xl:text-xl rounded-xl py-2 my-1 hover:shadow-green ease-in-out duration-200'
                }
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
