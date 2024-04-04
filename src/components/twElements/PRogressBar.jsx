const ProgressBar = () => {
  return (
    <div className="p-8 container mx-auto my-4 space-y-4">
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 overflow-hidden">
        <div className="bg-blue-600 h-2.5 rounded-full w-1/2"></div>
      </div>

      <div className="w-full bg-red-200 rounded-full h-4 dark:bg-gray-700 overflow-hidden">
        {/* <div className="bg-violet-600 h-4 rounded-full w-[30%]"></div> */}
        <div className="bg-violet-600 h-4 rounded-full w-[80%]"></div>
      </div>
    </div>  
  )
}

export default ProgressBar