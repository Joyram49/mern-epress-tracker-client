import React from "react";
import { BsTrash } from "react-icons/bs";
import { useDeleteTransactionMutation } from "../feature/api/apiSlice";

const HistoryItem = ({ transaction }) => {
  const { color, name, _id, amount } = transaction;

  const [deleteTransaction, { isLoading }] = useDeleteTransactionMutation();

  const handleClick = (e) => {
    if (!e.target.dataset.id) return 0;
    deleteTransaction({
      _id: e.target.dataset.id,
    });
  };
  return (
    <div
      className='w-full h-[32px] flex justify-between items-center shadow-sm  pl-2 
    '
    >
      <button disabled={isLoading} className='cursor-pointer'>
        <BsTrash
          style={{ color: color }}
          onClick={handleClick}
          data-id={_id ?? ""}
        />
      </button>
      <h1 className='flex-1'>{name}</h1>
      <p className=' justify-self-end'>{amount}</p>
      <div
        className='w-[6px] h-full rounded-r-lg ml-2'
        style={{ backgroundColor: color }}
      />
    </div>
  );
};

export default HistoryItem;
