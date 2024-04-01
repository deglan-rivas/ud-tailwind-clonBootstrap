const Grid3 = () => {
  return (
    <div>
      <div className="bg-gray-300 mb-4 text-white h-[700px] grid grid-cols-3 gap-2">
        <div className="bg-[url('https://picsum.photos/200/200')] bg-cover bg-center bg-blue-900">1</div>
        <div className="bg-[url('https://picsum.photos/200/220')] bg-cover bg-center bg-blue-800">2</div>
        <div className="bg-[url('https://picsum.photos/200/400')] bg-cover bg-center bg-blue-700 row-span-2">3</div>
        <div className="bg-[url('https://picsum.photos/200/420')] bg-cover bg-center bg-blue-600 row-span-2">4</div>
        <div className="bg-[url('https://picsum.photos/200/210')] bg-cover bg-center bg-blue-500">5</div>
        <div className="bg-[url('https://picsum.photos/200/600')] bg-cover bg-center bg-blue-400 row-span-3">6</div>
        <div className="bg-[url('https://picsum.photos/200/990')] bg-cover bg-center bg-blue-300 row-span-5">7</div>
        <div className="bg-[url('https://picsum.photos/200/410')] bg-cover bg-center bg-blue-200 row-span-2">8</div>
        <div className="bg-[url('https://picsum.photos/200/205')] bg-cover bg-center bg-blue-100 row-span-2 col-span-2 text-black">9</div>
      </div>
    </div>
  )
}

export default Grid3