const Transition = () => {
  return (
    <div className="container mx-auto bg-gray-200">
      <img src="https://picsum.photos/100" alt="test" className="scale-[10%] rotate-180 hover:scale-100 hover:rotate-0 transition-transform delay-100 ease-in-out duration-1000"/>
      <div className="group">
        <img src="https://picsum.photos/100" alt="test" className="scale-[10%] rotate-180 group-hover:scale-100 group-hover:rotate-0 transition-transform delay-100 ease-in-out duration-1000"/>
      </div>
      <span>el img es block en tailwind :o creo que en css había que formatearlo incluso usando normalize.css xd</span>
      <p>el group-hover y group- otros pseudoelementos como focus, active o target también es útil</p>
      <div className="w-48 px-2 py-1 text-center text-white rounded-md  bg-blue-500 transition-all duration-2000 delay-1000 hover:bg-yellow-500 hover:text-green-600">
        Hover me sin bg-image
      </div>
      <div className="px-2 py-1 bg-yellow-500 w-1/2 text-center group">
        <div className="border-b-2 border-transparent inline-block group-hover:border-red-500 transition-[border-color] delay-500 duration-[3000ms] ease-in-out">
        {/* <div className="border-b-2 border-transparent inline-block group-hover:border-red-500 transition-colors delay-500 duration-1000" style={{transitionProperty: 'border'}}> */}
          Hover me with underline
        </div>
      </div>
      <div className="px-2 py-1 bg-yellow-500 w-1/2 group h-12">
        <div className="inline-block bg-blue-400 text-white px-2 py-1 opacity-0 group-hover:opacity-100 transition delay-500 duration-[3000ms] ease-in-out ">
          Hover yellow box to show another button
        </div>
        <span>ga</span>
      </div>
      <div className="px-2 py-1 bg-yellow-500 w-1/2 group h-12 relative">
        <div className="inline-block bg-blue-400 text-white px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity delay-500 duration-[3000ms] ease-in-out absolute top-full">
          Hover yellow box to show another button
        </div>
        <span>ga</span>
      </div>
      <p>it will appear over me</p>
      <div className="bg-green-400 group">
        <p className="inline-block">ga</p>
        <div className="h-12 group-hover:h-24 group-hover:bg-red-400 transition-[background-color, height] delay-500 ease-in-out duration-[500ms]">
          ra
        </div>
      </div>
    </div>
  )
}

export default Transition