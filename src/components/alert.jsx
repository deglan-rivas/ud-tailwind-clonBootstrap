const Alert = () => {
  return (
    <>
      <div
        className="bg-blue-100 text-blue-600 py-4 px-2 rounded-md border-blue-200 border mb-4"
        >
        A simple primary alert—check it out!
      </div>

      <div
      className="bg-green-100 text-green-600 py-4 px-2 rounded-md border-green-200 border mb-4"
      >
      A simple primary alert—check it out!
      </div>

      <div
      className="bg-red-100 text-red-600 py-4 px-2 rounded-md border-red-200 border mb-4"
      >
      A simple primary alert—check it out!
      </div>

      <div
      className="bg-yellow-100 text-yellow-600 py-4 px-2 rounded-md border-yellow-200 border mb-4"
      >
      A simple primary alert—check it out!
      </div>

      <div
      className="bg-gray-100 text-gray-600 py-4 px-2 rounded-md border-gray-200 border mb-4"
      >
      A simple primary alert—check it out!
      </div>

      <p>Now .alert-link</p>

      <div
        className="bg-blue-100 text-blue-600 py-4 px-2 rounded-md border-blue-300 border mb-4"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 16 16" 
          role="img" 
          aria-label="Warning:" 
          className="w-4 h-4 inline-block mr-2 fill-current">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        A simple primary alert with <span className="underline font-bold">an example link.</span> Give it a click if you like. Pequeña desalineación entre svg y texto del div
      </div>

      <div
        className="bg-green-100 text-green-600 py-4 px-2 rounded-md border-green-300 border mb-4"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 16 16" 
          role="img" 
          aria-label="Warning:" 
          className="w-7 h-7 inline-block mr-2 fill-current pb-1">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <p className="inline-block pb-0">
        A simple primary alert with <span className="underline font-bold">an example link.</span> Give it a click if you like. Corregir agregando pb y creciendo el w o h del svg
        </p>
      </div>

      <div
        className="bg-blue-100 text-blue-600 py-4 px-2 rounded-md border-blue-300 border mb-4 flex items-center"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 16 16" 
          role="img" 
          aria-label="Warning:" 
          className="w-4 h-4 inline-block mr-2 fill-current">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        {/* <p> */}
          A simple primary alert with <span className="underline font-bold">an example link.</span> Give it a click if you like. Flex es más sencillo y él mismo hace el trabajo sucio para responsive
        {/* </p> */}
      </div>

      <div
      className="bg-green-100 text-green-600 py-4 px-2 rounded-md border-green-200 border mb-4 flex justify-center items-center"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 16 16" 
          role="img" 
          aria-label="Warning:" 
          className="w-4 h-4 me-2 fill-current">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div className="inline-block">
          A simple primary alert with <span className="underline font-bold">an example link.</span> Give it a click if you like.
        </div>
      </div>
    </>
  )
}

export default Alert