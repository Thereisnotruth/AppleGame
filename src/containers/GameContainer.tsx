import React, { useEffect, useRef, useState } from 'react';

import GamePage from '../pages/GamePage';

const GameContainer = () => {
  const boundaryRef = useRef<HTMLDivElement>(null);
  const appleRef = useRef<HTMLDivElement>(null);
  const [isSelected, setIsSelected] = useState<boolean>(false);
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
    setIsSelected(false);
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
      if (isDragged && appleRef.current) {
        if (event.clientX - endX > 0 && event.clientY - endY > 0) {
          // 우-하
          setWidth(event.clientX - endX);
          setHeight(event.clientY - endY);
        } else if (event.clientX - endX > 0 && event.clientY - endY < 0) {
          // 우-상
          setWidth(event.clientX - endX);
          setStartY(event.clientY);
          setHeight(endY - event.clientY);
          if (
            appleRef.current.offsetTop + appleRef.current.clientHeight > event.clientY &&
            appleRef.current.offsetLeft < event.clientX
          ) {
            setIsSelected(true);
          } else {
            setIsSelected(false);
          }
        } else if (event.clientX - endX < 0 && event.clientY - endY > 0) {
          // 좌-하
          setStartX(event.clientX);
          setWidth(endX - event.clientX);
          setHeight(event.clientY - endY);
        } else if (event.clientX - endX < 0 && event.clientY - endY < 0) {
          // 좌-상
          setStartX(event.clientX);
          setWidth(endX - event.clientX);
          setStartY(event.clientY);
          setHeight(endY - event.clientY);
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
      appleRef={appleRef}
      isSelected={isSelected}
      isDragged={isDragged}
      handleMouseDown={handleMouseDown}
      handleMouseUp={handleMouseUp}
      handleMouseMove={handleMouseMove}
      startX={startX}
      startY={startY}
      width={width}
      height={height}
    />
  );
};

export default GameContainer;
