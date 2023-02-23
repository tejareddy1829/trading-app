export const UserProfile = ({ userNo }) => {
  return (
    <img
      className='h-12 w-12 rounded-full p-[2.5px] border-white-500 border-2'
      src={`https://source.unsplash.com/random/${userNo || 1}`}
      alt='profile'
    />
  );
};
