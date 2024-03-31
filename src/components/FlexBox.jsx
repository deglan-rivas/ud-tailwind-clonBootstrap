const FlexBox = () => {
  return (
    <>
      <p className="mb-4">flex tiene una dirección principak, por defecto ocupa todo el espacio, pero al añadir la dirección secundaria solo toma lo necesario</p>
      <div className="p-8 bg-red-500 mb-4">
        <div className="bg-green-500 w-[700px] h-[500px] flex flex-col justify-center items-center">
          <p className="bg-blue-500">
            Párrafo de prueba
          </p>
          <p className="bg-yellow-500">Párrafo de prueba</p>
        </div>
      </div>  

      <p className="mb-4">notar que se puede el w-full o h-full en  lugar del flex-1. EL flex también centra el contenido y pseudoelementos</p>
      {/* <div className="bg-gray-200 w-80 h-[700px] p-8 flex flex-col">
        <div className="bg-green-500 h-24 p-4 flex flex-row justify-between items-center">
          <div className="py-2 px-1 bg-gray-200">
            Icono
          </div>
          <div className="py-2 px-1 bg-gray-200">
            Menu
          </div>
        </div> */}
      <div className="bg-gray-200 w-80 h-[700px] p-8 flex flex-col">
        <div className="bg-green-500 p-4 flex flex-row justify-between items-center">
          <div className="h-12 w-12 py-2 px-1 bg-gray-200 flex items-center justify-center">
            Icono
          </div>
          <div className="h-12 w-12 py-2 px-1 bg-gray-200 flex items-center justify-center">
            Menu
          </div>
        </div>

        <div className="bg-violet-500 flex-1">
          .
        </div>
        <div className="flex flex-row">
          <div className="bg-red-800 flex-1 text-white flex justify-center items-center p-2">1</div>
          <div className="bg-red-700 flex-1 text-white flex justify-center items-center p-2">2</div>
          <div className="bg-red-600 flex-1 text-white flex justify-center items-center p-2">3</div>
          <div className="bg-red-500 flex-1 text-white flex justify-center items-center p-2">4</div>
          <div className="bg-red-400 flex-1 text-white flex justify-center items-center p-2">5</div>
        </div>
      </div>
    </>
  )
}

export default FlexBox