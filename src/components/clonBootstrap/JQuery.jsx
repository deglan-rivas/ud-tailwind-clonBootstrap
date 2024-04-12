import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shadcn/ui/dropdown-menu"

import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Clipboard from './subcomponents/Clipboard';

const JQuery = () => {
  const code_data = `
  <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown
    </button>
    <ul class="dropdown-menu">
      <li><button class="dropdown-item" type="button">Dropdown item</button></li>
      <li><button class="dropdown-item" type="button">Dropdown item</button></li>
      <li><button class="dropdown-item" type="button">Dropdown item</button></li>
    </ul>
  </div>
  `
  return (
    <section className="max-w-[1400px] w-full px-6 mx-auto mb-12 pb-12">
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

          <div className="text-sm rounded-md mb-4 p-6 overflow-hidden border border-gray-600 flex justify-between bg-transparent">
            <DropdownMenu>
              <DropdownMenuTrigger className="py-2 px-4 rounded-md text-base !bg-blue-600 hover:bg-blue-700 flex items-center justify-between gap-2">
                Dropdown
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-2 h-2 bi bi-caret-down-fill group-hover:brightness-200 group-hover:text-white cursor-pointer" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="border-gray-600 bg-[#202529] text-white">
                <DropdownMenuItem>Dropdown item</DropdownMenuItem>
                <DropdownMenuItem>Dropdown item</DropdownMenuItem>
                <DropdownMenuItem>Dropdown item</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="text-sm rounded-md mb-4 overflow-hidden border border-gray-600 flex justify-between bg-[#1c1c21]">
            <SyntaxHighlighter language='htmlbars' style={stackoverflowDark}>
              {code_data}
            </SyntaxHighlighter>
            <div className='flex items-center'>
              <Clipboard content={code_data}/>
            </div>
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