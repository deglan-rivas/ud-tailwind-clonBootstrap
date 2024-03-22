const Badge = () => {
  return (
    <>
      <p>Inline-block para evitar overflow de box model</p>

      <div className="text-white bg-purple-700 rounded-md px-2 py-2 font-normal w-40 text-center mb-2">
        <button>Notifications <span className=" py-1 px-2 bg-gray-500 rounded-md text-sm">4</span></button>
      </div>

      <button className="bg-purple-700 text-white rounded-md px-3 py-2">
        Notifications <span className="bg-gray-500 py-1 px-2 rounded-md text-sm">4</span>
      </button>


      <h1 className="text-6xl mb-4">
        Example Heading
        <span className="bg-gray-500 text-white font-bold rounded-md py-2 px-4 inline-block ml-1">
          New
        </span>
      </h1>

      <h1 className="text-5xl mb-4">
        Example Heading
        <span className="bg-gray-500 text-white font-bold rounded-md py-2 px-4 inline-block ml-1">
          New
        </span>
      </h1>

      <h1 className="text-4xl mb-4">
        Example Heading
        <span className="bg-gray-500 text-white font-bold rounded-md py-2 px-4 inline-block ml-1">
          New
        </span>
      </h1>

      <h1 className="text-3xl mb-4">
        Example Heading
        <span className="bg-gray-500 text-white font-bold rounded-md py-1 px-4 inline-block ml-1">
          New
        </span>
      </h1>

      <h1 className="text-2xl mb-4">
        Example Heading
        <span className="bg-gray-500 text-white font-bold rounded-md py-1 px-4 inline-block ml-1">
          New
        </span>
      </h1>

      <h1 className="text-xl mb-4">
        Example Heading
        <span className="bg-gray-500 text-white font-bold rounded-md py-1 px-3 inline-block ml-1">
          New
        </span>
      </h1>

      <h1 className="text-lg mb-4">
        Example Heading
        <span className="bg-gray-500 text-white font-bold rounded-md py-1 px-3 inline-block ml-1">
          New
        </span>
      </h1>

      <h1 className="text-sm mb-4">
        Example Heading
        <span className="bg-gray-500 text-white font-bold rounded-md py-1 px-2 inline-block ml-1">
          New
        </span>
      </h1>

      <h1 className="text-xs mb-4">
        Example Heading
        <span className="bg-gray-500 text-white font-bold rounded-md py-1 px-2 inline-block ml-1">
          New
        </span>
      </h1>
    </>
  )
}

export default Badge