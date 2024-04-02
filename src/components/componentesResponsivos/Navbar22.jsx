import Bootstrap from "../../icons/Bootstrap"
import Menu from "../../icons/Menu"

const NavBar22 = () => {
  return (
    <div className="bg-gray-200 ">
      <div className="mx-auto container max-w-3xl p-4 grid grid-cols-[1fr,20%] mb-4 sm:grid-cols-[20%,1fr]">
        {/* <div className=""> */}
          <div className="flex items-center">
            <Bootstrap/>
          </div>
          {/* <div className="bg-yellow-400 place-self-end"> */}
          {/* <div className="bg-yellow-400 ml-auto"> */}
          {/* <div className="bg-yellow-400 flex justify-end"> */}
          <input 
            type="checkbox" 
            name="" 
            id="menu" 
            className="hidden peer"
          />
          <label 
            className="peer-checked:ring rounded-md place-self-end sm:hidden"
            htmlFor="menu"
          >
            <Menu />
          </label>
            {/* <Menu/> */}
          {/* </div> */}
          {/* <div className="col-span-2 py-2 space-y-2 hidden peer-checked:block sm:col-span-1 sm: block"> */}
          <div className="col-span-2 py-2 space-y-2 peer-checked:block hidden sm:col-span-1 sm:flex sm:space-x-2 sm:space-y-0 sm:justify-end sm:peer-checked:flex">
            <p>Home</p>
            <p>Features</p>
            <p>Pricing</p>
          </div>
        {/* </div> */}
      </div>
      <div className="hidden sm:block container mx-auto max-w-3xl">
        <p>que error más loco el de arriba: solo por colocar el hidden antes del peer-checked:block :o</p>
        <p>tmr había escrito sm: block en lugar de sm:block, no me di cuenta del espacio, porque justo sucedía antes del salto de línea de vscode: me falló el alt + z de vscode v':</p>
        <p>nota: como buena práctica está ocultar la barra lateral con ctrl + b y organizar las clases con saltos de línea así o de algún modo parecido 
        </p>
        <p>bg</p>
        <p>box model</p>
        <p>text</p>
        <p>pseudoelementos</p>
        <p>media queries - repetir el orden anterior desde bg xd</p>
      </div>
    </div>
  )
}

export default NavBar22