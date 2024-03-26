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
      </div>  
    </>
  )
}

export default Card