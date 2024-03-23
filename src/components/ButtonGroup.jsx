const ButtonGroup = () => {
  return (
    <div className="bg-gray-300 p-8">
      <div className="mb-2">
        <button 
          className="bg-blue-600 text-white rounded-l px-4 py-2 hover:bg-blue-700"
        >
          Left
        </button>
        <button 
          className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700"
        >
          Middle
        </button>
        <button 
          className="bg-blue-600 text-white rounded-r px-4 py-2 hover:bg-blue-700"
        >
          Right
        </button>
      </div>

      <div className="mb-2">
        <button 
          className="bg-red-600 text-white rounded-l px-4 py-2 hover:bg-red-700"
        >
          Left
        </button>
        <button 
          className="bg-red-600 text-white px-4 py-2 hover:bg-red-700"
        >
          Middle
        </button>
        <button 
          className="bg-red-600 text-white rounded-r px-4 py-2 hover:bg-red-700"
        >
          Right
        </button>
      </div>

      <div className="mb-2">
        <button 
          className="bg-green-600 text-white rounded-l px-4 py-2 hover:bg-green-700"
        >
          Left
        </button>
        <button 
          className="bg-green-600 text-white px-4 py-2 hover:bg-green-700"
        >
          Middle
        </button>
        <button 
          className="bg-green-600 text-white rounded-r px-4 py-2 hover:bg-green-700"
        >
          Right
        </button>
      </div>

      <div className="mb-2">
        <button 
          className="bg-red-600 text-white rounded-l px-4 py-2 hover:bg-red-700"
        >
          Left
        </button>
        <button 
          className="bg-yellow-500 text-white px-4 py-2 hover:bg-yellow-600"
        >
          Middle
        </button>
        <button 
          className="bg-green-600 text-white rounded-r px-4 py-2 hover:bg-green-700"
        >
          Right
        </button>
      </div>

      <div className="mb-2">
        <button
          className="border border-blue-600 bg-white text-blue-600 px-4 py-2 rounded-l hover:bg-blue-600 hover:text-white"
        >
          Left
        </button>
        <button
          className="border-y border-blue-600 bg-white text-blue-600 px-4 py-2 hover:bg-blue-600 hover:text-white"
        >
          Middle
        </button>
        <button
          className="border border-blue-600 bg-white text-blue-600 px-4 py-2 rounded-r hover:bg-blue-600 hover:text-white"
        >
          Right
        </button>
      </div>

      <div className="mb-2">
        <button
          className="border-l border-y border-blue-600 bg-white text-blue-600 px-4 py-2 rounded-l hover:bg-blue-600 hover:text-white"
        >
          Left
        </button>
        <button
          className="border-y border-blue-600 bg-white text-blue-600 px-4 py-2 hover:bg-blue-600 hover:text-white"
        >
          Middle
        </button>
        <button
          className="border-r border-y border-blue-600 bg-white text-blue-600 px-4 py-2 rounded-r hover:bg-blue-600 hover:text-white"
        >
          Right
        </button>
      </div>
    </div>
  )
}

export default ButtonGroup