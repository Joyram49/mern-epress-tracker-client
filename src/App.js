import "./App.css";
import Chart from "./components/Chart";
import Transaction from "./components/Transaction";

function App() {
  return (
    <div className='w-screen h-screen flex justify-center items-start overflow-x-hidden'>
      <div className='container text-center  mt-10 md:mt-20 w-full md:max-w-6xl drop-shadow-lg mb-10 md:mb-0'>
        <h1 className='bg-gradient-to-r from-slate-700 to-slate-900 py-8 text-slate-100 text-2xl font-semibold'>
          Expense Tracker
        </h1>
        <div className='grid md:grid-cols-2 gap-4 mt-10'>
          <Chart />
          <Transaction />
        </div>
      </div>
    </div>
  );
}

export default App;
