const Card = () => {
  return (
    <>
      <div className="p-8 w-96">
        <div className="mb-4 border border-gray-200 p-4 rounded-md text-center">
          This is some text within a card body
        </div>

        <div className="w-72 border border-gray-200 px-4 pt-3 pb-3">
          <h5 className="text-xl font-medium">
            Card title
          </h5>
          <h6 className="text-base font-medium text-gray-600">
            Card subtitle
          </h6>
          <p className="py-2">
          Some quick example text to build on the card title and make up the bulk of the card's content.
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
      </div>  
    </>
  )
}

export default Card