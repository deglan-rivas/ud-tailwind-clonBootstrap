import Github from "../../icons/Github"
import Linkedin from "../../icons/Linkedin"
import X from "../../icons/X"

const PL33 = () => {

  return (
    <>
      <div className="bg-[url(https://media.istockphoto.com/id/1672317574/es/foto/pico-de-la-monta%C3%B1a-ama-dablam.jpg?s=2048x2048&w=is&k=20&c=L-WW_BHtMBZ7vMrl2TlYeGKW8lJyPfx1185dzo0-alA=)] bg.cover bg-center">
        <div className="bg-gradient-to-b from-green-300/80 via-blue-500/80 to-purple-600/80 h-screen flex flex-col justify-center items-center sm:flex-row">
          <div className="h-1/3 flex justify-center items-center p-2 w-full sm:order-2 sm:bg-transparent sm:w-64 sm:h-64 sm:p-0 sm:ml-2">
            <div className="bg-[url('https://avatars.githubusercontent.com/u/104169667?v=4')] bg-cover bg-center bg-cyan-800 bg-blend-overlay w-1/2 max-w-[21rem] h-[100%] border border-white  rounded-lg sm:w-full sm:rounded-full sm:shadow-2xl">
            </div>
          </div>
          <div className="text-center text-white mb-2 max-w-[21rem] sm:order-1 sm:text-left sm:bg-transparent">
            <p className="text-3xl font-medium tracking-tight text-green-300">
              Deglan Rivas
            </p>
            <p className="text-sm mb-2 uppercase text-green-200">
              FullStack Developer
            </p>
            <p className="mb-4 px-2 w-[10rem] border-b border-b-green-200 mx-auto sm:ml-0">

            </p>
            <p className="mb-2 text-base font-light tracking-tighter px-2 text-green-200 sm:px-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, animi a quae odit voluptas quasi minima amet repellat suscipit et excepturi similique dicta ad pariatur doloremque enim perspiciatis, molestias adipisci?
            </p>
            <div className="flex flex-col">
              <button className="text-violet-300 bg-gradient-to-l from-violet-400 to-violet-800 w-full py-2 order-1 sm:mb-2">
                Get in touch
              </button>
              {/* <div className="flex flex-row justify-evenly mb-2"> */}
              <div className="text-violet-400 flex flex-row justify-center space-x-2 mb-2 sm:order-2 sm:mb-[-2rem] sm:justify-start">
                <Github/>
                <Linkedin/>
                <X/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PL33