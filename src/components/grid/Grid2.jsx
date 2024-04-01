const Grid2 = () => {
  return (
    <div>
      <ul>
        <li>El grid se utiliza más de forma artística para galerías sobretodo. Ambos son útiles y sencillos las verdad xd</li>
        <li>Se puede forzar las columnas y filas del contenedor, en los demás elemntos tendrían prioridad y el espacio restante se distribuiría entre los que sí entran en las casillas</li>
        <li>notar que el propio algoritmo se reubica, es decir si al 6 le asignamos row-span-2 al no tener otra casilla a la derecha saltaría al espacio 7 y la numeración seguiría en orden</li>
        <li>También notar que la numeración es de izq a der y de arriba a abajo</li>
      </ul>

      <div className="bg-red-400 mb-4 text-white h-[700px] grid grid-cols-3 gap-2">
        <div className="bg-blue-900">1</div>
        <div className="bg-blue-800">2</div>
        <div className="bg-blue-700 col-span-2">3</div>
        <div className="bg-blue-600 row-span-3 row-start-1 col-start-3">4</div>
        <div className="bg-blue-500">5</div>
        <div className="bg-blue-400">6</div>
        <div className="bg-blue-300">7</div>
        <div className="bg-blue-200">8</div>
        <div className="bg-blue-100 text-black">9</div>
      </div>
    </div>
  )
}

export default Grid2