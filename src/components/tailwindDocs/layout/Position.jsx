/**
 * buenas explicaciones de gotazu dev y jonyl, keyquotes también y fue más completo pero vendió humo con padre relative xd fixed es para que se quede fixed con el scroll y sticky es un fixed, pero cuando no comienza desde el borde xd
 * 
 * los object fit position son similares al bg-image iguales practicamente xd, 
 * el overflow tiene auto por default, hidden para ocultar excesos y scroll en alguna direción para siempre mostrar la scrollbar
 */

const Position = () => {
  return (
    <div className="relative">
      <div className="bg-red-400 w-96 h-96 relative flex justify-center items-center top-0">
        <div>ga</div>
        <div className="w-8 h-8 rounded-full bg-yellow-400 absolute right-8 bottom-8 flex items-center justify-center">
          Raaa
        </div>
      </div>
      {/* <div className="bg-green-400 w-96 h-96 absolute bottom-8"> */}
      <div className="bg-green-400 w-96 h-96">
        ga
      </div>
      <div className="bg-blue-400 w-96 h-96">
        ga
      </div>
    </div>
  )
}

export default Position