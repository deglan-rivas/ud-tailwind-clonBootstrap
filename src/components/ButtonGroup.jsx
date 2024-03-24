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

      <p>input group</p>
      <div className="mb-2">
        <p className="inline-block pr-2">Elemento extra</p>
        <div className="inline-block">
          <div className="flex">
          {/* <div className="flex bg-red-600"> */}
            <label 
              htmlFor="bg-group"
              className="bg-gray-100 text-blue-500 border border-blue-500 border-r-0 rounded-l-md px-4 py-2"
            >
              @
            </label>
            <input 
              type="text"
              id="bg-group"
              className="px-4 py-2 border placeholder:text-blue-500 border-blue-500 rounded-r-md focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Input group example"
              />
          </div>
        </div>
      </div>

      <div className="inline-block">
        <div className="flex flex-col">
          <input 
            type="radio" 
            name="vr" 
            id="vr-1"
            className="peer/top hidden"
          />
          <label 
            htmlFor="vr-1"
            className="px-4 py-2 bg-white text-red-600 peer-checked/top:bg-red-600 peer-checked/top:text-white border border-red-600 rounded-t-md"  
          >
            Radio 1
          </label>
          <input 
            type="radio" 
            name="vr" 
            id="vr-2"
            className="peer/middle hidden"
          />
          <label 
            htmlFor="vr-2"
            className="px-4 py-2 bg-white text-red-600 peer-checked/middle:bg-red-600 peer-checked/middle:text-white border-x border-red-600"  
          >
            Radio 2
          </label>
          <input 
            type="radio" 
            name="vr" 
            id="vr-3"
            className="peer/bottom hidden"
          />
          <label 
            htmlFor="vr-3"
            className="px-4 py-2 bg-white text-red-600 peer-checked/bottom:bg-red-600 peer-checked/bottom:text-white border border-red-600 rounded-b-md"  
          >
            Radio 3
          </label>
        </div>
      </div>

      <p>Un párrafo que funciona como separador al ser block incluso si está vacío</p>
      {/* <p></p> */}
      {/* <div> */}
        <div className="inline-block">
          <div className="flex flex-col">
            <input 
              type="checkbox" 
              id="vc-1"
              className="peer/top hidden"
            />
            <label 
              htmlFor="vc-1"
              className="px-4 py-2 bg-white text-blue-600 peer-checked/top:bg-blue-600 peer-checked/top:text-white border border-blue-600 rounded-t-md"  
            >
              Checkbox 1
            </label>
            <input 
              type="checkbox" 
              id="vc-2"
              className="peer/middle hidden"
            />
            <label 
              htmlFor="vc-2"
              className="px-4 py-2 bg-white text-blue-600 peer-checked/middle:bg-blue-600 peer-checked/middle:text-white border-x border-blue-600"  
            >
              Checkbox 2
            </label>
            <input 
              type="checkbox" 
              id="vc-3"
              className="peer/bottom hidden"
            />
            <label 
              htmlFor="vc-3"
              className="px-4 py-2 bg-white text-blue-600 peer-checked/bottom:bg-blue-600 peer-checked/bottom:text-white border border-blue-600 rounded-b-md"  
            >
              Checkbox 3
            </label>
          </div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default ButtonGroup