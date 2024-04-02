import CloseIcon from "../../icons/CloseIcon"

const CloseButton = () => {
  return (
    <>
      <div className="mb-4">
        {/* <button className="border border-red-600 text-gray-600 hover:text-gray-900 focus:text-gray-800 focus:ring-2 focus:rounded-md"> */}
        <button className="text-gray-600 rounded-md hover:text-gray-900 focus:text-gray-800 focus:ring-2">
          <CloseIcon/>
        </button>
        {/* <button className="text-gray-400 cursor-auto"> */}
        <button disabled className="text-gray-400">
          <CloseIcon/>
        </button>
        <button className="focus:ring-4 ring-red-400 ring-offset-4">Gaaa</button>
        <button className="ring-offset-4 ring-1 ring-red-400 focus:ring-inset focus:ring-blue-400 hover:ring-offset-green-400">Raaa</button>
      </div>
    </>
  )
}

export default CloseButton