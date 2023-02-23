import React from "react";
import ContentBox from "./ContentBox";

import Header from "./Header";
import NavigationBar from "./NavigationBar";

function ClassesCard() {
  return (
    // header
    <div className='border w-[400px] h-[800px] rounded-3xl bg-[#240091] transform'>
      <div>
        <Header />
      </div>

      {/* page name */}
      <div className=' text-white'>
        <h1 className='pl-7 pt-4 font-semibold text-4xl'>Classes</h1>
      </div>

      {/* contentbox */}
      <div>
        <ContentBox />
      </div>

      {/* navigation */}
      <div className='flex items-center w-full  bg-white fixed bottom-0 rounded-b-3xl'>
        <NavigationBar />
      </div>
    </div>
  );
}

export default ClassesCard;
