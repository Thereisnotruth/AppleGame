import React, { useEffect, useRef, useState } from 'react';

import GamePage from '../pages/GamePage';

const GameContainer = () => {
  const boundaryRef = useRef<HTMLDivElement>(null);
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

  const drag = (num: number, target: HTMLDivElement) => {
    setSelected((prev: number) => prev + num);
    const newArray = selectedArray;
    newArray.push(target);
    setSelectedArray([...newArray]);
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    if (
      event.clientX < boundRight &&
      event.clientX > boundLeft &&
      event.clientY < boundBottom &&
      event.clientY > boundTop
    ) {
      setIsDragged(true);
      setEndX(event.clientX);
      setEndY(event.clientY);
      setStartX(event.clientX);
      setStartY(event.clientY);
    }
  };
  const handleMouseUp = (event: React.MouseEvent) => {
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
  useEffect(() => {
    if (boundaryRef.current) {
      setBoundLeft(boundaryRef.current.offsetLeft);
      setBoundRight(boundaryRef.current.offsetLeft + boundaryRef.current.clientWidth);
      setBoundTop(boundaryRef.current.offsetTop);
      setBoundBottom(boundaryRef.current.offsetTop + boundaryRef.current.clientHeight);
    }
  }, []);
  return (
    <GamePage
      boundaryRef={boundaryRef}
      isDragged={isDragged}
      handleMouseDown={handleMouseDown}
      handleMouseUp={handleMouseUp}
      handleMouseMove={handleMouseMove}
      startX={startX}
      startY={startY}
      endX={endX}
      endY={endY}
      width={width}
      height={height}
      direction={direction}
      score={score}
      drag={drag}
    />
  );
};

export default GameContainer;
