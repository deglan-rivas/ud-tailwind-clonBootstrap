const ButtonGroup = () => {
  return (
    <div className="bg-gray-300 p-8">
      <p>La class peer al input es la clave para enlazar el estado del checkbox con label sin usar JS. Input debe estar antes. Notar que eslintrc.cjs del vite ya corrige el for por un htmlFor. También hay que separar cada uno en un div propio de input y label. Usar el flex o inline-block para alinear. El inline-block para el label final es solo para que el mb-2 haga efecto ez</p>
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
            className="border-l border-y border-blue-600 bg-white text-blue-600 px-4 py-2 hover:bg-blue-600 hover:text-white rounded-l peer-checked:bg-blue-600 peer-checked:text-white inline-block"
            htmlFor="c-left"
            >
            Left
          </label>
        </div>
        {/* <div className="inline-block"> */}
        <div>
          <input type="checkbox" className="peer hidden" id="c-middle" />
          <label
            className="border-y border-blue-600 bg-white text-blue-600 px-4 py-2 hover:bg-blue-600 hover:text-white peer-checked:bg-blue-600 peer-checked:text-white inline-block"
            htmlFor="c-middle"
            >
            Middle
          </label>
          </div>
        {/* <div className="inline-block"> */}
        <div>
          <input type="checkbox" className="peer hidden" id="c-right" />
          <label
            className="border-r border-y border-blue-600 bg-white text-blue-600 px-4 py-2 rounded-r hover:bg-blue-600 hover:text-white peer-checked:bg-blue-600 peer-checked:text-white inline-block"
            htmlFor="c-right"
            >
            Right
          </label>
        </div>
      </div>

      <div className="mb-2 flex">
        {/* <div className="inline-block"> */}
        <div>
          <input type="radio" className="peer hidden" id="r-left" name="radio-1"/>
          <label
            className="border-l border-y border-blue-600 bg-white text-blue-600 px-4 py-2 hover:bg-blue-600 hover:text-white rounded-l peer-checked:bg-blue-600 peer-checked:text-white inline-block"
            htmlFor="r-left"
            >
            Left
          </label>
        </div>
        {/* <div className="inline-block"> */}
        <div>
          <input type="radio" className="peer hidden" id="r-middle" name="radio-1"/>
          <label
            className="border-y border-blue-600 bg-white text-blue-600 px-4 py-2 hover:bg-blue-600 hover:text-white peer-checked:bg-blue-600 peer-checked:text-white inline-block"
            htmlFor="r-middle"
            >
            Middle
          </label>
          </div>
        {/* <div className="inline-block"> */}
        <div>
          <input type="radio" className="peer hidden" id="r-right" name="radio-1"/>
          <label
            className="border-r border-y border-blue-600 bg-white text-blue-600 px-4 py-2 rounded-r hover:bg-blue-600 hover:text-white peer-checked:bg-blue-600 peer-checked:text-white inline-block"
            htmlFor="r-right"
            >
            Right
          </label>
        </div>
      </div>

      <p>Agrupar input y label sin divs intermediarios ez usando el peer/x</p>
      <div className="mb-2 flex">
   
        <input type="radio" className="peer/left hidden" id="r2-left" name="radio-2"/>
        <label
          className="border-l border-y border-green-600 bg-white text-green-600 px-4 py-2 hover:bg-green-600 hover:text-white rounded-l peer-checked/left:bg-green-600 peer-checked/left:text-white inline-block"
          htmlFor="r2-left"
        >
          Left
        </label>
   
        <input type="radio" className="peer/middle hidden" id="r2-middle" name="radio-2"/>
        <label
          className="border-y border-green-600 bg-white text-green-600 px-4 py-2 hover:bg-green-600 hover:text-white peer-checked/middle:bg-green-600 peer-checked/middle:text-white inline-block"
          htmlFor="r2-middle"
        >
          Middle
        </label>
   
        <input type="radio" className="peer/right hidden" id="r2-right" name="radio-2"/>
        <label
          className="border-r border-y border-green-600 bg-white text-green-600 px-4 py-2 rounded-r hover:bg-green-600 hover:text-white peer-checked/right:bg-green-600 peer-checked/right:text-white inline-block"
          htmlFor="r2-right"
        >
          Right
        </label>
      </div>

      <div className="mb-2 flex">
   
        <input type="checkbox" className="peer/left hidden" id="c2-left"/>
        <label
          className="border-l border-y border-yellow-600 bg-white text-yellow-600 px-4 py-2 hover:bg-yellow-600 hover:text-white rounded-l peer-checked/left:bg-yellow-600 peer-checked/left:text-white inline-block"
          htmlFor="c2-left"
        >
          Left
        </label>
   
        <input type="checkbox" className="peer/middle hidden" id="c2-middle"/>
        <label
          className="border-y border-yellow-600 bg-white text-yellow-600 px-4 py-2 hover:bg-yellow-600 hover:text-white peer-checked/middle:bg-yellow-600 peer-checked/middle:text-white inline-block"
          htmlFor="c2-middle"
        >
          Middle
        </label>
   
        <input type="checkbox" className="peer/right hidden" id="c2-right"/>
        <label
          className="border-r border-y border-yellow-600 bg-white text-yellow-600 px-4 py-2 rounded-r hover:bg-yellow-600 hover:text-white peer-checked/right:bg-yellow-600 peer-checked/right:text-white inline-block"
          htmlFor="c2-right"
        >
          Right
        </label>
      </div>

      <div className="mb-2 flex">
   
        <input type="checkbox" className="peer/left hidden" id="c3-left"/>
        <label
          className="border-l border-y border-red-600 bg-white text-red-600 px-4 py-2 hover:bg-red-600 hover:text-white rounded-l peer-checked/left:bg-red-600 peer-checked/left:text-white inline-block"
          htmlFor="c3-left"
        >
          Left
        </label>
   
        <input type="checkbox" className="peer/middle hidden" id="c3-middle"/>
        <label
          className="border-y border-red-600 bg-white text-red-600 px-4 py-2 hover:bg-red-600 hover:text-white peer-checked/middle:bg-red-600 peer-checked/middle:text-white inline-block"
          htmlFor="c3-middle"
        >
          Middle
        </label>
   
        <input type="checkbox" className="peer/right hidden" id="c3-right"/>
        <label
          className="border-r border-y border-red-600 bg-white text-red-600 px-4 py-2 rounded-r hover:bg-red-600 hover:text-white peer-checked/right:bg-red-600 peer-checked/right:text-white inline-block"
          htmlFor="c3-right"
        >
          Right
        </label>
      </div>
    </div>
  )
}

export default ButtonGroup