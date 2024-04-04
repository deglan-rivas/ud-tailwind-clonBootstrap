import React from "react";
import { TETooltip } from "tw-elements-react";

const Tooltip = () => {
  return (
    <>
      <div className="p-12 mb-4">
        <div className="flex space-x-1">
          <TETooltip
            title="Tooltip on top"
            className="max-w-[160px] rounded bg-green-100 px-6 py-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
          >
            Tooltip on top
          </TETooltip>
          <TETooltip
            title="Tooltip on right xd"
            placement="right"
            className="max-w-[160px] rounded bg-red-100 px-6 py-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
          >
            Tooltip on right gaaa
          </TETooltip>
          <TETooltip
            title="Tooltip on bottom"
            placement="bottom"
            className="max-w-[180px] rounded bg-primary-100 px-6 py-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
          >
            Tooltip on bottom
          </TETooltip>
          <TETooltip
            title="Tooltip on left"
            placement="left"
            className="max-w-[160px] rounded bg-primary-100 px-6 py-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
          >
            Tooltip on left
          </TETooltip>
        </div>
      </div>
    </>
  )
}

export default Tooltip