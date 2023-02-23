import React from "react";

function NavItem({ Icon, title }) {
  return (
    <div className='flex items-center flex-col text-gray-400 hover:text-orange-500'>
      <Icon className='h-6 w-6 ' />
      <p className=''>{title}</p>
    </div>
  );
}

export default NavItem;
