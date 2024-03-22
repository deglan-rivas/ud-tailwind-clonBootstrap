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

      <div className="p-4">
        <span className="bg-blue-500 text-white font-bold rounded-md py-1 px-3 text-xs mr-2">
          Primary
        </span>

        <span className="bg-gray-500 text-white font-bold rounded-md py-1 px-3 text-xs mr-2">
          Secondary
        </span>

        <span className="bg-green-500 text-white font-bold rounded-md py-1 px-3 text-xs mr-2">
          Success
        </span>

        <span className="bg-red-500 text-white font-bold rounded-md py-1 px-3 text-xs mr-2">
          Danger
        </span>

        <span className="bg-yellow-500 text-black font-bold rounded-md py-1 px-3 text-xs mr-2">
          Warning
        </span>

        <span className="bg-green-500 text-black font-bold rounded-md py-1 px-3 text-xs mr-2">
          Info
        </span>

        <span className="bg-white text-black font-bold rounded-md py-1 px-3 text-xs mr-2">
          Light
        </span>

        <span className="bg-black text-white font-bold rounded-md py-1 px-3 text-xs mr-2">
          Dark
        </span>
      </div>

      <div className="p-4">
        <span className="bg-blue-200 text-white font-bold rounded-md py-1 px-3 text-xs mr-2">
          Primary
        </span>

        <span className="bg-gray-200 text-white font-bold rounded-md py-1 px-3 text-xs mr-2">
          Secondary
        </span>

        <span className="bg-green-200 text-white font-bold rounded-md py-1 px-3 text-xs mr-2">
          Success
        </span>

        <span className="bg-red-200 text-white font-bold rounded-md py-1 px-3 text-xs mr-2">
          Danger
        </span>

        <span className="bg-yellow-300 text-gray-300 font-bold rounded-md py-1 px-3 text-xs mr-2">
          Warning
        </span>

        <span className="bg-green-200 text-gray-400 font-bold rounded-md py-1 px-3 text-xs mr-2">
          Info
        </span>

        <span className="bg-white text-gray-300 font-bold rounded-md py-1 px-3 text-xs mr-2">
          Light
        </span>

        <span className="bg-gray-300 text-white font-bold rounded-md py-1 px-3 text-xs mr-2">
          Dark
        </span>
      </div>

      <div className="p-4">
        <span className="bg-blue-500 text-white font-bold rounded-full py-1 px-3 text-xs mr-2">
          Primary
        </span>

        <span className="bg-gray-500 text-white font-bold rounded-full py-1 px-3 text-xs mr-2">
          Secondary
        </span>

        <span className="bg-green-500 text-white font-bold rounded-full py-1 px-3 text-xs mr-2">
          Success
        </span>

        <span className="bg-red-500 text-white font-bold rounded-full py-1 px-3 text-xs mr-2">
          Danger
        </span>

        <span className="bg-yellow-500 text-black font-bold rounded-full py-1 px-3 text-xs mr-2">
          Warning
        </span>

        <span className="bg-green-500 text-black font-bold rounded-full py-1 px-3 text-xs mr-2">
          Info
        </span>

        <span className="bg-white text-black font-bold rounded-full py-1 px-3 text-xs mr-2">
          Light
        </span>

        <span className="bg-black text-white font-bold rounded-full py-1 px-3 text-xs mr-2">
          Dark
        </span>
      </div>

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