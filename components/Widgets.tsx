import React from "react";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

function Widgets() {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex items-center space-x-2 '>
        <div className=' ml-2 w-80 flex items-center justify-between h-10  bg-gray-300 bg-opacity-30 text-white rounded-full'>
          <p className=' text-violet-700 rounded-full w-20  pt-2 pl-5 h-10 bg-white'>
            Week
          </p>
          <p>Month</p>
          <p className='pr-5'>Year</p>
        </div>
        <div className=' pt-2 pl-2  bg-gray-300 bg-opacity-10 text-white rounded-full w-10 h-10'>
          <CalendarDaysIcon height={25} width={25} />
        </div>
      </div>

      <div className='flex items-center mt-6 space-x-3'>
        <div className='h-2 w-2 bg-white rounded-full'></div>
        <div className='h-2 w-2 bg-gray-400 bg-opacity-80 rounded-full'></div>
      </div>
    </div>
  );
}

export default Widgets;
