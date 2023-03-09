import React, { useEffect } from 'react';
import { FaAppleAlt } from 'react-icons/fa';

const Apple = (props: any) => {
  const { number, appleRef, isSelected } = props;
  if (isSelected) {
    console.log(number);
  }
  return (
    <div className="relative m-0 inline-block" ref={appleRef}>
      <div className="z-10 absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-40%] text-3xl">
        {number}
      </div>
      <FaAppleAlt
        className="text-5xl"
        style={isSelected ? { color: 'yellow' } : { color: 'red' }}
      />
    </div>
  );
};

export default Apple;
