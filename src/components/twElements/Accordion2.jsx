import {
  Collapse,
  initTWE,
} from "tw-elements";

initTWE({ Collapse });

const Accordion2 = () => {
  return (
    <>
      <div id="accordionFlushExample1" className="mb-4">
        <div
          className="rounded-none border border-e-0 border-s-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
          <h2 className="mb-0" id="flush-headingOne1">
            <button
              className="focus:ring group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-blue-800 [&:not([data-twe-collapse-collapsed])]:text-blue-300 [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
              type="button"
              data-twe-collapse-init
              data-twe-target="#flush-collapseOne1"
              aria-expanded="false"
              aria-controls="flush-collapseOne1">
              Flush #1 expandir y leer notas
              <span
                className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseOne1"
            className="!visible border-0"
            data-twe-collapse-item
            data-twe-collapse-show
            aria-labelledby="flush-headingOne1"
            data-twe-parent="#accordionFlushExample1">
            <div className="px-5 py-4">
              Notar que si tenemos 2 acordiones sean Flush o BasiExample es probable que tengamos comportamientos impredecibles porque comparten los id's genéricos. Primero hay que cambiar los nombres de los id's o guardarlo en una variables con react y pasarlo como props. Además falta cambiar el id y target de cada button que representa al acordión o se abrirán los 2 acordiones Flush xD. Presionar ctrl F e ingresar flush-collapseThree, notar que agregué un flush-collapseThree2 para que el segundo acordión no se despliegue
              <code>.accordion-flush</code> class. This is the first item's
              accordion body.
            </div>
          </div>
        </div>
        <div
          className="rounded-none border border-e-0 border-s-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
          <h2 className="mb-0" id="flush-headingTwo1">
            <button
              className="focus:ring group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-blue-800 [&:not([data-twe-collapse-collapsed])]:text-blue-300 [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
              type="button"
              data-twe-collapse-init
              data-twe-collapse-collapsed
              data-twe-target="#flush-collapseTwo1"
              aria-expanded="false"
              aria-controls="flush-collapseTwo1">
              Accordion Item #2
              <span
                className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseTwo1"
            className="!visible hidden border-0"
            data-twe-collapse-item
            aria-labelledby="flush-headingTwo1"
            data-twe-parent="#accordionFlushExample1">
            <div className="px-5 py-4">
              Placeholder content for this accordion, which is intended to
              demonstrate the
              <code>.accordion-flush</code> class. This is the second item's
              accordion body. Let's imagine this being filled with some actual
              content.
            </div>
          </div>
        </div>
        <div
          className="rounded-none border border-b-0 border-e-0 border-s-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
          <h2 className="mb-0" id="flush-headingThree1">
            <button
              className="focus:ring group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-blue-800 [&:not([data-twe-collapse-collapsed])]:text-blue-300 [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
              type="button"
              data-twe-collapse-init
              data-twe-collapse-collapsed
              data-twe-target="#flush-collapseThree1"
              aria-expanded="false"
              aria-controls="flush-collapseThree1">
              Accordion Item #3
              <span
                className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseThree1"
            className="!visible hidden"
            data-twe-collapse-item
            aria-labelledby="flush-headingThree1"
            data-twe-parent="#accordionFlushExample1">
            <div className="px-5 py-4">
              Placeholder content for this accordion, which is intended to
              demonstrate the
              <code>.accordion-flush</code> class. This is the third item's
              accordion body. Nothing more exciting happening here in terms of
              content, but just filling up the space to make it look, at least
              at first glance, a bit more representative of how this would look
              in a real-world application.
            </div>
          </div>
        </div>
      </div>

      <div id="accordionFlushExample2" className="mb-4">
        <div
          className="rounded-none border border-e-0 border-s-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
          <h2 className="mb-0" id="flush-headingOne2">
            <button
              className="focus:ring-2 focus:ring-red-300 group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-red-700 [&:not([data-twe-collapse-collapsed])]:text-white [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
              type="button"
              data-twe-collapse-init
              data-twe-target="#flush-collapseOne2"
              aria-expanded="false"
              aria-controls="flush-collapseOne2">
              Flush #2 Item #1
              <span
                className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseOne2"
            className="!visible border-0"
            data-twe-collapse-item
            data-twe-collapse-show
            aria-labelledby="flush-headingOne2"
            data-twe-parent="#accordionFlushExample2">
            <div className="px-5 py-4">
              Placeholder content for this accordion, which is intended to
              demonstrate the
              <code>.accordion-flush</code> class. This is the first item's
              accordion body.
            </div>
          </div>
        </div>
        <div
          className="rounded-none border border-e-0 border-s-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
          <h2 className="mb-0" id="flush-headingTwo2">
            <button
              className="focus:ring-2 focus:ring-red-300 group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-red-700 [&:not([data-twe-collapse-collapsed])]:text-white [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
              type="button"
              data-twe-collapse-init
              data-twe-collapse-collapsed
              data-twe-target="#flush-collapseTwo2"
              aria-expanded="false"
              aria-controls="flush-collapseTwo2">
              Accordion Item #2
              <span
                className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseTwo2"
            className="!visible hidden border-0"
            data-twe-collapse-item
            aria-labelledby="flush-headingTwo2"
            data-twe-parent="#accordionFlushExample2">
            <div className="px-5 py-4">
              Placeholder content for this accordion, which is intended to
              demonstrate the
              <code>.accordion-flush</code> class. This is the second item's
              accordion body. Let's imagine this being filled with some actual
              content.
            </div>
          </div>
        </div>
        <div
          className="rounded-none border border-b-0 border-e-0 border-s-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
          <h2 className="mb-0" id="flush-headingThree2">
            <button
              className="focus:ring-2 focus:ring-red-300 group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-red-700 [&:not([data-twe-collapse-collapsed])]:text-white [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
              type="button"
              data-twe-collapse-init
              data-twe-collapse-collapsed
              data-twe-target="#flush-collapseThree2"
              aria-expanded="false"
              aria-controls="flush-collapseThree2">
              Accordion Item #3
              <span
                className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseThree2"
            className="!visible hidden"
            data-twe-collapse-item
            aria-labelledby="flush-headingThree2"
            data-twe-parent="#accordionFlushExample2">
            <div className="px-5 py-4">
              Placeholder content for this accordion, which is intended to
              demonstrate the
              <code>.accordion-flush</code> class. This is the third item's
              accordion body. Nothing more exciting happening here in terms of
              content, but just filling up the space to make it look, at least
              at first glance, a bit more representative of how this would look
              in a real-world application.
            </div>
          </div>
        </div>
      </div>

      <div id="accordionExample" className="mb-4">
        <div
          className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
          <h2 className="mb-0" id="headingOne">
            <button
              className="focus:ring-2 focus:ring-green-300 group relative flex w-full items-center rounded-t-lg border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-green-700 [&:not([data-twe-collapse-collapsed])]:text-white [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
              type="button"
              data-twe-collapse-init
              data-twe-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne">
              Basic Example #1
              <span
                className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="!visible"
            data-twe-collapse-item
            data-twe-collapse-show
            aria-labelledby="headingOne"
            data-twe-parent="#accordionExample">
            <div className="px-5 py-4">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div
          className="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
          <h2 className="mb-0" id="headingTwo">
            <button
              className="focus:ring-2 focus:ring-green-300 group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-green-700 [&:not([data-twe-collapse-collapsed])]:text-white [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
              type="button"
              data-twe-collapse-init
              data-twe-collapse-collapsed
              data-twe-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo">
              Accordion Item #2
              <span
                className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="!visible hidden"
            data-twe-collapse-item
            aria-labelledby="headingTwo"
            data-twe-parent="#accordionExample">
            <div className="px-5 py-4">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div
          className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
          <h2 className="accordion-header mb-0" id="headingThree">
            <button
              className="focus:ring-2 focus:ring-green-300 data-[twe-collapse-collapsed] group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none data-[twe-collapse-collapsed]:rounded-b-lg dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-green-700 [&:not([data-twe-collapse-collapsed])]:text-white [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary  dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
              type="button"
              data-twe-collapse-init
              data-twe-collapse-collapsed
              data-twe-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree">
              Accordion Item #3
              <span
                className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="!visible hidden"
            data-twe-collapse-item
            aria-labelledby="headingThree"
            data-twe-parent="#accordionExample">
            <div className="px-5 py-4">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Accordion2