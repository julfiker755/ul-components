import React from 'react'
import { FaCheck } from "react-icons/fa6";


export default function PackageSkeleton() {
  return (
     <div>
          <div className='text-2xl font-semibold w-fit underline mb-2 underline-offset-8'>Skeleton Package List</div>
          <ul>
              <li className='flex gap-x-2 items-center'>< FaCheck size={13}/> React Loading Skeleton {" "}
              <a target='_blank' className='text-sky-500/100 hover:border-b-[1px] hover:border-sky-500/100' href='https://www.npmjs.com/package/react-loading-skeleton'>Click hare</a></li>
          </ul>
     </div>
  )
}
