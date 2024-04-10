import Building from "./Building"
import Components from "./Components"
import Customization from "./Customization"
import Footer from "./Footer"
import GetStarted from "./GetStarted"
import Header from "./Header"
import JQuery from "./JQuery"
import Main from "./Main"
import Personalization from "./Personalization"
import Themes from "./Themes"

const Bootstrap = () => {
  return (
    <>
      <Header/>
      <div className="bg-[#202529]/95 text-white">
      {/* <div className="bg-black/85 text-white"> */}
        <Main/>
        <GetStarted/>
        <Customization/>
        <Building/>
        <Components/>
        <JQuery/>
        <Personalization/>
        <Themes/>
      </div>
      <Footer/>
    </>
  )
}

export default Bootstrap

/**
 * inline-flex puede ser buena opción para que el flex no tomo todo el espacio al ser un elemento block
 */