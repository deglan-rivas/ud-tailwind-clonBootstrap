const ButtonGroup = () => {
  return (
    <div className="bg-gray-300 p-8">
      <p>La class peer al input es la clave para enlazar el estado del checkbox con label sin usar JS. Input debe estar antes. Notar que eslintrc.cjs del vite ya corrige el for por un htmlFor. También hay que separar cada uno en un div propio de input y label. Usar el flex o inline-block para alinear</p>
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

      <div className="mb-2 flex">
        {/* <div className="inline-block"> */}
        <div>
          <input type="checkbox" className="peer hidden" id="c-left" />
          <label
            className="border-l border-y border-blue-600 bg-white text-blue-600 px-4 py-2 rounded-l peer-checked:bg-blue-600 peer-checked:text-white"
            htmlFor="c-left"
            >
            Left
          </label>
        </div>
        {/* <div className="inline-block"> */}
        <div>
          <input type="checkbox" className="peer hidden" id="c-middle" />
          <label
            className="border-y border-blue-600 bg-white text-blue-600 px-4 py-2 hover:bg-blue-600 hover:text-white peer-checked:bg-blue-600 peer-checked:text-white"
            htmlFor="c-middle"
            >
            Middle
          </label>
          </div>
        {/* <div className="inline-block"> */}
        <div>
          <input type="checkbox" className="peer hidden" id="c-right" />
          <label
            className="border-r border-y border-blue-600 bg-white text-blue-600 px-4 py-2 rounded-r hover:bg-blue-600 hover:text-white peer-checked:bg-blue-600 peer-checked:text-white"
            htmlFor="c-right"
            >
            Right
          </label>
        </div>
      </div>
    </div>
  )
}

export default ButtonGroup