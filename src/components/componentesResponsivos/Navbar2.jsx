import Bootstrap from "../../icons/Bootstrap"
import Menu from "../../icons/Menu"

const NavBar2 = () => {
  return (
    <>
      <div className="bg-gray-200 py-2 px-4 grid grid-cols-[1fr,20%] mb-4 sm:hidden">
        {/* <div className=""> */}
          <div className="">
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
              className="peer-checked:ring rounded-md place-self-end"
              htmlFor="menu"
            >
              <Menu />
            </label>
            {/* <Menu/> */}
          {/* </div> */}
          <div className="col-span-2 py-2 space-y-2 hidden peer-checked:block">
            <p>Home</p>
            <p>Features</p>
            <p>Pricing</p>
          </div>
        {/* </div> */}
      </div>
      <div className="bg-gray-300 hidden sm:block">
        <div className="container mx-auto max-w-3xl flex items-center">
          <div>
            <Bootstrap/>
          </div>
          <div className="flex-1 p-4 space-x-4 flex justify-end">
            <p>Home</p>
            <p>Features</p>
            <p>Pricing</p>
          </div>
        </div>
      </div>
      <p>
        notar que el input:checkbox debe ser hermano del label y el div afectado o no funcará el peer-checked
      </p>
      <p>se puede ocultar todo el componente solo con un una mq y el hidden así sm:hidden :o así ya no hay que crear tantas mq's y tantear a ver que nada se rompa, aunque también se agrega mucho html y css innecesario, útil para salir del apuro xd</p>
    </>
  )
}

export default NavBar2