import Box from '@/ui-components/shared/Box'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { PiCircleDashed } from "react-icons/pi";
import { ImSpinner6 } from "react-icons/im";
import { PiSpinnerGapBold } from "react-icons/pi";



export default function Button6(){
const buttonCode=`
// icons
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { PiCircleDashed } from "react-icons/pi";
import { ImSpinner6 } from "react-icons/im";
import { PiSpinnerGapBold } from "react-icons/pi";

<button className="text-white bg-sky-500/100 text-center inline-flex items-center  font-medium rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">
    <AiOutlineLoading3Quarters className='animate-spin mx-2'/>
    Loading...
</button>
<button className="text-white bg-[#24292F]  font-medium text-center inline-flex items-center rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">
    <PiCircleDashed size={18} className='animate-spin mx-2'/>
    Loading...
</button>
<button className="text-white bg-indigo-500 font-medium inline-flex items-center rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">
    <ImSpinner6 size={20} className='animate-spin mx-2'/>
    Loading...
</button>
<button className="text-white bg-rose-600  font-medium inline-flex items-center  rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">
    <PiSpinnerGapBold size={22} className='animate-spin mx-2'/>
    Loading...
</button>
`
  return (
    <Box code={buttonCode}>
    <div  className='flex justify-center flex-wrap  gap-3'>
    <button className="text-white bg-sky-500/100 text-center inline-flex items-center  font-medium rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">
         <AiOutlineLoading3Quarters className='animate-spin mx-2'/>
         Loading...
     </button>
    <button className="text-white bg-[#24292F]  font-medium text-center inline-flex items-center rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">
       <PiCircleDashed size={18} className='animate-spin mx-2'/>
      Loading...
    </button>
    <button className="text-white bg-indigo-500 font-medium inline-flex items-center rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">
        <ImSpinner6 size={20} className='animate-spin mx-2'/>
        Loading...
    </button>
    <button className="text-white bg-rose-600  font-medium inline-flex items-center  rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">
        <PiSpinnerGapBold size={22} className='animate-spin mx-2'/>
        Loading...
    </button>
    </div>
    </Box>
  )
}
