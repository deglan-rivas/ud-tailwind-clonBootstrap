import {useState} from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shadcn/ui/tooltip"

const Clipboard = ({content}) => {
  const [copied, setCopied] = useState(false);

  return (
    <TooltipProvider delayDuration={700} skipDelayDuration={1000}>
      <Tooltip className="group">
        <TooltipTrigger>
          <button 
            className="bg-transparent px-2 py-2 rounded-md group hover:bg-transparent/20"
            onClick={() => {
              setCopied(true)
              navigator.clipboard.writeText(content)
              setTimeout(() => {
                setCopied(false)
              }, 2000);
            }}
          >
          {
            !copied ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-clipboard w-4 h-4 text-white group-hover:text-blue-500" viewBox="0 0 16 16">
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check2 w-4 h-4 text-white" viewBox="0 0 16 16">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
              </svg>
            )
          }
          </button>
          </TooltipTrigger>
          <TooltipContent className="">
          {
            !copied ? (
              <p>Copy to clipboard</p>
            ) : (
              <p className=''>Copied!</p>
            )
          }
          </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default Clipboard