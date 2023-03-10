import React from 'react';
import { FaAppleAlt } from 'react-icons/fa';

const Apple = (props: any) => {
  const { number, appleRef, isSelected } = props;

  return (
    <div className="relative h-full" ref={appleRef}>
      <div className="z-10 absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-40%] text-2xl text-white">
        {number}
      </div>
      <FaAppleAlt
        className="block mx-auto h-full text-3xl"
        style={isSelected ? { color: 'yellow' } : { color: 'red' }}
      />
    </div>
  );
};

export default Apple;
