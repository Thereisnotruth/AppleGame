import React from 'react';

const ExcelSide = () => {
  const alpha = [];
  for (let i = 0; i < 100; i++) {
    alpha.push(i);
  }
  return (
    <div className="absolute left-0 top-[21px] bg-grey">
      {alpha.map((item: number, i: number) => (
        <div
          className="w-[60px] h-[20px] border-b-[1px] border-[#cccccc] shrink-0 text-[14px]"
          key={item}
        >
          {item + 1}
        </div>
      ))}
    </div>
  );
};

export default ExcelSide;
