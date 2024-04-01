const Grid5 = () => {
  return (
    <div>
      <div className="bg-red-400 h-[700px] grid grid-cols-[20fr_65fr_15fr] grid-rows-[80px_1fr_70px] gap-2 mb-4">
        <div className="bg-blue-800 col-span-full">1</div>
        <div className="bg-blue-700 row-span-2">2</div>
        <div className="bg-blue-600">3</div>
        <div className="bg-blue-500">4</div>
        <div className="bg-blue-400 col-span-2">5</div>
      </div>
    </div>
  )
}

export default Grid5