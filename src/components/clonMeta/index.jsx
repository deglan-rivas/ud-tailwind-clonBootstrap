import Blog from "./Blog"
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
      <p className="hidden sm:block">ga1</p>
      <Topbar/>
      <Navbar/>
      <Hero/>
      <VRBanner/>
      <Products/>
      <Games/>
      <Blog/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Meta

/**
 * queda pendiente usar aprender a usar el hsl, aunque rgb es más rápido para prototipar por le hack de los dev tools, igual hsl es más humano, pues rgb no tiene relación entre colores y notación, hsl sí -> https://stackoverflow.com/questions/77360585/how-to-use-hsl-custom-color-in-tailwind-in-react
 * el carousel de cards era un poco jodido con bootstrap recuerdo, https://github.com/shadcn-ui/ui/discussions/2847 según este github discusisons no hay pero según shadcn sí, probarlo xd -> https://ui.shadcn.com/docs/components/carousel
 * en el products hay un error: 
          <div className="basis-1/2 flex flex-col justify-between items-center h-60 sm:basis-1/4 sm:h-80 sm:justify-end">
 * aunque funciona en tailwind online, pero no en este código de react, sigue mostrando el justify between pese a usar la mq:
          <div
  class="bg-gray-300 basis-1/2 flex flex-col justify-end items-center h-60 
          sm:basis-1/4 sm:h-80 sm:justify-between"
>
  <p
    class="bg-red-400 w-48 mb-2
              sm:w-64"
  >
    ga
  </p>
  <p class="text-lg mb-6 w-36 text-center font-medium">Meta Quest</p>
  <a href="#" class="text-xs py-3 px-7 border-2 border-gray-300 rounded-full text-blue-500 hover:text-blue-400 font-semibold"> Shop now </a>
</div>
  sospecho que por alguna razón no se puede usar el className o class hidden sm:block, quizás por los paquetes de tw-elements o tw-elementents-react, o quizás es muy pesada de tantas imágenes, sea cual sea el caso, al usar ctrl r tarda en cargar, así que continuaré el clon de bs y meta en otros 2 proyectos nuevos para poder usar el hidden sm:block como en el proyecto delete_mix, por ejemplo
  mi proceso y conclusión detallada en el notion
 */