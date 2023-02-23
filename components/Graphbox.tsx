import React from "react";
import { UserProfile } from "./UserIcon";

function Graphbox() {
  return (
    <div className='flex items-center flex-col justify-between h-full'>
      <div className=' text-white'>
        <h1 className='pt-4 font-semibold text-4xl'>Best Traders!</h1>
      </div>

      <div className='flex items-end align-middle '>
        <div className='flex flex-col items-center'>
          <div className='mb-2 ml-1'>
            <UserProfile userNo={1} />
          </div>

          <div className='prize-one'>
            <div className='flex flex-col ml-2'>
              <p>Tom</p>
              <p className='text-lg font-bold'>$1,202</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <div className='mb-2 ml-1'>
            <UserProfile userNo={2} />
          </div>

          <div className='prize-two '>
            <div className='flex flex-col mr-1'>
              <p>Natalie</p>
              <p className='text-lg font-bold'>$1,242</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <div className='-mb-2 ml-1'>
            <UserProfile userNo={3} />
          </div>

          <div className='prize-three'>
            <div className='flex flex-col ml-2'>
              <p>Nina</p>
              <p className='text-lg font-bold'>$1,112</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graphbox;
