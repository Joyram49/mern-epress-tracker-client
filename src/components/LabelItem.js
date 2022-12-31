import React from "react";

const LabelItem = ({ transaction }) => {
  const { color, type, percent } = transaction;
  return (
    <div className='w-full  flex justify-start items-center shadow-sm'>
      <div
        className='h-full w-[6px]  rounded-full mr-2'
        style={{ backgroundColor: color }}
      />
      <div className='flex-1 flex justify-between  text-lg '>
        <p className='text-base text-gray-600'>{type}</p>
        <p className='font-bold text-gray-800'>{Math.round(percent)}%</p>
      </div>
    </div>
  );
};

export default LabelItem;
