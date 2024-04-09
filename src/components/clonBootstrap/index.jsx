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
      <Main/>
      <GetStarted/>
      <Customization/>
      <Building/>
      <Components/>
      <JQuery/>
      <Personalization/>
      <Themes/>
      <Footer/>
    </>
  )
}

export default Bootstrap