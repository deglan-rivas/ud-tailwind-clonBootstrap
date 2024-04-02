import Bootstrap from "../../icons/Bootstrap"
import Menu from "../../icons/Menu"

const NavBar = () => {
  return (
    <>
      <div className="bg-blue-400 py-2 px-4 grid grid-cols-[1fr,20%] mb-4">
        {/* <div className=""> */}
          <div className="bg-red-400">
            <Bootstrap/>
          </div>
          {/* <div className="bg-yellow-400 place-self-end"> */}
          {/* <div className="bg-yellow-400 ml-auto"> */}
          <div className="bg-yellow-400 flex justify-end">
            <button className="focus:ring rounded-md">
              <Menu />
            </button>
            {/* <Menu/> */}
          </div>
          <div className="col-span-2 bg-green-400 py-2 space-y-2">
            <p>Home</p>
            <p>Features</p>
            <p>Pricing</p>
          </div>
        {/* </div> */}
      </div>
      <p>a veces no es necesario tanto div contenedor que puede formar un div hell similar al callback hell xdddd, solo un único div e ir jugando con los inline-block o inline-flex delos hijos</p>
      <p>el ml-auto, flex y place-self-end son intercambiables. Notar que hay una diferencia en el focus:ring, solo habría que cambiar el tag de dib por button y mover el focus:ring al padre o directamente eliminar el button hijo</p>
    </>
  )
}

export default NavBar