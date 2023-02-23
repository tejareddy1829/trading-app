import React from "react";
import ProgressLine from "./ProgressLine";

function ContentBox() {
  return (
    <>
      <div className=' bg-sky-400 rounded-xl m-5'>
        <div className='flex items-center justify-between mt-6'>
          <div>
            <h1 className='text-white font-medium pl-5'>Trading Algorithms</h1>
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
          <div className='text-start  w-[85%]'>
            <p className='text-white space-x-1 text-md'>
              This course covers two of the seven trading strategies that work
              in emerging markets.
            </p>
          </div>

          <ProgressLine completedSegments={2} noOfSegments={4} />
        </div>
      </div>
      <div className='bg-rose-500 rounded-xl m-5'>
        <div className='flex items-center justify-between mt-6'>
          <div>
            <h1 className='text-white font-medium pl-5'>Risk Management</h1>
          </div>

          <div className='flex items-center m-3 p-1/2 space-x-1 bg-white rounded-xl'>
            <p className=' text-sm  text-red-400 pl-1'>+2</p>
            <img
              className='h-6 w-6 rounded-full'
              src='https://cdn3.vectorstock.com/i/1000x1000/01/62/light-blue-crystal-precious-gemstone-vector-22950162.jpg'
              alt='logo'
            />
          </div>
        </div>

        {/* paragraph */}
        <div className='flex items-center flex-col'>
          <div className='text-start  w-[80%]'>
            <p className='text-white space-x-1 text-md'>
              This course teaches you the concept of risk and expexted return.
            </p>
          </div>

          <ProgressLine completedSegments={3} noOfSegments={4} />
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
          <div className='text-start  w-[85%]'>
            <p className='text-white space-x-1 text-md'>
              Learn the nature of the baises and therir organs, using psycology,
              neuroscinces and economics
            </p>
          </div>

          <ProgressLine completedSegments={1} noOfSegments={4} />
        </div>
      </div>
    </>
  );
}

export default ContentBox;
