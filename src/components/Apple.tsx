import React from 'react';
import { FaAppleAlt } from 'react-icons/fa';

const Apple = (props: any) => {
  const { number, appleRef, isSelected } = props;

  return (
    <div className="relative h-full" ref={appleRef}>
      <div className="z-10 absolute left-[50%] translate-x-[-50%] text-center top-[50%] translate-y-[-40%] text-md lg:text-3xl xl:text-4xl text-white">
        {number}
      </div>
      <FaAppleAlt
        className="block mx-auto h-full text-3xl xl:text-5xl lg:text-[40px]"
        style={isSelected ? { color: 'yellow' } : { color: 'red' }}
      />
    </div>
  );
};

export default Apple;
