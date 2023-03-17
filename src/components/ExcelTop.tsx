import React from 'react';

const ExcelTop = () => {
  const alpha = [];
  for (let i = 0; i < 26; i++) {
    alpha.push(String.fromCharCode(65 + i));
  }
  for (let i = 0; i < 26; i++) {
    alpha.push('A' + String.fromCharCode(65 + i));
  }
  return (
    <div className="absolute w-full bg-grey flex h-[20px]">
      <div className="w-[61px] border-x-[1px] border-b-[1px] border-[#cccccc] shrink-0 text-[14px]"></div>
      {alpha.map((item: string, i: number) => (
        <div className="w-[60px] border-r-[1px] border-[#cccccc] shrink-0 text-[14px]" key={i}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default ExcelTop;
