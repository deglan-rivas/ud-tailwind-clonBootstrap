const GetStarted = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center flex flex-col justify-center items-center gap-4 mb-16">
        <div className="bg-violet-600/10 p-4 flex justify-center items-center rounded-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="text-violet-500 opacity-100 bi bi-code w-10 h-10" viewBox="0 0 16 16">
            <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z"/>
          </svg>
        </div>
        <h2 className="text-5xl font-bold">Get Started any way you want</h2>
        <p className="max-w-lg text-lg">Jump right into building with Bootstrap—use the CDN, install it via package manager, or download the source code.</p>
        <div className="group font-semibold text-blue-400  text-lg inline-flex items-center">
          <div className="group-hover:brightness-125 group-hover:cursor-pointer underline underline-offset-4">
            Read installation docs
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-right inline-block w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
          </svg>
        </div>
      </div>
      
    </div>
  )
}

export default GetStarted