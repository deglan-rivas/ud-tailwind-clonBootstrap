const Customization = () => {
  return (
    <section className="container mx-auto mb-12">
      <div className="w-7/12">
        <div className="bg-blue-600/35 p-4 inline-block rounded-2xl mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="text-blue-600  bi bi-signpost-split w-10 h-10" viewBox="0 0 16 16">
            <path d="M7 7V1.414a1 1 0 0 1 2 0V2h5a1 1 0 0 1 .8.4l.975 1.3a.5.5 0 0 1 0 .6L14.8 5.6a1 1 0 0 1-.8.4H9v10H7v-5H2a1 1 0 0 1-.8-.4L.225 9.3a.5.5 0 0 1 0-.6L1.2 7.4A1 1 0 0 1 2 7zm1 3V8H2l-.75 1L2 10zm0-5h6l.75-1L14 3H8z"/>
          </svg>
        </div>
        <h2 className="text-5xl font-bold mb-4">Customize everything with Sass</h2>
        <p className="max-w-lg text-lg mb-4">Bootstrap utilizes Sass for a modular and customizable architecture. Import only the components you need, enable global options like gradients and shadows, and write your own CSS with our variables, maps, functions, and mixins.</p>
        <div className="group font-semibold text-blue-400  text-lg inline-flex items-center">
          <div className="group-hover:brightness-125 group-hover:cursor-pointer underline underline-offset-4">
            Learn more about customizing
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-right inline-block w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-12">
        <div>

        </div>
        <div>
          
        </div>
      </div>
    </section>
  )
}

export default Customization