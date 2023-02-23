import React from "react";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import Widgets from "./Widgets";

import TradersRank from "./TradersRank";
import Graphbox from "./Graphbox";

function HomeCard() {
  return (
    <div className='border w-[400px] h-[800px] rounded-3xl bg-[#240091] transform flex flex-col justify-between'>
      <div>
        <Header />
      </div>

      <div className='mt-2'>
        <Widgets />
      </div>

      {/* title */}

      {/* graphs */}
      <div className='flex-1'>
        <Graphbox />
      </div>

      {/* profile */}

      <div className='mt-0'>
        <TradersRank />
      </div>

      <div className='flex items-center w-full mt-[-2px] bg-white rounded-b-3xl'>
        <NavigationBar />
      </div>
    </div>
  );
}

export default HomeCard;
