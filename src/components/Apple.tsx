import React from 'react';
import { FaAppleAlt } from 'react-icons/fa';

const Apple = (props: any) => {
  const { skin, number, appleRef, isSelected } = props;

  return (
    <div className={skin === 'normal' ? 'relative h-full' : 'relative h-full'} ref={appleRef}>
      <div
        className={
          skin === 'normal'
            ? 'z-10 absolute left-[50%] translate-x-[-50%] text-center top-[50%] translate-y-[-40%] text-md lg:text-3xl xl:text-4xl text-white w-full'
            : 'z-10 absolute left-[50%] translate-x-[-50%] text-center top-[50%] translate-y-[-40%] text-md lg:text-3xl xl:text-4xl w-full ease-in-out duration-200'
        }
        style={
          skin === 'excel' && isSelected
            ? {
                backgroundColor: '#dddddd',
              }
            : {}
        }
      >
        {number}
      </div>
      {skin === 'normal' ? (
        <FaAppleAlt
          className="block mx-auto h-full text-3xl xl:text-5xl lg:text-[40px]"
          style={isSelected ? { color: 'yellow' } : { color: 'red' }}
        />
      ) : null}
    </div>
  );
};

export default Apple;
