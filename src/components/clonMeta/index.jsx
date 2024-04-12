import Footer from "./Footer"
import Games from "./Games"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Newsletter from "./Newsletter"
import Products from "./Products"
import Topbar from "./TopBar"
import VRBanner from "./VRBanner"

const Meta = () => {
  return (
    <>
      <Topbar/>
      <Navbar/>
      <Hero/>
      <VRBanner/>
      <Products/>
      <Games/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default Meta