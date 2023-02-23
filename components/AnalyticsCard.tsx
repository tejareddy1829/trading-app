import React from "react";
import Card from "./Card";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import Widgets from "./Widgets";

function AnalyticsCard() {
  return (
    <div className='border w-[400px] h-[800px] rounded-3xl bg-[#240091] transform'>
      <div>
        <Header />
      </div>

      <div className='mt-2'>
        <Widgets />
      </div>

      {/* prics */}
      <div className=' flex items-center flex-col space-y-4 mt-6 text-white'>
        <h1 className=' font-semibold text-5xl'>$640</h1>
        <div className=' w-60 h-2 bg-sky-400 rounded-full mb-2'></div>
      </div>

      {/* cards */}
      <div className='mt-12  space-y-9'>
        <div className=' bg-sky-400 rounded-xl m-5'>
          <div className='flex items-center justify-between mt-6'>
            <div>
              <h1 className='text-white font-medium pl-5'>
                Trading Algorithms
              </h1>
            </div>

            <div className='flex items-center m-3 p-1/2 space-x-1 bg-white rounded-xl'>
              <p className=' text-sm  text-sky-400 pl-1'>+2</p>
              <img
                className='h-6 w-6 rounded-full'
                src='https://cdn3.vectorstock.com/i/1000x1000/01/62/light-blue-crystal-precious-gemstone-vector-22950162.jpg'
                alt='logo'
              />
            </div>
          </div>

          {/* paragraph */}
          <div className='flex items-center flex-col'>
            <div className='text-start  p-4 pt-2 w-[85%]'>
              <p className='text-white space-x-1 text-sm'>
                This course covers two of the seven trading strategies that work
                in emerging markets.
              </p>
            </div>

            <div className=' w-60 h-2 bg-white rounded-full mb-2'></div>
          </div>
        </div>

        <div className=' bg-yellow-400 rounded-xl m-5'>
          <div className='flex items-center justify-between mt-6'>
            <div>
              <h1 className='text-white font-medium pl-5'>
                Behavioral Investing{" "}
              </h1>
            </div>

            <div className='flex items-center m-3 p-1/2 space-x-1 bg-white rounded-xl'>
              <p className=' text-sm  text-yellow-400 pl-1'>+2</p>
              <img
                className='h-6 w-6 rounded-full'
                src='https://cdn3.vectorstock.com/i/1000x1000/01/62/light-blue-crystal-precious-gemstone-vector-22950162.jpg'
                alt='logo'
              />
            </div>
          </div>

          {/* paragraph */}
          <div className='flex items-center flex-col'>
            <div className='text-start  p-4 pt-2 w-[85%]'>
              <p className='text-white space-x-1 text-sm'>
                Learn the nature of the baises and therir organs, using
                psycology, neuroscinces and economics
              </p>
            </div>

            <div className=' w-60 h-2 bg-white rounded-full mb-2'></div>
          </div>
        </div>
      </div>

      {/* navigation */}
      <div className='flex items-center w-full  bg-white fixed bottom-0 rounded-b-3xl'>
        <NavigationBar />
      </div>
    </div>
  );
}

export default AnalyticsCard;