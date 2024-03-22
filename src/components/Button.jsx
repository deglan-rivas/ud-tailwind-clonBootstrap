const Button = () => {
  return (
    <>
      <p>los button ya incluyen el cursor-pointer del hover</p>

      <div>
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
    </>
  )
}

export default Button