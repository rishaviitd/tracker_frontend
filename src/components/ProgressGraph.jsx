export default function ProgressGraph({ row }) {
  return (
    <>
      <div
        className={`flex flex-col md:col-span-2 md:row-span-${row} bg-white shadow rounded-lg`}
      >
        <div className="px-6 py-5 font-semibold border-b border-gray-100">
          Progress graph
        </div>
        <div className="p-4 flex-grow">
          <div className="flex items-center justify-center h-full px-4 py-16 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
            Chart
          </div>
        </div>
      </div>
    </>
  );
}