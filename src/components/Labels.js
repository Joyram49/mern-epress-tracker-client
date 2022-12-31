import React from "react";
import LabelItem from "./LabelItem";
import { useGetLabelsQuery } from "../feature/api/apiSlice";
import { getLabelswithPercent } from "../utils/getLabels";

const Labels = () => {
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
    let labels = getLabelswithPercent(transactions, "type");
    content = labels?.map((transaction) => (
      <LabelItem transaction={transaction} key={transaction.id} />
    ));
  }

  return (
    <div className='w-full flex flex-col justify-start items-start gap-[14px]'>
      {content}
    </div>
  );
};

export default Labels;
