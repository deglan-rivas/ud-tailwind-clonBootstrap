/**
 * buenas explicaciones de gotazu dev y jonyl, keyquotes también y fue más completo pero vendió humo con padre relative xd fixed es para que se quede fixed con el scroll y sticky es un fixed, pero cuando no comienza desde el borde xd
 * 
 */

const Position2 = () => {
  return (
    <div className="relative">
      <div className="bg-red-400 w-96 h-96 relative flex justify-center items-center top-60 left-60">
        <div>ga</div>
        <div className="w-8 h-8 rounded-full bg-yellow-400 absolute right-8 bottom-8 flex items-center justify-center">
          Raaa
        </div>
      </div>
      {/* <div className="bg-green-400 w-96 h-96 absolute bottom-8"> */}
      <div className="bg-green-400 w-8 h-8 fixed right-0 rounded-l-md flex items-center justify-center">
        ga
      </div>
      <div className="bg-green-400 w-96 h-96">
        ga
      </div>
      <div className="bg-orange-400 w-8 h-8 sticky top-0">
        ga
      </div>
      <div className="bg-blue-400 w-96 h-96">
        ga
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

export default Position2