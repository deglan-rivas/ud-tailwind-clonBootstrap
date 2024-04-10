const Building = () => {
  return (
    <section className="container mx-auto mb-24 pb-12">
      <div className="w-8/12 mb-12">
        <div className="bg-red-800/15 p-4 inline-block rounded-2xl mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-braces text-red-400 w-10 h-10" viewBox="0 0 16 16">
            <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6"/>
          </svg>
        </div>
        <h2 className="text-5xl font-bold mb-4">Build and extend in real-time with CSS variables</h2>
        <p className="text-lg mb-4">Bootstrap 5 is evolving with each release to better utilize CSS variables for global theme styles, individual components, and even utilities. We provide dozens of variables for colors, font styles, and more at a <code className="text-red-400">:root</code> level for use anywhere. On components and utilities, CSS variables are scoped to the relevant class and can easily be modified.</p>
        <div className="group font-semibold text-blue-400  text-lg inline-flex items-center">
          <div className="group-hover:brightness-125 group-hover:cursor-pointer underline underline-offset-4">
            Learn more about CSS variables
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-right inline-block w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-12">
        <div>
          <h3 className="text-3xl mb-2 font-semibold">Include all of Bootstrap's Sass</h3>
          <p className="mb-4">Import one stylesheet and you're off to the races with every feature of our CSS.</p>
          <div className="flex justify-between border bg-black/30 border-gray-600 text-gray-300 px-4 py-4 rounded-md mb-4">
            <div>
              <span className="select-none text-gray-500">$</span>
              <code  className="pl-2">gem install bootstrap -v 5.3.3</code>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-clipboard w-4 h-5 " viewBox="0 0 16 16">
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
            </svg>
          </div>
          <p className="mb-4">Learn more about our <a href="#" className="text-blue-400 underline hover:brightness-125">global Sass options</a>.</p>
        </div>
        <div>
          <h3 className="text-3xl mb-2 font-semibold">Include what you need</h3>
            <p className="mb-4">The easiest way to customize Bootstrap—include only the CSS you need.</p>
            <div className="flex justify-between border bg-black/30 border-gray-600 text-gray-300 px-4 py-4 rounded-md mb-4">
              <div>
                <span className="select-none text-gray-500">$</span>
                <code  className="pl-2">gem install bootstrap -v 5.3.3</code>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-clipboard w-4 h-5 " viewBox="0 0 16 16">
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
              </svg>
            </div>
            <p className="mb-4">Learn more about <a href="#" className="text-blue-400 underline hover:brightness-125">using Bootstrap with Sass</a>.</p>
        </div>
      </div>
    </section>
  )
}

export default Building