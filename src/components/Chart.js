import React from "react";
import Labels from "./Labels";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";
import { useGetLabelsQuery } from "../feature/api/apiSlice";
import { Chart_data, getTotal } from "../utils/getLabels";

const Chart = () => {
  const {
    data: transactions,
    isError,
    isLoading,
    isSuccess,
  } = useGetLabelsQuery();

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
    content = <Doughnut {...Chart_data(transactions)} />;
  }

  ChartJS.register(ArcElement);

  return (
    <div className='w-[80%] md:max-w-md h-auto flex flex-col justify-center  items-center gap-10 justify-self-center'>
      <div className='relative'>
        {content}
        <div className='absolute top-[40%] left-[40%]'>
          <h1 className='font-medium text-lg'>Total</h1>
          <p className='font-semibold text-2xl tracking-tight text-emerald-500 '>
            ${isSuccess && getTotal(transactions)}
          </p>
        </div>
      </div>
      <Labels />
    </div>
  );
};

export default Chart;
