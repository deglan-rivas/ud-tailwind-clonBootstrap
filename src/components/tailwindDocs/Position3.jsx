/**
 * buenas explicaciones de gotazu dev y jonyl, keyquotes también y fue más completo pero vendió humo con padre relative xd fixed es para que se quede fixed con el scroll y sticky es un fixed, pero cuando no comienza desde el borde xd
 * 
 */

const Position3 = () => {
  return (
    <div className="relative container mx-auto">
      <div className="bg-green-400 w-8 h-8 fixed right-0 rounded-l-md flex items-center justify-center">
        ga
      </div>
      <div className="bg-green-400 w-96 h-96">
        ga
      </div>
      <div className="flex justify-end absolute w-full z-10">
        {/* <div className="bg-orange-400 w-8 h-8 sticky top-0 z-10"> */}
          ga
        {/* </div> */}
      </div>
      <div className="bg-orange-400 w-8 h-8 sticky top-0">
        ga
      </div>
      <div className="bg-blue-400 w-96 h-96 relative">
        <div className="w-48 h-48 bg-violet-400 absolute top-0 left-0 z-20">
          ga1
        </div>
        <div className="w-48 h-48 bg-red-400 absolute top-24 left-24 z-10">
          ga2
        </div>
        {/* <div className="w-48 h-48 bg-gray-400 absolute top-48 left-1/2 z-[25]"> */}
        <div className="w-48 h-48 bg-gray-400 absolute top-48 left-1/2 z-40">
          ga3
        </div>
        <div className="w-12 h-12 bg-green-400 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-70 z-30">
          ga4
        </div>
      </div>
      <div className="bg-green-400 w-96 h-96">
        ga
      </div>
      <div className="bg-blue-400 w-96 h-96">
        ga
      </div>
    </div>
  )
}

export default Position3