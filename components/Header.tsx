import React from "react";

import {
  WifiIcon,
  Battery100Icon,
  ChartBarIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";

function Header(): any {
  return (
    <div className='mt-3'>
      {/* top */}
      <div className='flex items-center mx-4'>
        <p className='flex-1 text-white'>9:14</p>

        <div className='flex items-center space-x-2 mt-1  text-white'>
          <ChartBarIcon className='h-5 w-5' />
          <WifiIcon className='h-5 w-5' />
          <Battery100Icon className='h-5 w-5' />
        </div>
      </div>

      {/* bottom */}
      <div className='mt-2 flex justify-around items-center'>
        {/* rank */}
        <div className='flex items-center'>
          <Image src={"/icons/trophy.png"} width={25} height={25} alt={"cup"} />
          <div className='flex items-center space-x-1 text-white '>
            <p className='font-extralight'>Rank: </p>
            <Image
              src={"/icons/down.png"}
              width={12}
              height={12}
              alt={"down"}
              className='mt-1'
            />
            <p>10</p>
          </div>
        </div>

        {/* pic */}
        <div>
          <img
            className='h-12 w-12 mb-4 rounded-full p-[2.5px] border-white-500 border-2'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcg5OV7m4Ojt-6P7o0JwzgBcZosZwisJw0A&usqp=CAU'
            alt='profile'
          />
        </div>

        {/* bonus */}
        <div className='text-white flex items-center space-x-3'>
          <div className='flex space-x-1'>
            <p className='font-extralight'>Bonus:</p>
            <p>10</p>
          </div>

          <img
            className='h-6 w-6 rounded-md'
            src='https://cdn3.vectorstock.com/i/1000x1000/01/62/light-blue-crystal-precious-gemstone-vector-22950162.jpg'
            alt='logo'
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
