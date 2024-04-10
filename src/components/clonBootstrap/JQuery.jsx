const JQuery = () => {
  return (
    <section className="container mx-auto mb-12 pb-12">
      <div className="w-[780px] mb-12">
        <div className="bg-yellow-800/25 p-4 inline-block rounded-2xl mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-plugin w-10 h-10 text-yellow-400" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a7 7 0 1 1 2.898 5.673c-.167-.121-.216-.406-.002-.62l1.8-1.8a3.5 3.5 0 0 0 4.572-.328l1.414-1.415a.5.5 0 0 0 0-.707l-.707-.707 1.559-1.563a.5.5 0 1 0-.708-.706l-1.559 1.562-1.414-1.414 1.56-1.562a.5.5 0 1 0-.707-.706l-1.56 1.56-.707-.706a.5.5 0 0 0-.707 0L5.318 5.975a3.5 3.5 0 0 0-.328 4.571l-1.8 1.8c-.58.58-.62 1.6.121 2.137A8 8 0 1 0 0 8a.5.5 0 0 0 1 0"/>
          </svg>
        </div>
        <h2 className="text-5xl font-bold mb-4">Powerful JavaScript plugins without jQuery</h2>
        <p className="text-xl mb-4">Add toggleable hidden elements, modals and offcanvas menus, popovers and tooltips, and so much more—all without jQuery. Bootstrap's JavaScript is HTML-first, meaning most plugins are added with <code className="text-red-400 text-[17.5px]">data</code> attributes in your HTML. Need more control? Include individual plugins programmatically.</p>
        <div className="group font-semibold text-xl text-blue-400 inline-flex items-center">
          <div className="group-hover:brightness-125 group-hover:cursor-pointer underline underline-offset-4">
            Learn more about Bootstrap JavaScript
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-right inline-block w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-12">
        <div className="mb-4">
          <h3 className="text-3xl mb-2 font-semibold">Data attribute API</h3>
          <p className="mb-4">Why write more JavaScript when you can write HTML? Nearly all of Bootstrap's JavaScript plugins feature a first-class data API, allowing you to use JavaScript just by adding <code className="text-red-400 text-sm">data</code> attributes.</p>
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
          <p className="">
            Learn more about <a href="#" className="text-blue-400 underline hover:brightness-125">our JavaScript as modules</a> and <a href="#" className="text-blue-400 underline hover:brightness-125">using the programmatic API</a>.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-3xl mb-2 font-semibold">Comprehensive set of plugins</h3>
            <p className="mb-4">Bootstrap features a dozen plugins that you can drop into any project. Drop them in all at once, or choose just the ones you need.</p>
            <hr className="my-4 border-gray-500"/>
            <div href="#" className="grid grid-cols-2 gap-x-10 gap-y-6">
              <a href="#" className="block">
                <h4 className="text-xl font-semibold">
                  Alert
                </h4>
                <p className="text-sm">
                  Show and hide alert messages to your users.
                </p>
              </a>
              <a href="#" className="block">
                <h4 className="text-xl font-semibold">
                  Button
                </h4>
                <p className="text-sm">
                  Programmatically control the active state for buttons.
                </p>
              </a>

              <a href="#" className="block">
                <h4 className="text-xl font-semibold">
                  Carousel
                </h4>
                <p className="text-sm">
                  Add slideshows to any page, including support for crossfade.
                </p>
              </a>
              <a href="#" className="block">
                <h4 className="text-xl font-semibold">
                  Collapse
                </h4>
                <p className="text-sm">
                  Expand and collapse areas of content, or create accordions.
                </p>
              </a>

              <a href="#" className="block">
                <h4 className="text-xl font-semibold">
                  Dropdown
                </h4>
                <p className="text-sm">
                  Create menus of links, actions, forms, and more.
                </p>
              </a>
              <a href="#" className="block">
                <h4 className="text-xl font-semibold">
                  Modal
                </h4>
                <p className="text-sm">
                  Add flexible and responsive dialogs to your project.
                </p>
              </a>

              <a href="#" className="block">
                <h4 className="text-xl font-semibold">
                  Offcanvas
                </h4>
                <p className="text-sm">
                  Build and toggle hidden sidebars into any page.
                </p>
              </a>
              <a href="#" className="block">
                <h4 className="text-xl font-semibold">
                  Popover
                </h4>
                <p className="text-sm">
                  Create custom overlays. Built on Popper.
                </p>
              </a>
              
              <a href="#" className="block">
                <h4 className="text-xl font-semibold">
                  Scrollspy
                </h4>
                <p className="text-sm">
                  Automatically update active nav links based on page scroll.
                </p>
              </a>
              <a href="#" className="block">
                <h4 className="text-xl font-semibold">
                  Tab
                </h4>
                <p className="text-sm">
                  Allow Bootstrap nav components to toggle contents.
                </p>
              </a>

              <a href="#" className="block">
                <h4 className="text-xl font-semibold">
                  Toast
                </h4>
                <p className="text-sm">
                  Show and hide notifications to your visitors.
                </p>
              </a>
              <a href="#" className="block">
                <h4 className="text-xl font-semibold">
                  Tooltip
                </h4>
                <p className="text-sm">
                  Replace browser tooltips with custom ones. Built on Popper.
                </p>
              </a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default JQuery