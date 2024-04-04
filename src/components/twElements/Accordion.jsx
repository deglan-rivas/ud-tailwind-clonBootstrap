import {
  Collapse,
  initTWE,
} from "tw-elements";

initTWE({ Collapse });

const Accordion = () => {
  return (
    <>
      <div id="accordionExample">
  <div
    className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
    <h2 className="mb-0" id="headingOne">
      <button
        className="focus:ring-2 group relative flex w-full items-center rounded-t-lg border-0 bg-gray-200 px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-gray-300 [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 [&:not([data-twe-collapse-collapsed])]:focus:ring-4 [&:not([data-twe-collapse-collapsed])]:rounded-md"
        type="button"
        data-twe-collapse-init
        data-twe-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne">
        Accordion Item #11
        <span
          className="text-sky-500 -me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
    <div
      id="collapseOne"
      className="!visible"
      data-twe-collapse-item
      data-twe-collapse-show
      aria-labelledby="headingOne"
      data-twe-parent="#accordionExample">
      <div className="px-5 py-4">
        {/* <strong className="text-red-400 [&:not([data-twe-collapse-collapsed])]:bg-green-200">This is the first item's accordion body.</strong> It is */}
        <strong className="text-red-400 [&([data-twe-collapse-show])]:bg-blue-200">This is the first item's accordion body.</strong> It is
        shown by default, until the collapse plugin adds the appropriate
        classes that we use to style each element. These classes control
        the overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or
        overriding our default variables. It's also worth noting that just
        about any HTML can go within the <code>.accordion-body</code>,
        though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div
    className="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
    <h2 className="mb-0" id="headingTwo">
      <button
        className="focus:ring-2 group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-blue-900 [&:not([data-twe-collapse-collapsed])]:text-sky-300 [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
        type="button"
        data-twe-collapse-init
        data-twe-collapse-collapsed
        data-twe-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo">
        Accordion Item #2
        <span
          className="text-sky-500 -me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
    <div
      id="collapseTwo"
      className="!visible hidden"
      data-twe-collapse-item
      aria-labelledby="headingTwo"
      data-twe-parent="#accordionExample">
      <div className="px-5 py-4">
        <strong>This is the second item's accordion body.</strong> It is
        hidden by default, until the collapse plugin adds the appropriate
        classes that we use to style each element. These classes control
        the overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or
        overriding our default variables. It's also worth noting that just
        about any HTML can go within the <code>.accordion-body</code>,
        though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div
    className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
    <h2 className="accordion-header mb-0" id="headingThree">
      <button
        className="focus:ring data-[twe-collapse-collapsed] group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none data-[twe-collapse-collapsed]:rounded-b-lg dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-blue-900 [&:not([data-twe-collapse-collapsed])]:text-sky-300 [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary  dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
        type="button"
        data-twe-collapse-init
        data-twe-collapse-collapsed
        data-twe-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree">
        Accordion Item #3
        <span
          className="text-sky-500 -me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
    <div
      id="collapseThree"
      className="!visible hidden"
      data-twe-collapse-item
      aria-labelledby="headingThree"
      data-twe-parent="#accordionExample">
      <div className="px-5 py-4">
        <strong>This is the third item's accordion body.</strong> It is
        hidden by default, until the collapse plugin adds the appropriate
        classes that we use to style each element. These classes control
        the overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or
        overriding our default variables. It's also worth noting that just
        about any HTML can go within the <code>.accordion-body</code>,
        though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
      {/* <div>
        <p>Checkear DaisyUI, Flowbite y la misma bootstrap para tener una idea de los componentes más usados y sus personalizaciones</p>
        <p>Lo único bajo de tw-elements es que su código solo tiene html y js, pero no jsx tmr xD hay que cambiar manualmente las class por className</p>
        <p>Lo bueno es que el eslintrc.cjs por defecto de vite ya lo corrige a className así como corrige el for a htmlFor, basta con guardar usando ctrl + s :o</p>
        <p>No hay guía de instalación para pnpm tmr xd, pero sí para vite en el integrations o quick started ez https://github.com/mdbootstrap/TW-Elements/discussions/1480</p>
        <p>No sabía que se podía agregar un require en el .config.js siendo type: module en el package.json :o</p>
        <p>TODO Es raro que al abrir el localhost:5173 y darle ctrl r o ctrl shift r para borrar la caché se cuelgue el collapse, pero basta guardar en el .jsx con ctrl s para que vuelva a funcionar</p>
        <p>TODO también hay que validar si al tener 2 accordions en el mismo app o main.jsx padre hay comportamientos inesperados al tener los mismos id's o name's o basta con cambiar esos valores? Capaz por dentro está harcodeado, así que mejor validar</p>
        <p>lo primero para entender un tw-elemento clonado de bootstrap es darle una leída rápida a la documentación y al jsx o html del elemento para intentar entender las clases y atributos asociadas al evento, en este caso: clickear para mostrar contenido interno</p>
        <p>lo siguiente es observar el código desde el navegador con un pnpm dev y F12 para abrir las dev tools, ahí se debe ver las clases que cambian con la interactividad del evento de js, en este caso: un click de js cambia la clase -show en hijo, -collapsed en padre y un !visible hidden xD</p>
        <p>ahora solo queda ver las clases asociadas a ese evento, en este caso full pseudoelemento del :not data-collapse-collapsed</p>
        <p>la mayoría sí se mostraba menos el de carousel, me imagino que por el peso del JS. Además, el modal se veía pero no funcionaba. Supuse que era por lo mismo que pasaba con el carousel, así que moví su js del Carousel.jsx al App o main.jsx y funcó, quizás el del carousel es considerablemente más pesado, pues ni así funcionó xd</p>
        <p>eventualmente me di cuenta que hay una versión para react, pues hay que recordar que estoy usando react sobre vite, fácil por eso cuando le doy ctrl R al chrome no funca, pero con ctrl s al file .jsx sí funca. Debe ser eso, así que reinstalar tw-elements para react y comenzar denuevo con el carousel</p>
        <p>ptmr con react no había problema con el carousel, el único detalle era que mi pantalla era muy chica y había una media query que ocultaba el texto :'v</p>
        <p>con el ! podemos forzar valores tal cual como si se usara el !important en css puro, estaría bueno aprender a inyectar css puro como si usara el sx en materialUI o style en html puro, pues en tailwind depende de la clase, ejm: bg-[url()] para el background. Además, conviene aprender a usar ts para poder acceder al código tailwind fuente de los node_modules, por ahora con ctrl click solo puede ir a las definiciones pero si quiera modificar TEModalHeader a veces no basta con agregar un className, el ! funca, pero abusar es riesgoso sobretodo cuando tiene elementos hijos xd</p>
        <p>no hay el offcanvas o drawer para react, pero sí para el standard html csmr, go a flowbite que sí lo tiene o aprender a personalizar daisyUI es otra opción, flowbite, shadcn, radix ui</p>
      </div> */}
    </>
  )
}

export default Accordion