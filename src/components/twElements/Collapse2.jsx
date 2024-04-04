import React, { useState } from "react";
import { TECollapse, TERipple } from "tw-elements-react";

// Initialization for ES Users
import {
  Collapse,
  Ripple,
  initTWE,
} from "tw-elements";

initTWE({ Collapse, Ripple });

export default function Collapse2() {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  return (
    <div>
    <div className="w-full p-4">
      <TERipple rippleColor="light">
        <a
          className="inline-block rounded bg-primary mr-2 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-primary-600  focus:bg-primary-600  focus:outline-none focus:ring-0 active:bg-primary-700     "
          role="button"
          onClick={toggleShow}
        >
          Link
        </a>
      </TERipple>
      <TERipple rippleColor="light">
        <button
          type="button"
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-primary-600  focus:bg-primary-600  focus:outline-none focus:ring-0 active:bg-primary-700     "
          onClick={toggleShow}
        >
          Button
        </button>
      </TERipple>

      <TECollapse horizontal show={show} className="shadow-none" >
        <div className="block rounded-lg bg-white p-6  dark:bg-neutral-700 dark:text-neutral-50 border border-gray-300">
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </div>
      </TECollapse>

      {/* <TECollapse show={show} className="">
        <div className="block rounded-lg bg-white p-6  dark:bg-neutral-700 dark:text-neutral-50">
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </div>
      </TECollapse> */}
    </div>

    <div>
      <button
        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
        type="button"
        data-twe-collapse-init
        data-twe-target="#collapseWidthExample"
        data-twe-ripple-init
        data-twe-ripple-color="light"
        aria-expanded="false"
        aria-controls="collapseWidthExample">
        Toggle width collapse
      </button>
      <div
        className="!visible hidden w-full"
        data-twe-collapse-item
        data-twe-collapse-horizontal
        id="collapseWidthExample">
        <div>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </div>
    </div>

    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus repudiandae, expedita similique unde iusto assumenda maiores debitis quibusdam animi vero commodi voluptatibus, harum voluptas dolor laborum tenetur amet? Praesentium, quo!</p>
    </div>
  );
}