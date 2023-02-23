export default function ProgressLine({
  noOfSegments,
  completedSegments,
  color = "bg-white",
}) {
  const segmentsArray = new Array(noOfSegments).fill("_");

  return (
    <div className='flex w-full p-4'>
      {segmentsArray.map((segmment, index) => (
        <div
          className={`${
            completedSegments >= index + 1 ? color : "bg-gray-400"
          } h-2 flex-1 mr-2 rounded-full`}
        >
          {" "}
        </div>
      ))}
    </div>
  );
}
