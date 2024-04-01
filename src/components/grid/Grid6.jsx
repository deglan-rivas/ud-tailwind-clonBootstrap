const Grid6 = () => {
  return (
    <div>
      <div className="bg-red-400 h-[700px] grid grid-cols-[20fr_65fr_15fr] grid-rows-[80px_1fr_70px] gap-2 mb-4">
        <div className="bg-blue-800 col-span-2">1</div>
        <div className="bg-blue-700 row-span-2">2</div>
        <div className="bg-blue-600 col-span-2">3</div>
        <div className="bg-blue-500 row-start-1 col-start-3">4</div>
        <div className="bg-blue-400 col-span-2">5</div>
      </div>

      <div className="bg-white h-[700px] grid grid-cols-12 grid-rows-6 gap-2 mb-4">
        <div className="bg-pink-400 col-span-12">1</div>
        <div className="bg-pink-400 col-span-6">2</div>
        <div className="bg-pink-400 col-span-6">2</div>
        <div className="bg-pink-400 col-span-4">3</div>
        <div className="bg-pink-400 col-span-4">3</div>
        <div className="bg-pink-400 col-span-4">3</div>
        <div className="bg-pink-400 col-span-3">4</div>
        <div className="bg-pink-400 col-span-3">4</div>
        <div className="bg-pink-400 col-span-3">4</div>
        <div className="bg-pink-400 col-span-3">4</div>
        <div className="bg-pink-400 col-span-2">5</div>
        <div className="bg-pink-400 col-span-2">5</div>
        <div className="bg-pink-400 col-span-2">5</div>
        <div className="bg-pink-400 col-span-2">5</div>
        <div className="bg-pink-400 col-span-2">5</div>
        <div className="bg-pink-400 col-span-2">5</div>
        <div className="bg-pink-400 col-span-1">6</div>
        <div className="bg-pink-400 col-span-1">6</div>
        <div className="bg-pink-400 col-span-1">6</div>
        <div className="bg-pink-400 col-span-1">6</div>
        <div className="bg-pink-400 col-span-1">6</div>
        <div className="bg-pink-400 col-span-1">6</div>
        <div className="bg-pink-400 col-span-1">6</div>
        <div className="bg-pink-400 col-span-1">6</div>
        <div className="bg-pink-400 col-span-1">6</div>
        <div className="bg-pink-400 col-span-1">6</div>
        <div className="bg-pink-400 col-span-1">6</div>
        <div className="bg-pink-400 col-span-1">6</div>
      </div>
    </div>
  )
}

export default Grid6