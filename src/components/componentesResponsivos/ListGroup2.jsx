const ListGroup2 = () => {
  return (
    <div className="m-4">
      <ol className="border border-gray-300 divide-y-2 w-1/2 max-w-[30rem] min-w-[15rem] rounded-md mb-2">
        <li>
          <div className="rounded-md flex items-stretch divide-x-2">
            <p className="py-1 px-2 flex-1 flex text-center items-center justify-center">
              An item
            </p>
            <p className="py-1 px-2 flex-1 flex text-center items-center justify-center">
              A second item with much more content
            </p>
            <p className="py-1 px-2 flex-1 flex text-center items-center justify-center">
              A third item
            </p>
            {/* <p className="py-1 px-2 w-full flex text-center items-center justify-center">
              An item
            </p>
            <p className="py-1 px-2 w-full flex text-center items-center justify-center">
              A second item with much more content
            </p>
            <p className="py-1 px-2 w-full flex text-center items-center justify-center">
              A third item
            </p> */}
          </div>
        </li>
        <li>
          <div className="rounded-md flex flex-col items-stretch divide-y-2 sm:flex-row sm:divide-y-0 sm:divide-x-2">
            <p className="py-1 px-2 flex-1 flex text-center items-center justify-center">
              An item
            </p>
            <p className="py-1 px-2 flex-1 flex text-center items-center justify-center">
              A second item
            </p>
            <p className="py-1 px-2 flex-1 flex text-center items-center justify-center">
              A third item
            </p>
          </div>
        </li>
        <li>
          <div className="rounded-md flex flex-col items-stretch divide-y-2 md:flex-row md:divide-y-0 md:divide-x-2">
            <p className="py-1 px-2 flex-1 flex text-center items-center justify-center">
              An item
            </p>
            <p className="py-1 px-2 flex-1 flex text-center items-center justify-center">
              A second item
            </p>
            <p className="py-1 px-2 flex-1 flex text-center items-center justify-center">
              A third item
            </p>
          </div>
        </li>
        <li>
          <div className="rounded-md flex flex-col items-stretch divide-y-2 lg:flex-row lg:divide-y-0 lg:divide-x-2">
            <p className="py-1 px-2 flex-1 flex text-center items-center justify-center">
              An item
            </p>
            <p className="py-1 px-2 flex-1 flex text-center items-center justify-center">
              A second item
            </p>
            <p className="py-1 px-2 flex-1 flex text-center items-center justify-center">
              A third item
            </p>
          </div>
        </li>
      </ol>

      <div className="h-96 bg-blue-400 mb-2">
        <div className="bg-red-400 h-1/3">
          el flex-1 y w-full funcionan igual si se aplican a todos los hijos: ver código comentado
        </div>
        <div className="bg-green-400 h-1/3">

        </div>
      </div>

      <div className="h-96 bg-blue-400 mb-2 flex flex-col">
        {/* <div className="bg-red-400 h-full"> */}
        <div className="bg-red-400 flex-1">

        </div>
        <div className="bg-green-400 h-1/5">

        </div>
        <div className="bg-violet-400 flex-1">

        </div>
      </div>
    </div>
  )
}

export default ListGroup2