const Card = () => {
  return (
    <>
      <div className="p-8">
        <div className="mb-4 border border-gray-200 p-4 rounded-md text-center w-96">
          This is some text within a card body
        </div>

        <div className="w-72 border border-gray-200 px-4 pt-3 pb-3 rounded-md mb-4">
          <h5 className="text-xl font-medium">
            Card title
          </h5>
          <h6 className="text-base font-medium text-gray-600">
            Card subtitle
          </h6>
          <p className="py-2">
          Some quick example text to build on the card title and make up the bulk of the card`s content.
          </p>
          <a 
            href=""
            className="text-blue-600 underline pr-4"
          >
            Card link
          </a>
          <a 
            href=""
            className="text-blue-600 underline"
          >
            Another link
          </a>
        </div>

        <ul className="border border-gray-300 divide-y rounded-md overflow-hidden w-60 mb-4">
          <li className="py-2 px-3">A item</li>
          <li className="py-2 px-3">A second item</li>
          <li className="py-2 px-3">A third item</li>
        </ul>

        <ul className="border border-gray-300 divide-y rounded-md overflow-hidden w-60 mb-4">
          <li className="py-2 px-3 bg-red-50">Featured</li>
          <li className="py-2 px-3">A item</li>
          <li className="py-2 px-3">A second item</li>
          <li className="py-2 px-3">A third item</li>
        </ul>

        <ul className="border border-gray-300 divide-y rounded-md overflow-hidden w-60 mb-4">
          <li className="py-2 px-3">A item</li>
          <li className="py-2 px-3">A second item</li>
          <li className="py-2 px-3">A third item</li>
          <li className="py-2 px-3 bg-gray-200">Card footer</li>
        </ul>

        <div className="p-4 border border-gray-300 w-3/4 mb-4">
          <h5 className="text-xl mb-2 font-medium">
            Card title
          </h5>
          <p className="mb-3">
            With supporting text below as a natural lead-in to additional content.
          </p>
          <a 
            href=""
            className="px-3 py-2 bg-blue-600 text-white hover:bg-blue-800 rounded-md"
          >
            Go somewhere
          </a>
        </div>

        <div className="p-4 border border-gray-300 w-1/2 mb-4">
          <h5 className="text-xl mb-2 font-medium">
            Card title
          </h5>
          <p className="mb-3">
            With supporting text below as a natural lead-in to additional content.
          </p>
          <a 
            href=""
            className="px-3 py-2 bg-blue-600 text-white hover:bg-blue-800 rounded-md"
          >
            Go somewhere
          </a>
        </div>

        <div className="p-4 border border-gray-300 w-1/2 mb-4 text-left">
          <h5 className="text-xl mb-2 font-medium">
            Special title treatment
          </h5>
          <p className="mb-3">
            With supporting text below as a natural lead-in to additional content.
          </p>
          <a 
            href=""
            className="px-3 py-2 bg-blue-600 text-white hover:bg-blue-800 rounded-md"
          >
            Go somewhere
          </a>
        </div>

        <div className="p-4 border border-gray-300 w-1/2 mb-4 text-center">
          <h5 className="text-xl mb-2 font-medium">
            Special title treatment
          </h5>
          <p className="mb-3">
            With supporting text below as a natural lead-in to additional content.
          </p>
          <a 
            href=""
            className="px-3 py-2 bg-blue-600 text-white hover:bg-blue-800 rounded-md"
          >
            Go somewhere
          </a>
        </div>

        <div className="p-4 border border-gray-300 w-1/2 mb-4 text-right">
          <h5 className="text-xl mb-2 font-medium">
            Special title treatment
          </h5>
          <p className="mb-3">
            With supporting text below as a natural lead-in to additional content.
          </p>
          <a 
            href=""
            className="px-3 py-2 bg-blue-600 text-white hover:bg-blue-800 rounded-md"
          >
            Go somewhere
          </a>
        </div>

        <div className="border border-gray-200 rounded-md bg-blue-600 w-72 divide-y mb-4">
          <h5 className="text-white py-3 px-4">
            Header
          </h5>
          <div className="text-white">
              <h5 className="text-xl font-medium py-3 px-4">
                Primary card title
              </h5>
              <p className="mb-3 px-4">
                Some quick example text to build on the card title and make up the builk of the cards content
              </p>
          </div>
        </div>

        <div className="border border-gray-200 rounded-md bg-gray-600 w-72 divide-y mb-4">
          <h5 className="text-white py-3 px-4">
            Header
          </h5>
          <div className="text-white">
              <h5 className="text-xl font-medium py-3 px-4">
                Secondary card title
              </h5>
              <p className="mb-3 px-4">
                Some quick example text to build on the card title and make up the builk of the cards content
              </p>
          </div>
        </div>

        <div className="border border-gray-200 rounded-md bg-green-600 w-72 divide-y mb-4">
          <h5 className="text-white py-3 px-4">
            Header
          </h5>
          <div className="text-white">
              <h5 className="text-xl font-medium py-3 px-4">
                Success card title
              </h5>
              <p className="mb-3 px-4">
                Some quick example text to build on the card title and make up the builk of the cards content
              </p>
          </div>
        </div>

        <div className="border border-gray-200 rounded-md bg-red-600 w-72 divide-y mb-4">
          <h5 className="text-white py-3 px-4">
            Header
          </h5>
          <div className="text-white">
              <h5 className="text-xl font-medium py-3 px-4">
              Danger card title
              </h5>
              <p className="mb-3 px-4">
                Some quick example text to build on the card title and make up the builk of the cards content
              </p>
          </div>
        </div>

        <div className="border border-gray-200 rounded-md bg-yellow-500 w-72 divide-y mb-4">
          <h5 className="text-black py-3 px-4">
            Header
          </h5>
          <div className="text-black">
              <h5 className="text-xl font-medium py-3 px-4">
                Warning card title
              </h5>
              <p className="mb-3 px-4">
                Some quick example text to build on the card title and make up the builk of the cards content
              </p>
          </div>
        </div>

        <div className="border border-gray-300 rounded-md bg-white w-72 divide-y divide-gray-300 mb-4">
          <h5 className="text-black bg-gray-100 py-3 px-4">
            Header
          </h5>
          <div className="text-black">
              <h5 className="text-xl font-medium py-3 px-4">
                Light card title
              </h5>
              <p className="mb-3 px-4">
                Some quick example text to build on the card title and make up the builk of the cards content
              </p>
          </div>
        </div>

        <div className="border border-gray-200 rounded-md bg-gray-900 w-72 divide-y mb-4">
          <h5 className="text-white py-3 px-4">
            Header
          </h5>
          <div className="text-white">
              <h5 className="text-xl font-medium py-3 px-4">
                Dark card title
              </h5>
              <p className="mb-3 px-4">
                Some quick example text to build on the card title and make up the builk of the cards content
              </p>
          </div>
        </div>

        <div className="text-blue-600 border border-gray-300 rounded-md  w-72 divide-y divide-gray-300 mb-4">
          <h5 className="bg-blue-100 py-3 px-4">
            Header
          </h5>
          <div className="">
              <h5 className="text-xl font-medium py-3 px-4">
                Primary card title
              </h5>
              <p className="mb-3 px-4">
                Some quick example text to build on the card title and make up the builk of the cards content
              </p>
          </div>
        </div>

        <div className="text-gray-600 border border-gray-300 rounded-md  w-72 divide-y divide-gray-300 mb-4">
          <h5 className="bg-gray-100 py-3 px-4">
            Header
          </h5>
          <div className="">
              <h5 className="text-xl font-medium py-3 px-4">
                Secondary card title
              </h5>
              <p className="mb-3 px-4">
                Some quick example text to build on the card title and make up the builk of the cards content
              </p>
          </div>
        </div>

        <div className="text-green-600 border border-green-200 rounded-md  w-72 divide-y divide-green-200 mb-4">
          <h5 className="bg-green-100 py-3 px-4">
            Header
          </h5>
          <div className="">
              <h5 className="text-xl font-medium py-3 px-4">
                Success card title
              </h5>
              <p className="mb-3 px-4">
                Some quick example text to build on the card title and make up the builk of the cards content
              </p>
          </div>
        </div>

        <div className="text-red-600 border border-red-200 rounded-md  w-72 divide-y divide-red-200 mb-4">
          <h5 className="bg-red-100 py-3 px-4">
            Header
          </h5>
          <div className="">
              <h5 className="text-xl font-medium py-3 px-4">
                Danger card title
              </h5>
              <p className="mb-3 px-4">
                Some quick example text to build on the card title and make up the builk of the cards content
              </p>
          </div>
        </div>

        <div className="text-yellow-600 border border-yellow-400 rounded-md  w-72 divide-y divide-yellow-400 mb-4">
          <h5 className="bg-yellow-100 py-3 px-4">
            Header
          </h5>
          <div className="">
              <h5 className="text-xl font-medium py-3 px-4">
                Warning card title
              </h5>
              <p className="mb-3 px-4">
                Some quick example text to build on the card title and make up the builk of the cards content
              </p>
          </div>
        </div>

        <p className="mb-2">
          overflow-hidden necesario: siempre será necesario cuando el div container tenga borde y los hijos tengan bg-color, notar ejemplos de arriba
        </p>
        <div className="border border-gray-300 rounded-md divide-y divide-y-gray-300 mb-4 overflow-hidden">
        {/* <div className="border border-gray-300 rounded-md divide-y divide-y-gray-300 mb-4"> */}
          <h5 className="bg-gray-100 py-2 px-4">
            Quote
          </h5>
          <div className="px-4 py-2">
            <h5 className="text-lg font-medium">
              A well-known quote, contained in a blockquote element.
            </h5>
            <p className="text-gray-600">
              <span className="select-none pr-2">
                —
              </span>
              Someone famous in 
              <span className="pl-1 italic ">
                Source Title
              </span>
            </p>
          </div>
        </div>

        <div className="p-4 border border-gray-300 w-1/2 mb-4 text-center">
          <h5 className="bg-gray-100 py-2 px-4 mb-2">
            Featured
          </h5>
          <h5 className="text-xl mb-2 font-medium">
            Special title treatment
          </h5>
          <p className="mb-3">
            With supporting text below as a natural lead-in to additional content.
          </p>
          <a 
            href=""
            className="px-3 py-2 bg-blue-600 text-white hover:bg-blue-800 rounded-md mb-2 inline-block"
          >
            Go somewhere
          </a>
          <h5 className="bg-gray-100 py-2 px-4 text-gray-500">
            2 days ago
          </h5>
        </div>

        <p className="mb-2">
          Una alternativa al div general que usa clase divide-y-2: un div menos y manipular bordes manualmente, la navegación puede usar el bg-white o transparent e ir jugando con colores y tamaños de border-bottom overflow-hidden opcional: solo se ve con macrozoom x250 o más
        </p>

        <div className="p-4 border border-gray-300 w-1/2 mb-4 text-center">
          <div className="bg-gray-100 pt-2 px-4 flex border border-gray-300 rounded-t-md">
            <div className="bg-white py-1 px-3 border border-gray-300 border-b-0 cursor-pointer rounded-t-md -mb-px">
              Active
            </div>
            <div className="bg-transparent py-1 px-3 border border-transparent border-b-0 rounded-t-md hover:border-gray-300 cursor-pointer text-blue-600">
              Link
            </div>
            <div className="bg-transparent py-1 px-3 border border-transparent border-b-0 rounded-t-md text-gray-400">
              Disabled
            </div>
          </div>
          <div className="border border-t-0 border-gray-300 rounded-b-md py-2">
            <h5 className="text-xl mb-2 font-medium">
              Special title treatment
            </h5>
            <p className="mb-3">
              With supporting text below as a natural lead-in to additional content.
            </p>
            <a 
              href=""
              className="px-3 py-2 bg-blue-600 text-white hover:bg-blue-800 rounded-md mb-2 inline-block"
            >
              Go somewhere
            </a>
          </div>
        </div>

        <div className="border border-gray-300 rounded-md divide-y w-72 overflow-hidden mb-4"> 
          <div className="bg-gray-400 h-48 flex justify-center items-center">
            <p className="text-white select-none">Image cap</p>
          </div>
          <div className=" p-2">
            <h5 className="text-lg font-medium py-2">
              Card title
            </h5>
            <p className="mb-2">
              Some quick example text to build on the card title and make up the bulk of the cards content.
            </p>
            <a 
              href="#"
              className="bg-blue-600 hover:bg-blue-800 text-white px-3 py-2 rounded-md inline-block"
            >
              Go somewhere
            </a>
          </div>
        </div>

        <div className="border border-gray-300 rounded-md divide-y w-72 overflow-hidden mb-4"> 
          <div className="bg-gradient-to-tl from-violet-400 from-20% to-pink-600 to-90% h-48 flex justify-center items-center">
          {/* <div className="bg-gradient-to-tl from-violet-400 from-10% via-blue-400 via-50% to-pink-600 to-90% h-48 flex justify-center items-center"> */}
            <p className="text-white select-none">Image cap</p>
          </div>
          <div className=" p-2">
            <h5 className="text-lg font-medium py-2">
              Card title
            </h5>
            <p className="mb-2">
              Some quick example text to build on the card title and make up the bulk of the cards content.
            </p>
            <a 
              href="#"
              className="bg-blue-600 hover:bg-blue-800 text-white px-3 py-2 rounded-md inline-block"
            >
              Go somewhere
            </a>
          </div>
        </div>

        <p className="mb-4">TODO: check commentaries</p>
        <div className="mb-4">
          <a href="#" className="inline-block bg-gradient-to-r from-violet-400 from-10% to-pink-400 to-90% px-3 py-2 rounded-md text-white hover:from-pink-400 hover:to-violet-400 hover:scale-125 transition ease-in-out duration-700 delay-200">
          {/* <a href="#" className="inline-block bg-violet-400 hover:bg-pink-400 px-3 py-2 rounded-md text-white hover:scale-110 transition ease-in-out duration-700 delay-200"> */}
            Press me
          </a>
        </div>

        <div className="border border-gray-300 rounded-md divide-y w-72 overflow-hidden mb-4"> 
          <div className="bg-gradient-to-tl from-violet-400 from-20% to-pink-600 to-90% h-48 flex justify-center items-center bg-clip-text">
          {/* <div className="bg-gradient-to-tl from-violet-400 from-10% via-blue-400 via-50% to-pink-600 to-90% h-48 flex justify-center items-center"> */}
            <p className="text-transparent text-4xl select-none">Image cap</p>
          </div>
          <div className=" p-2">
            <h5 className="text-lg font-medium py-2">
              Card title
            </h5>
            <p className="mb-2">
              Some quick example text to build on the card title and make up the bulk of the cards content.
            </p>
            <a 
              href="#"
              className="bg-blue-600 hover:bg-blue-800 text-white px-3 py-2 rounded-md inline-block"
            >
              Go somewhere
            </a>
          </div>
        </div>

        <div className="mb-4">
          <p>
            Imagen de referencia. No olvidar usar CD copy url imagen y no usar el url de pixabay xD
          </p>
          <img src="https://cdn.pixabay.com/photo/2023/06/28/19/05/beautiful-black-woman-8095034_1280.jpg" alt="imagen referencial woman" className="h-48"/>
        </div>

        <div className="border border-gray-300 rounded-md divide-y w-72 overflow-hidden mb-4"> 
          {/* <div className="h-48 overflow-hidden">
            <img src="https://cdn.pixabay.com/photo/2023/06/28/19/05/beautiful-black-woman-8095034_1280.jpg" alt="test" />
          </div> */}
          <div className="h-96 border border-gray-300 flex justify-center items-center bg-auto bg-center bg-[url('https://cdn.pixabay.com/photo/2023/06/28/19/05/beautiful-black-woman-8095034_1280.jpg')]" >
            <p className="text-white text-4xl select-none">Image cap</p>
          </div>
          <div className=" p-2">
            <h5 className="text-lg font-medium py-2">
              Card title
            </h5>
            <p className="mb-2">
              Some quick example text to build on the card title and make up the bulk of the cards content.
            </p>
            <a 
              href="#"
              className="bg-blue-600 hover:bg-blue-800 text-white px-3 py-2 rounded-md inline-block"
            >
              Go somewhere
            </a>
          </div>
        </div>

        <div className="border border-gray-300 rounded-md divide-y w-72 overflow-hidden mb-4"> 
          {/* <div className="h-48 overflow-hidden">
            <img src="https://cdn.pixabay.com/photo/2023/06/28/19/05/beautiful-black-woman-8095034_1280.jpg" alt="test" />
          </div> */}
          <div className="h-16 border border-gray-300 flex justify-center items-center bg-auto bg-left-top bg-repeat-round bg-[url('https://picsum.photos/100/100')]" >
            <p className="text-white text-4xl select-none ">Image cap</p>
          </div>
          <div className=" p-2">
            <h5 className="text-lg font-medium py-2">
              Card title
            </h5>
            <p className="mb-2">
              Some quick example text to build on the card title and make up the bulk of the cards content.
            </p>
            <a 
              href="#"
              className="bg-blue-600 hover:bg-blue-800 text-white px-3 py-2 rounded-md inline-block"
            >
              Go somewhere
            </a>
          </div>
        </div>

        <p className="mb-4">el auto muestra la imagen sin deformar. El cover redimensiona hasta que alguna demensión se entalle y sobre en la otra. En esa dimensión se puede mover pues hay más contenido de lo que se ve. Contain solo hace el resize hasta que la priemra dimensión se entalle, combinar con el no-repeat o repeat-around</p>
        <div className="border border-gray-300 rounded-md divide-y w-72 overflow-hidden mb-4"> 
          {/* <div className="h-48 overflow-hidden">
            <img src="https://cdn.pixabay.com/photo/2023/06/28/19/05/beautiful-black-woman-8095034_1280.jpg" alt="test" />
          </div> */}
          <div className="h-96 border border-gray-300 flex justify-center items-center bg-cover bg-left bg-[url('https://cdn.pixabay.com/photo/2023/12/14/00/20/alaska-8448009_1280.jpg')]">
            <p className="text-white text-4xl select-none">Image cap</p>
          </div>
          <div className=" p-2">
            <h5 className="text-lg font-medium py-2">
              Card title
            </h5>
            <p className="mb-2">
              Some quick example text to build on the card title and make up the bulk of the cards content.
            </p>
            <a 
              href="#"
              className="bg-blue-600 hover:bg-blue-800 text-white px-3 py-2 rounded-md inline-block"
            >
              Go somewhere
            </a>
          </div>
        </div>

        <div className="border border-gray-300 rounded-md divide-y w-72 overflow-hidden mb-4"> 
          {/* <div className="h-48 overflow-hidden">
            <img src="https://cdn.pixabay.com/photo/2023/06/28/19/05/beautiful-black-woman-8095034_1280.jpg" alt="test" />
          </div> */}
          <div className="h-96 border border-gray-300 flex justify-center items-center bg-contain bg-no-repeat bg-center bg-[url('https://cdn.pixabay.com/photo/2023/12/14/00/20/alaska-8448009_1280.jpg')]">
            <p className="text-white text-4xl select-none">Image cap</p>
          </div>
          <div className=" p-2">
            <h5 className="text-lg font-medium py-2">
              Card title
            </h5>
            <p className="mb-2">
              Some quick example text to build on the card title and make up the bulk of the cards content.
            </p>
            <a 
              href="#"
              className="bg-blue-600 hover:bg-blue-800 text-white px-3 py-2 rounded-md inline-block"
            >
              Go somewhere
            </a>
          </div>
        </div>

        <ul className="mb-4">
          <li> &#x2022; multiply darken y luminosity priorizan la imagen con filtro del bg y más o menos luz </li>
          <li>&#x2022; screen y light mucha saturación a la imagen y poco bg</li>
          <li>&#x2022; overlay también satura la imagen pero muestra más bg por eso bajar del green 400 al 300</li>
          <li>&#x2022; el hard light es la pepa: combina los colores con el bg, buen filtro</li>
          <li>&#x2022; del resto todos combinan opacidad con saturación resaltando el bg o los colores del bg image, si se ve un filtro raro ir a buscarlo hasta encontrarlo nomás xd por lo general importa más que el bg predomine, pues eso es controlable por nosotros, los tonos del bg image no: así vienen</li>
          <li>Big bull or bug dot for freecodecamp: &#x2022;</li>
        </ul>
        <div className="mb-4 flex gap-2">
          <div className="border border-gray-300 rounded-md divide-y w-72 overflow-hidden mb-4"> 
            {/* <div className="h-48 overflow-hidden">
              <img src="https://cdn.pixabay.com/photo/2023/06/28/19/05/beautiful-black-woman-8095034_1280.jpg" alt="test" />
            </div> */}
            <div className="h-96 border border-gray-300 flex justify-center items-center bg-cover bg-center bg-[url('https://cdn.pixabay.com/photo/2023/06/28/19/05/beautiful-black-woman-8095034_1280.jpg')] bg-green-400 bg-blend-multiply" >
              <p className="text-white text-4xl select-none">Image cap</p>
            </div>
            <div className=" p-2">
              <h5 className="text-lg font-medium py-2">
                Card title
              </h5>
              <p className="mb-2">
                Some quick example text to build on the card title and make up the bulk of the cards content.
              </p>
              <a 
                href="#"
                className="bg-blue-600 hover:bg-blue-800 text-white px-3 py-2 rounded-md inline-block"
              >
                Go somewhere
              </a>
            </div>
          </div>
          <div className="border border-gray-300 rounded-md divide-y w-auto overflow-hidden mb-4"> 
          {/* <div className="h-48 overflow-hidden">
            <img src="https://cdn.pixabay.com/photo/2023/06/28/19/05/beautiful-black-woman-8095034_1280.jpg" alt="test" />
          </div> */}
            <div className="h-96 border border-gray-300 flex justify-center items-center bg-cover bg-no-repeat bg-center bg-[url('https://cdn.pixabay.com/photo/2023/12/14/00/20/alaska-8448009_1280.jpg')] bg-green-400 bg-blend-multiply">
              <p className="text-white text-4xl select-none">Image cap</p>
            </div>
            <div className=" p-2">
              <h5 className="text-lg font-medium py-2">
                Card title
              </h5>
              <p className="mb-2">
                Some quick example text to build on the card title and make up the bulk of the cards content.
              </p>
              <a 
                href="#"
                className="bg-blue-600 hover:bg-blue-800 text-white px-3 py-2 rounded-md inline-block"
              >
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="mb-4 flex gap-2">
          <div className="border border-gray-300 rounded-md divide-y w-72 overflow-hidden mb-4"> 
            {/* <div className="h-48 overflow-hidden">
              <img src="https://cdn.pixabay.com/photo/2023/06/28/19/05/beautiful-black-woman-8095034_1280.jpg" alt="test" />
            </div> */}
            <div className="h-96 border border-gray-300 flex justify-center items-center bg-cover bg-center bg-[url('https://cdn.pixabay.com/photo/2023/06/28/19/05/beautiful-black-woman-8095034_1280.jpg')] bg-green-400 bg-blend-screen" >
              <p className="text-white text-4xl select-none">Image cap</p>
            </div>
            <div className=" p-2">
              <h5 className="text-lg font-medium py-2">
                Card title
              </h5>
              <p className="mb-2">
                Some quick example text to build on the card title and make up the bulk of the cards content.
              </p>
              <a 
                href="#"
                className="bg-blue-600 hover:bg-blue-800 text-white px-3 py-2 rounded-md inline-block"
              >
                Go somewhere
              </a>
            </div>
          </div>
          <div className="border border-gray-300 rounded-md divide-y w-auto overflow-hidden mb-4"> 
          {/* <div className="h-48 overflow-hidden">
            <img src="https://cdn.pixabay.com/photo/2023/06/28/19/05/beautiful-black-woman-8095034_1280.jpg" alt="test" />
          </div> */}
            <div className="h-96 border border-gray-300 flex justify-center items-center bg-cover bg-no-repeat bg-center bg-[url('https://cdn.pixabay.com/photo/2023/12/14/00/20/alaska-8448009_1280.jpg')] bg-green-400 bg-blend-screen">
              <p className="text-white text-4xl select-none">Image cap</p>
            </div>
            <div className=" p-2">
              <h5 className="text-lg font-medium py-2">
                Card title
              </h5>
              <p className="mb-2">
                Some quick example text to build on the card title and make up the bulk of the cards content.
              </p>
              <a 
                href="#"
                className="bg-blue-600 hover:bg-blue-800 text-white px-3 py-2 rounded-md inline-block"
              >
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="mb-4 flex gap-2">
          <div className="border border-gray-300 rounded-md divide-y w-72 overflow-hidden mb-4"> 
            {/* <div className="h-48 overflow-hidden">
              <img src="https://cdn.pixabay.com/photo/2023/06/28/19/05/beautiful-black-woman-8095034_1280.jpg" alt="test" />
            </div> */}
            <div className="h-96 border border-gray-300 flex justify-center items-center bg-cover bg-center bg-[url('https://cdn.pixabay.com/photo/2023/06/28/19/05/beautiful-black-woman-8095034_1280.jpg')] bg-green-300 bg-blend-overlay" >
              <p className="text-white text-4xl select-none">Image cap</p>
            </div>
            <div className=" p-2">
              <h5 className="text-lg font-medium py-2">
                Card title
              </h5>
              <p className="mb-2">
                Some quick example text to build on the card title and make up the bulk of the cards content.
              </p>
              <a 
                href="#"
                className="bg-blue-600 hover:bg-blue-800 text-white px-3 py-2 rounded-md inline-block"
              >
                Go somewhere
              </a>
            </div>
          </div>
          <div className="border border-gray-300 rounded-md divide-y w-auto overflow-hidden mb-4"> 
          {/* <div className="h-48 overflow-hidden">
            <img src="https://cdn.pixabay.com/photo/2023/06/28/19/05/beautiful-black-woman-8095034_1280.jpg" alt="test" />
          </div> */}
            <div className="h-96 border border-gray-300 flex justify-center items-center bg-cover bg-no-repeat bg-center bg-[url('https://cdn.pixabay.com/photo/2023/12/14/00/20/alaska-8448009_1280.jpg')] bg-green-300 bg-blend-overlay">
              <p className="text-white text-4xl select-none">Image cap</p>
            </div>
            <div className=" p-2">
              <h5 className="text-lg font-medium py-2">
                Card title
              </h5>
              <p className="mb-2">
                Some quick example text to build on the card title and make up the bulk of the cards content.
              </p>
              <a 
                href="#"
                className="bg-blue-600 hover:bg-blue-800 text-white px-3 py-2 rounded-md inline-block"
              >
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="mb-4 flex gap-2">
          <div className="border border-gray-300 rounded-md divide-y w-72 overflow-hidden mb-4"> 
            {/* <div className="h-48 overflow-hidden">
              <img src="https://cdn.pixabay.com/photo/2023/06/28/19/05/beautiful-black-woman-8095034_1280.jpg" alt="test" />
            </div> */}
            <div className="h-96 border border-gray-300 flex justify-center items-center bg-cover bg-center bg-[url('https://cdn.pixabay.com/photo/2023/06/28/19/05/beautiful-black-woman-8095034_1280.jpg')] bg-green-400 bg-blend-hard-light" >
              <p className="text-white text-4xl select-none">Image cap</p>
            </div>
            <div className=" p-2">
              <h5 className="text-lg font-medium py-2">
                Card title
              </h5>
              <p className="mb-2">
                Some quick example text to build on the card title and make up the bulk of the cards content.
              </p>
              <a 
                href="#"
                className="bg-blue-600 hover:bg-blue-800 text-white px-3 py-2 rounded-md inline-block"
              >
                Go somewhere
              </a>
            </div>
          </div>
          <div className="border border-gray-300 rounded-md divide-y w-auto overflow-hidden mb-4"> 
          {/* <div className="h-48 overflow-hidden">
            <img src="https://cdn.pixabay.com/photo/2023/06/28/19/05/beautiful-black-woman-8095034_1280.jpg" alt="test" />
          </div> */}
            <div className="h-96 border border-gray-300 flex justify-center items-center bg-cover bg-no-repeat bg-center bg-[url('https://cdn.pixabay.com/photo/2023/12/14/00/20/alaska-8448009_1280.jpg')] bg-green-400 bg-blend-hard-light">
              <p className="text-white text-4xl select-none">Image cap</p>
            </div>
            <div className=" p-2">
              <h5 className="text-lg font-medium py-2">
                Card title
              </h5>
              <p className="mb-2">
                Some quick example text to build on the card title and make up the bulk of the cards content.
              </p>
              <a 
                href="#"
                className="bg-blue-600 hover:bg-blue-800 text-white px-3 py-2 rounded-md inline-block"
              >
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="mb-4 flex gap-2">
          <div className="border border-gray-300 rounded-md divide-y w-72 overflow-hidden mb-4"> 
            {/* <div className="h-48 overflow-hidden">
              <img src="https://cdn.pixabay.com/photo/2023/06/28/19/05/beautiful-black-woman-8095034_1280.jpg" alt="test" />
            </div> */}
            <div className="h-96 border border-gray-300 flex justify-center items-center bg-cover bg-center bg-[url('https://cdn.pixabay.com/photo/2023/06/28/19/05/beautiful-black-woman-8095034_1280.jpg')] bg-green-700 bg-blend-soft-light" >
              <p className="text-white text-4xl select-none">Image cap</p>
            </div>
            <div className=" p-2">
              <h5 className="text-lg font-medium py-2">
                Card title
              </h5>
              <p className="mb-2">
                Some quick example text to build on the card title and make up the bulk of the cards content.
              </p>
              <a 
                href="#"
                className="bg-blue-600 hover:bg-blue-800 text-white px-3 py-2 rounded-md inline-block"
              >
                Go somewhere
              </a>
            </div>
          </div>
          <div className="border border-gray-300 rounded-md divide-y w-auto overflow-hidden mb-4"> 
          {/* <div className="h-48 overflow-hidden">
            <img src="https://cdn.pixabay.com/photo/2023/06/28/19/05/beautiful-black-woman-8095034_1280.jpg" alt="test" />
          </div> */}
            <div className="h-96 border border-gray-300 flex justify-center items-center bg-cover bg-no-repeat bg-center bg-[url('https://cdn.pixabay.com/photo/2023/12/14/00/20/alaska-8448009_1280.jpg')] bg-green-700 bg-blend-soft-light">
              <p className="text-white text-4xl select-none">Image cap</p>
            </div>
            <div className=" p-2">
              <h5 className="text-lg font-medium py-2">
                Card title
              </h5>
              <p className="mb-2">
                Some quick example text to build on the card title and make up the bulk of the cards content.
              </p>
              <a 
                href="#"
                className="bg-blue-600 hover:bg-blue-800 text-white px-3 py-2 rounded-md inline-block"
              >
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <p className="mb-4">Darken, multiply y soft-light son nuestros caballos ganadores para combinar con el texto, jugar un poco con las intensidades de colores, ejm: pink-600 == red-400 == violet-400. Eventualmente todas dan resultados similares si subimos a bajamos un poco entre 400 600 700 800. Ejm:</p>
        <div className="mx-auto mb-1 text-white rounded-md p-4 h-48 w-1/2 flex flex-col items-start justify-center bg-violet-600 bg-cover bg-top bg-blend-multiply bg-[url('https://cdn.pixabay.com/photo/2023/12/14/00/20/alaska-8448009_1280.jpg')]">
          <h5 className="text-2xl font-medium mb-2">
            Card title
          </h5>
          <p className="mb-2">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>
          <p className="text-sm">
            Last updated 3 mins ago
          </p>
        </div>
        <div className="mx-auto mb-1 text-white rounded-md p-4 h-48 w-1/2 flex flex-col items-start justify-center bg-violet-600 bg-cover bg-top bg-blend-darken bg-[url('https://cdn.pixabay.com/photo/2023/12/14/00/20/alaska-8448009_1280.jpg')]">
          <h5 className="text-2xl font-medium mb-2">
            Card title
          </h5>
          <p className="mb-2">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>
          <p className="text-sm">
            Last updated 3 mins ago
          </p>
        </div>
        <div className="mx-auto mb-4 text-white rounded-md p-4 h-48 w-1/2 flex flex-col items-start justify-center bg-violet-800 bg-cover bg-top bg-blend-soft-light bg-[url('https://cdn.pixabay.com/photo/2023/12/14/00/20/alaska-8448009_1280.jpg')]">
          <h5 className="text-2xl font-medium mb-2">
            Card title
          </h5>
          <p className="mb-2">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>
          <p className="text-sm">
            Last updated 3 mins ago
          </p>
        </div>

        <div className="mx-auto mb-1 text-white rounded-md p-4 h-48 w-1/2 flex flex-col items-start justify-center bg-green-400 bg-cover bg-top bg-blend-multiply bg-[url('https://cdn.pixabay.com/photo/2023/12/14/00/20/alaska-8448009_1280.jpg')]">
          <h5 className="text-2xl font-medium mb-2">
            Card title
          </h5>
          <p className="mb-2">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>
          <p className="text-sm">
            Last updated 3 mins ago
          </p>
        </div>
        <div className="mx-auto mb-1 text-white rounded-md p-4 h-48 w-1/2 flex flex-col items-start justify-center bg-green-400 bg-cover bg-top bg-blend-darken bg-[url('https://cdn.pixabay.com/photo/2023/12/14/00/20/alaska-8448009_1280.jpg')]">
          <h5 className="text-2xl font-medium mb-2">
            Card title
          </h5>
          <p className="mb-2">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>
          <p className="text-sm">
            Last updated 3 mins ago
          </p>
        </div>
        <div className="mx-auto mb-4 text-white rounded-md p-4 h-48 w-1/2 flex flex-col items-start justify-center bg-green-700 bg-cover bg-top bg-blend-soft-light bg-[url('https://cdn.pixabay.com/photo/2023/12/14/00/20/alaska-8448009_1280.jpg')]">
          <h5 className="text-2xl font-medium mb-2">
            Card title
          </h5>
          <p className="mb-2">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>
          <p className="text-sm">
            Last updated 3 mins ago
          </p>
        </div>

        <div className="mx-auto mb-1 text-white rounded-md p-4 h-48 w-1/2 flex flex-col items-start justify-center bg-blue-400 bg-cover bg-top bg-blend-multiply bg-[url('https://cdn.pixabay.com/photo/2023/12/14/00/20/alaska-8448009_1280.jpg')]">
          <h5 className="text-2xl font-medium mb-2">
            Card title
          </h5>
          <p className="mb-2">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>
          <p className="text-sm">
            Last updated 3 mins ago
          </p>
        </div>
        <div className="mx-auto mb-1 text-white rounded-md p-4 h-48 w-1/2 flex flex-col items-start justify-center bg-blue-400 bg-cover bg-top bg-blend-darken bg-[url('https://cdn.pixabay.com/photo/2023/12/14/00/20/alaska-8448009_1280.jpg')]">
          <h5 className="text-2xl font-medium mb-2">
            Card title
          </h5>
          <p className="mb-2">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>
          <p className="text-sm">
            Last updated 3 mins ago
          </p>
        </div>
        <div className="mx-auto mb-4 text-white rounded-md p-4 h-48 w-1/2 flex flex-col items-start justify-center bg-blue-600 bg-cover bg-top bg-blend-soft-light bg-[url('https://cdn.pixabay.com/photo/2023/12/14/00/20/alaska-8448009_1280.jpg')]">
          <h5 className="text-2xl font-medium mb-2">
            Card title
          </h5>
          <p className="mb-2">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>
          <p className="text-sm">
            Last updated 3 mins ago
          </p>
        </div>

        <div className="mx-auto mb-1 text-white rounded-md p-4 h-48 w-1/2 flex flex-col items-start justify-center bg-yellow-500 bg-cover bg-top bg-blend-multiply bg-[url('https://cdn.pixabay.com/photo/2023/12/14/00/20/alaska-8448009_1280.jpg')]">
          <h5 className="text-2xl font-medium mb-2">
            Card title
          </h5>
          <p className="mb-2">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>
          <p className="text-sm">
            Last updated 3 mins ago
          </p>
        </div>
        <div className="mx-auto mb-1 text-white rounded-md p-4 h-48 w-1/2 flex flex-col items-start justify-center bg-yellow-500 bg-cover bg-top bg-blend-darken bg-[url('https://cdn.pixabay.com/photo/2023/12/14/00/20/alaska-8448009_1280.jpg')]">
          <h5 className="text-2xl font-medium mb-2">
            Card title
          </h5>
          <p className="mb-2">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>
          <p className="text-sm">
            Last updated 3 mins ago
          </p>
        </div>
        <div className="mx-auto mb-4 text-white rounded-md p-4 h-48 w-1/2 flex flex-col items-start justify-center bg-yellow-700 bg-cover bg-top bg-blend-soft-light bg-[url('https://cdn.pixabay.com/photo/2023/12/14/00/20/alaska-8448009_1280.jpg')]">
          <h5 className="text-2xl font-medium mb-2">
            Card title
          </h5>
          <p className="mb-2">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>
          <p className="text-sm">
            Last updated 3 mins ago
          </p>
        </div>

        




      </div>
    </>
  )
}

export default Card