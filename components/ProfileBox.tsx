import React from "react";
import Image from "next/image";

function ProfileBox() {
  return (
    <div className=' bg-white space-y-1 rounded-t-xl'>
      <div className='flex items-center space-x-2 justify-between p-2'>
        <div className='flex items-center space-x-4 justify-between p3'>
          <p>.4</p>
          <Image
            src={"/icons/green.png"}
            width={12}
            height={12}
            alt={"down"}
            className='mt-1'
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcg5OV7m4Ojt-6P7o0JwzgBcZosZwisJw0A&usqp=CAU'
            alt='profile'
          />

          <p>James</p>
        </div>

        <p className=' text-sm text-violet-600 p-2 text-center bg-gray-300 bg-opacity-50 rounded-full'>
          $930
        </p>
      </div>

      {/* profile-2 */}
      <div className='flex items-center space-x-2 justify-between p-2'>
        <div className='flex items-center space-x-4 justify-between p3'>
          <p>.5</p>
          <Image
            src={"/icons/down.png"}
            width={12}
            height={12}
            alt={"down"}
            className='mt-1'
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://wallpapers.com/images/hd/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf.jpg'
            alt='profile'
          />

          <p>Alex</p>
        </div>

        <p className=' text-sm text-violet-600 p-2 text-center bg-gray-300 bg-opacity-50 rounded-full'>
          $900
        </p>
      </div>

      {/* profile-3 */}
      <div className='flex items-center space-x-2 justify-between p-2'>
        <div className='flex items-center space-x-4 justify-between p3'>
          <p>.6</p>
          <Image
            src={"/icons/green.png"}
            width={12}
            height={12}
            alt={"down"}
            className='mt-1'
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'
            alt='profile'
          />

          <p>mike</p>
        </div>

        <p className=' text-sm text-violet-600 p-2 text-center bg-gray-300 bg-opacity-50 rounded-full'>
          $870
        </p>
      </div>

      {/* profile-4 */}
      <div className='flex items-center space-x-2 justify-between p-2'>
        <div className='flex items-center space-x-4 justify-between p3'>
          <p>.6</p>
          <Image
            src={"/icons/green.png"}
            width={12}
            height={12}
            alt={"down"}
            className='mt-1'
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg'
            alt='profile'
          />

          <p>Emma</p>
        </div>

        <p className='text-sm text-violet-600 p-2 text-center bg-gray-300 bg-opacity-50 rounded-full'>
          $990
        </p>
      </div>
    </div>
  );
}

export default ProfileBox;
