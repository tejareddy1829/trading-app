import React from "react";
import Image from "next/image";
import { UserProfile } from "./UserIcon";

const traders = [
  { rank: 1, name: "James", amount: "930", rankedUp: true },
  { rank: 2, name: "Ema", amount: "900", rankedUp: false },
  { rank: 3, name: "Maizie", amount: "870", rankedUp: true },
  { rank: 4, name: "Humayra", amount: "790", rankedUp: false },
];

function TradersRank() {
  return (
    <div className=' bg-white space-y-1 rounded-t-xl'>
      {traders.map((trader) => {
        return (
          <div className='flex items-center space-x-2 justify-between p-2'>
            <div className='flex items-center space-x-4 justify-between p3'>
              <div>{trader.rank}.</div>
              <Image
                src={trader.rankedUp ? "/icons/green.png" : "/icons/down.png"}
                width={12}
                height={12}
                alt={"down"}
                className='mt-1'
              />
              <UserProfile userNo={trader.rank} />

              <div>{trader.name}</div>
            </div>

            <div className=' text-sm text-violet-600 p-2 text-center bg-gray-300 bg-opacity-50 rounded-full'>
              ${trader.amount}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TradersRank;
