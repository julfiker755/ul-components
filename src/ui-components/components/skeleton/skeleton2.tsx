import Box from '@/ui-components/shared/Box'
import {Skeleton} from './index'




export default function Skeleton2(){
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
<div  className='flex justify-center flex-wrap  gap-3'>
    <Skeleton className='w-full h-[20px]'/>
    <Skeleton className='w-full h-[20px]'/>
    <Skeleton className='w-full h-[20px]'/>
    <Skeleton className='w-full h-[20px]'/>
</div>
})}
`
{/* <Skeleton className='w-full h-[50px]'/> */}
  return (
    <Box code={buttonCode}>
    <div  className='flex justify-center flex-wrap  gap-3'>
        <Skeleton className='w-full                      h-[20px]'/>
        <Skeleton className='w-full h-[20px]'/>
        <Skeleton className='w-full h-[20px]'/>
        <Skeleton className='w-full h-[20px]'/>
    </div>
    </Box>
  )
}

