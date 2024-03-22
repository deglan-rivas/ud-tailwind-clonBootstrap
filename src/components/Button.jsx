const Button = () => {
  return (
    <>
      <p>los button ya incluyen el cursor-pointer del hover</p>

      <div className="mb-2">
        <button className="bg-blue-500 text-white rounded-md px-2 py-1 mr-2 hover:bg-blue-600">
          Primary
        </button>

        <button className="bg-gray-500 text-white rounded-md px-2 py-1 mr-2  hover:bg-gray-600">
          Secondary
        </button>

        <button className="bg-green-600 text-white rounded-md px-2 py-1 mr-2 hover:bg-green-700">
          Success
        </button>

        <button className="bg-red-600 text-white rounded-md px-2 py-1 mr-2 hover:bg-red-700">
          Danger
        </button>

        <button className="bg-yellow-600 text-black rounded-md px-2 py-1 mr-2 hover:bg-yellow-700">
          Warning
        </button>

        <button className="bg-cyan-500 text-black rounded-md px-2 py-1 mr-2 hover:bg-cyan-600">
          Info
        </button>

        <button className="bg-white text-black border border-black rounded-md px-2 py-1 mr-2 hover:bg-gray-200">
          Light
        </button>

        <button className="bg-black text-white border border-white rounded-md px-2 py-1 mr-2 hover:bg-gray-800">
          Dark
        </button>
      </div>

      <div>
        <button className="text-blue-500 border border-blue-500 rounded-md px-2 py-1 mr-2 hover:bg-blue-500 hover:text-white">
          Primary
        </button>

        <button className="text-gray-500 border border-gray-500 rounded-md px-2 py-1 mr-2 hover:bg-gray-500 hover:text-white">
          Secondary
        </button>

        <button className="text-green-500 border border-green-500 rounded-md px-2 py-1 mr-2 hover:bg-green-500 hover:text-white">
          Success
        </button>

        <button className="text-red-500 border border-red-500 rounded-md px-2 py-1 mr-2 hover:bg-red-500 hover:text-white">
          Danger
        </button>

        <button className="text-yellow-500 border border-yellow-500 rounded-md px-2 py-1 mr-2 hover:bg-yellow-500 hover:text-white">
          Warning
        </button>

        <button className="text-cyan-500 border border-cyan-500 rounded-md px-2 py-1 mr-2 hover:bg-cyan-500 hover:text-white">
          Info
        </button>

        <button className="text-black border border-black rounded-md px-2 py-1 mr-2 hover:bg-black hover:text-white">
          Light
        </button>

        <button className="text-white border border-white rounded-md px-2 py-1 mr-2 hover:bg-black hover:text-white">
          Dark
        </button>
      </div>
    </>
  )
}

export default Button