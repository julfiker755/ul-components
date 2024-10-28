import Box from '@/ui-components/shared/Box'
import {Skeleton} from './index'




export default function Skeleton3(){
const buttonCode=`
npm i clsx
npm i tailwind-merge

// folder create=lib>utils
//step-1 

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


//step-2
import { cn } from '@/lib/utils';

  export const Skeleton({
    className,
    ...props
  })=> {
    return (
      (<div
        className={cn("animate-pulse rounded-md bg-slate-200", className)}
        {...props} />)
    );
  }
  

// step-3
 {[...Array(3).keys()].map((_,idx)=>{
       return (
        <div key={idx} className="border w-[260px] overflow-hidden p-2 rounded-md">
        <Skeleton className='w-full h-[150px]'/>
       <div>
         <div className="py-3">
         <Skeleton className='w-[150px] h-[22px] rounded-md'/>
         <Skeleton className='w-[100px] mt-1 h-[15px]'/>
         </div>
         <div className="flex justify-between">
         <Skeleton className='py-4 px-10 '/>
         <Skeleton className='py-4 px-10 '/>
         </div>
       </div>
        </div>
       )
})}
`

  return (
    <Box code={buttonCode}>
    <div  className='flex justify-center flex-wrap  gap-3'>
    { Array.from({ length: 3 }, (_, idx) => (
        <div key={idx} className="border w-[260px] overflow-hidden p-2 rounded-md">
          <Skeleton className='w-full h-[150px]'/>
          <div>
            <div className="py-3">
              <Skeleton className='w-[150px] h-[22px] rounded-md'/>
              <Skeleton className='w-[100px] mt-1 h-[15px]'/>
            </div>
            <div className="flex justify-between">
              <Skeleton className='py-4 px-10'/>
              <Skeleton className='py-4 px-10'/>
            </div>
          </div>
        </div>
      ))}
    </div>
    </Box>
  )
}