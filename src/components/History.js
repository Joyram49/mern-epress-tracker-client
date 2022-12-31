import React from "react";

import HistoryItem from "./HistoryItem";
import { useGetLabelsQuery } from "../feature/api/apiSlice";

const History = () => {
  const { data: transactions, isError, isLoading } = useGetLabelsQuery();

  let content;

  if (isLoading) {
    content = <div>transactions is loading.....</div>;
  }
  if (!isLoading && isError) {
    content = <div>an error occured!!!</div>;
  }
  if (!isLoading && !isError && transactions.length === 0) {
    content = <div>no data found!!!</div>;
  }
  if (!isLoading && !isError && transactions.length > 0) {
    content = transactions.map((transaction) => (
      <HistoryItem transaction={transaction} key={transaction._id} />
    ));
  }
  return (
    <div className='w-full flex flex-col justify-start items-start gap-[14px]'>
      {content}
    </div>
  );
};

export default History;
