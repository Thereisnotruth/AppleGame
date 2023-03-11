import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import GamePage from '../pages/GamePage';
import AppleContainer from './AppleContainer';
import useViewModel from '../viewmodels/RankViewModel';

const GameContainer = () => {
  const boundaryRef = useRef<HTMLDivElement>(null);
  const [nickname, setNickname] = useState<string>('');
  const [direction, setDirection] = useState<number>(0);
  const [isDragged, setIsDragged] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [startY, setStartY] = useState<number>(0);
  const [endX, setEndX] = useState<number>(0);
  const [endY, setEndY] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [boundLeft, setBoundLeft] = useState<number>(0);
  const [boundRight, setBoundRight] = useState<number>(0);
  const [boundTop, setBoundTop] = useState<number>(0);
  const [boundBottom, setBoundBottom] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selected, setSelected] = useState<number>(0);
  const [selectedArray, setSelectedArray] = useState<Array<HTMLDivElement>>([]);
  const [time, setTime] = useState<number>(2);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const intervalTime: { current: NodeJS.Timeout | null } = useRef(null);

  const navigate = useNavigate();
  const { setRank } = useViewModel();

  const handleRegistRank = async () => {
    const newNickname = nickname.replace(' ', '');
    if (newNickname.length === 0) {
      alert('닉네임을 입력해주세요.');
    } else {
      await setRank(nickname, score);
      alert('등록되었습니다.');
      navigate('/');
    }
  };

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const drag = (num: number, target: HTMLDivElement) => {
    setSelected((prev: number) => prev + num);
    const newArray = selectedArray;
    newArray.push(target);
    setSelectedArray([...newArray]);
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    if (
      event.touches[0].clientX < boundRight &&
      event.touches[0].clientX > boundLeft &&
      event.touches[0].clientY < boundBottom &&
      event.touches[0].clientY > boundTop &&
      time > 0
    ) {
      setIsDragged(true);
      setEndX(event.touches[0].clientX);
      setEndY(event.touches[0].clientY);
      setStartX(event.touches[0].clientX);
      setStartY(event.touches[0].clientY);
    }
  };
  const handleTouchMove = (event: React.TouchEvent) => {
    if (
      event.touches[0].clientX < boundRight &&
      event.touches[0].clientX > boundLeft &&
      event.touches[0].clientY < boundBottom &&
      event.touches[0].clientY > boundTop
    ) {
      if (isDragged) {
        if (event.touches[0].clientX - endX > 0 && event.touches[0].clientY - endY > 0) {
          // 우-하
          setWidth(event.touches[0].clientX - endX);
          setHeight(event.touches[0].clientY - endY);
          setDirection(4);
        } else if (event.touches[0].clientX - endX > 0 && event.touches[0].clientY - endY < 0) {
          // 우-상
          setWidth(event.touches[0].clientX - endX);
          setStartY(event.touches[0].clientY);
          setHeight(endY - event.touches[0].clientY);
          setDirection(1);
        } else if (event.touches[0].clientX - endX < 0 && event.touches[0].clientY - endY > 0) {
          // 좌-하
          setStartX(event.touches[0].clientX);
          setWidth(endX - event.touches[0].clientX);
          setHeight(event.touches[0].clientY - endY);
          setDirection(3);
        } else if (event.touches[0].clientX - endX < 0 && event.touches[0].clientY - endY < 0) {
          // 좌-상
          setStartX(event.touches[0].clientX);
          setWidth(endX - event.touches[0].clientX);
          setStartY(event.touches[0].clientY);
          setHeight(endY - event.touches[0].clientY);
          setDirection(2);
        }
      }
    }
  };
  const handleTouchEnd = (event: React.TouchEvent) => {
    if (selected === 10) {
      selectedArray.forEach((div: HTMLDivElement) => {
        div.style.display = 'none';
      });
      setScore((prev: number) => prev + selectedArray.length);
    }
    setSelectedArray([]);
    setSelected(0);
    setDirection(0);
    setIsDragged(false);
    setWidth(0);
    setHeight(0);
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    if (
      event.clientX < boundRight &&
      event.clientX > boundLeft &&
      event.clientY < boundBottom &&
      event.clientY > boundTop &&
      time > 0
    ) {
      setIsDragged(true);
      setEndX(event.clientX);
      setEndY(event.clientY);
      setStartX(event.clientX);
      setStartY(event.clientY);
    }
  };
  const handleMouseUp = (event: React.MouseEvent | React.TouchEvent) => {
    if (selected === 10) {
      selectedArray.forEach((div: HTMLDivElement) => {
        div.style.display = 'none';
      });
      setScore((prev: number) => prev + selectedArray.length);
    }
    setSelectedArray([]);
    setSelected(0);
    setDirection(0);
    setIsDragged(false);
    setWidth(0);
    setHeight(0);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (
      event.clientX < boundRight &&
      event.clientX > boundLeft &&
      event.clientY < boundBottom &&
      event.clientY > boundTop
    ) {
      if (isDragged) {
        if (event.clientX - endX > 0 && event.clientY - endY > 0) {
          // 우-하
          setWidth(event.clientX - endX);
          setHeight(event.clientY - endY);
          setDirection(4);
        } else if (event.clientX - endX > 0 && event.clientY - endY < 0) {
          // 우-상
          setWidth(event.clientX - endX);
          setStartY(event.clientY);
          setHeight(endY - event.clientY);
          setDirection(1);
        } else if (event.clientX - endX < 0 && event.clientY - endY > 0) {
          // 좌-하
          setStartX(event.clientX);
          setWidth(endX - event.clientX);
          setHeight(event.clientY - endY);
          setDirection(3);
        } else if (event.clientX - endX < 0 && event.clientY - endY < 0) {
          // 좌-상
          setStartX(event.clientX);
          setWidth(endX - event.clientX);
          setStartY(event.clientY);
          setHeight(endY - event.clientY);
          setDirection(2);
        }
      }
    }
  };

  const createRow = () => {
    const row: Array<React.ReactNode> = [];
    for (let i = 0; i < 17; i++) {
      row.push(
        <div
          style={{
            width: `${(1 / 17) * 100}%`,
            height: '100%',
          }}
          key={i}
        >
          <AppleContainer
            test={Math.floor(Math.random() * 9 + 1)}
            isDragged={isDragged}
            endX={endX}
            endY={endY}
            width={width}
            height={height}
            direction={direction}
            drag={drag}
          />
        </div>
      );
    }
    return row;
  };

  const createApple = () => {
    const board: Array<React.ReactNode> = [];
    for (let i = 0; i < 10; i++) {
      board.push(
        <div className="h-[10%] flex w-full" key={i}>
          {createRow()}
        </div>
      );
    }
    return board;
  };

  const moveMain = () => {
    navigate('/');
  };

  const tryAgain = () => {
    window.location.reload();
  };

  useEffect(() => {
    if (time <= 0) {
      setIsGameOver(true);
      setIsDragged(false);
      setSelectedArray([]);
      setSelected(0);
      setDirection(0);
      setIsDragged(false);
      setWidth(0);
      setHeight(0);
      clearInterval(intervalTime.current as NodeJS.Timeout);
    }
  }, [time]);

  const setBoundary = () => {
    if (boundaryRef.current) {
      setBoundLeft(boundaryRef.current.offsetLeft);
      setBoundRight(boundaryRef.current.offsetLeft + boundaryRef.current.clientWidth);
      setBoundTop(boundaryRef.current.offsetTop);
      setBoundBottom(boundaryRef.current.offsetTop + boundaryRef.current.clientHeight);
    }
  };
  useEffect(() => {
    setBoundary();
    window.addEventListener('resize', setBoundary);
    intervalTime.current = setInterval(() => {
      setTime((prev: number) => prev - 1);
    }, 1000);

    return () => {
      window.removeEventListener('resize', setBoundary);
      clearInterval(intervalTime.current as NodeJS.Timeout);
    };
  }, []);
  return (
    <GamePage
      boundaryRef={boundaryRef}
      isDragged={isDragged}
      handleMouseDown={handleMouseDown}
      handleMouseUp={handleMouseUp}
      handleMouseMove={handleMouseMove}
      handleTouchStart={handleTouchStart}
      handleTouchMove={handleTouchMove}
      handleTouchEnd={handleTouchEnd}
      startX={startX}
      startY={startY}
      endX={endX}
      endY={endY}
      width={width}
      height={height}
      direction={direction}
      score={score}
      drag={drag}
      moveMain={moveMain}
      time={time}
      createApple={createApple}
      isGameOver={isGameOver}
      tryAgain={tryAgain}
      nickname={nickname}
      handleNicknameChange={handleNicknameChange}
      handleRegistRank={handleRegistRank}
    />
  );
};

export default GameContainer;
