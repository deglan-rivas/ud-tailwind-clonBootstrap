import React, { useState } from "react";
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";

export default function Modal2() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <TERipple rippleColor="white">
        <button
          type="button"
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          onClick={() => setShowModal(true)}
        >
          Launch demo modal
        </button>
      </TERipple>

      {/* <!-- Modal --> */}
      {/* <TEModal show={showModal} setShow={setShowModal}> */}
      <TEModal show={showModal} setShow={setShowModal} scrollable>
      {/* <TEModal show={showModal} setShow={setShowModal} staticBackdrop> */}
        <TEModalDialog className="mt-0" size="" position="bottom-left">
          <TEModalContent className="mt-0">
            <TEModalHeader className="py-5 bg-green-300 uppercase flex">
              {/* <!--Modal title--> */}
              <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200 flex-1 flex justify-center">
                Modal title
              </h5>
              {/* <!--Close button--> */}
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none text-violet-600"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </TEModalHeader>
            {/* <!--Modal body--> */}
            <TEModalBody className="max-h-[30px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, est eligendi labore, nulla impedit nemo eum aliquid error, inventore autem magnam sequi laborum iure totam atque rerum unde officiis voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod laborum velit neque necessitatibus obcaecati! Ullam similique magni dolorum magnam ex? Repellat quis ipsa eveniet harum dolore omnis ipsum, cum rerum.</TEModalBody>
            <TEModalBody className="">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, tempora qui! Tempore accusantium fuga temporibus, recusandae, expedita optio molestiae animi maxime autem vero laboriosam unde harum assumenda, blanditiis voluptatum voluptatem.
              </p>
              {/* <p className="h-[400px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cumque, atque maiores dolorem cupiditate perspiciatis ipsam, consequuntur labore enim, repellendus eos iusto aperiam magni dignissimos fuga mollitia provident nobis doloribus!
              </p> */}
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At labore aut molestias sequi cupiditate perferendis quisquam quasi sint, repellendus necessitatibus, deleniti quos ad nesciunt iusto quidem quam, distinctio eius accusantium.
              </p>
            </TEModalBody>
            {/* <TEModalBody className="min-h-[1500px]">Modal body text goes here.</TEModalBody> */}
            <TEModalFooter>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="inline-block rounded bg-red-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-green-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </TERipple>
              <TERipple rippleColor="light" className="">
                <button
                  type="button"
                  className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Save changes usar el ! si necesario
                </button>
              </TERipple>
            </TEModalFooter>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>


      
    </div>
  );
}