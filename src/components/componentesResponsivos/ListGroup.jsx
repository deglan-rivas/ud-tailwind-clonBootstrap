const ListGroup = () => {
  return (
    <div className="m-4">
      <p className="mb-2">Por alguna razón no se muestra el list item cuando se estila el li: debe haber un contenedor div que haga el trabajo sucio. Probar el código de abajo</p>
      <ol className="w-full max-w-96 border border-gray-300 rounded-md divide-y divide-gray-300 list-decimal list-inside overflow-hidden">
        {/* <li className="ml-4 p-2 inline-flex w-[80%] bg-gray-400 items-start justify-between">
          <div>
            <p className="font-medium">
              Subheading
            </p>
            <p>
              Content for list item
            </p>
          </div>
          <div className="bg-blue-400 text-white rounded-full px-1">
            14
          </div>
        </li> */}
        <li className="px-2">
          <div className="p-2 inline-flex w-[92%] bg-transparent items-start justify-between">
            <div>
              <p className="font-medium">
                Subheading
              </p>
              <p>
                Content for list item
              </p>
            </div>
            <div className="bg-blue-400 text-white rounded-full px-1">
              14
            </div>
          </div>
        </li>
        <li className="px-2">
          <div className="p-2 inline-flex w-[92%] bg-transparent items-start justify-between">
            <div>
              <p className="font-medium">
                Subheading
              </p>
              <p>
                Content for list item
              </p>
            </div>
            <div className="bg-blue-400 text-white rounded-full px-1">
              14
            </div>
          </div>
        </li>
        <li className="px-2">
          <div className="p-2 inline-flex w-[92%] bg-transparent items-start justify-between">
            <div>
              <p className="font-medium">
                Subheading
              </p>
              <p>
                Content for list item
              </p>
            </div>
            <div className="bg-blue-400 text-white rounded-full px-1">
              14
            </div>
          </div>
        </li>
      </ol>
      
    </div>
  )
}

export default ListGroup