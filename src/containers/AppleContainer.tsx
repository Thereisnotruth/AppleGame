import React, { useEffect, useState, useRef } from 'react';
import Apple from '../components/Apple';

const AppleContainer = (props: any) => {
  const { skin, test, isDragged, endX, endY, width, height, direction, drag } = props;
  const appleRef = useRef<HTMLDivElement>(null);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [num, setNum] = useState<number>(0);
  useEffect(() => {
    if (appleRef.current) {
      if (direction === 1) {
        // 우 상
        if (
          appleRef.current.offsetLeft + appleRef.current.clientWidth > endX &&
          appleRef.current.offsetTop < endY &&
          appleRef.current.offsetLeft < endX + width &&
          appleRef.current.offsetTop + appleRef.current.clientHeight > endY - height
        ) {
          setIsSelected(true);
        } else {
          setIsSelected(false);
        }
      } else if (direction === 2) {
        // 좌 상
        if (
          appleRef.current.offsetLeft < endX &&
          appleRef.current.offsetTop < endY &&
          appleRef.current.offsetLeft + appleRef.current.clientWidth > endX - width &&
          appleRef.current.offsetTop + appleRef.current.clientHeight > endY - height
        ) {
          setIsSelected(true);
        } else {
          setIsSelected(false);
        }
      } else if (direction === 3) {
        // 좌 하
        if (
          appleRef.current.offsetLeft < endX &&
          appleRef.current.offsetTop + appleRef.current.clientHeight > endY &&
          appleRef.current.offsetLeft + appleRef.current.clientWidth > endX - width &&
          appleRef.current.offsetTop < endY + height
        ) {
          setIsSelected(true);
        } else {
          setIsSelected(false);
        }
      } else if (direction === 4) {
        // 우 하
        if (
          appleRef.current.offsetLeft + appleRef.current.clientWidth > endX &&
          appleRef.current.offsetTop + appleRef.current.clientHeight > endY &&
          appleRef.current.offsetLeft < endX + width &&
          appleRef.current.offsetTop < endY + height
        ) {
          setIsSelected(true);
        } else {
          setIsSelected(false);
        }
      }
    }
    if (!isDragged) {
      setIsSelected(false);
    }
  }, [width, height]);
  useEffect(() => {
    if (isSelected) {
      drag(num, appleRef.current);
    }
  }, [isSelected]);
  useEffect(() => {
    // setNum(Math.floor(Math.random() * 9 + 1));
    setNum(test);
  }, []);
  return <Apple skin={skin} number={num} isSelected={isSelected} appleRef={appleRef} />;
};

export default AppleContainer;
