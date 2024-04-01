const Grid4 = () => {
  return (
    <div>
      <div className="bg-red-400 h-[700px] grid grid-cols-6 grid-rows-6 gap-2">
        <div className="bg-blue-800 col-span-full">1</div>
        <div className="bg-blue-700 row-span-4">2</div>
        <div className="bg-blue-600 row-span-4 col-span-4">3</div>
        <div className="bg-blue-500 row-span-4">4</div>
        <div className="bg-blue-400 col-span-full">5</div>
      </div>
    </div>
  )
}

export default Grid4