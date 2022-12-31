import React, { useEffect, useState } from "react";
import { useAddTransactionMutation } from "../feature/api/apiSlice";
import History from "./History";

const Transaction = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("Investment");
  const [amount, setAmount] = useState("");

  const [addTransaction, { isLoading, isSuccess, isError, Error }] =
    useAddTransactionMutation();

  const resetForm = () => {
    setName("");
    setType("Investment");
    setAmount("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ name, type, amount });
  };

  useEffect(() => {
    if (isSuccess) {
      resetForm();
    }
  }, [isSuccess]);

  return (
    <div className='w-[80%] md:max-w-md justify-self-center flex flex-col justify-start items-center  '>
      <h1 className='text-xl font-semibold tracking-tight text-gray-800 mb-4'>
        Transaction
      </h1>
      <form className='w-full md:max-w-[80%] mb-10' onSubmit={handleSubmit}>
        <div className='grid gap-4'>
          <div>
            <input
              type='text'
              placeholder='Salary, House Rent etc'
              className='form-input'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <select
            className='form-input'
            defaultValue={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value='Investment'>Investment</option>
            <option value='Expense'>Expense</option>
            <option value='Savings'>Savings</option>
          </select>
          <div>
            <input
              type='number'
              placeholder='enter amount'
              className='form-input'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div>
            <button
              disabled={isLoading}
              type='submit'
              className='w-full bg-purple-800 hover:bg-purple-900 text-slate-50 py-1.5'
            >
              Make Transaction
            </button>
          </div>
        </div>
        {isError && <p>{Error}</p>}
      </form>
      <div className='w-full md:max-w-[80%]'>
        <h1 className='text-xl font-semibold tracking-tight text-gray-800 mb-4'>
          History
        </h1>
        <History />
      </div>
    </div>
  );
};

export default Transaction;
