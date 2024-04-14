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
    <div className="font-sans">
      <Topbar/>
      <Navbar/>
      <Hero/>
      <VRBanner/>
      <Products/>
      <Games/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Meta

/**
 * queda pendiente usar aprender a usar el hsl, aunque rgb es más rápido para prototipar por le hack de los dev tools, igual hsl es más humano, pues rgb no tiene relación entre colores y notación, hsl sí -> https://stackoverflow.com/questions/77360585/how-to-use-hsl-custom-color-in-tailwind-in-react
 * el carousel de cards era un poco jodido con bootstrap recuerdo, https://github.com/shadcn-ui/ui/discussions/2847 según este github discusisons no hay pero según shadcn sí, probarlo xd -> https://ui.shadcn.com/docs/components/carousel
 */