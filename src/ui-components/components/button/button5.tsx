import Box from '@/ui-components/shared/Box'
import React from 'react'
import { FaTwitter,FaGithub,FaYoutube,FaFacebookF} from "react-icons/fa";

export default function Button5() {
const buttonCode=`
// import { FaTwitter,FaGithub,FaYoutube,FaFacebookF, FaGoogle } from "react-icons/fa";

<ul className='flex gap-2 items-center w-fit'>
    <li className="text-white bg-[#3b5998]  hover:bg-[#3b5998]/90 cursor-pointer w-10 h-10 rounded-md grid place-items-center"><FaFacebookF size={17}/></li>
    <li className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 cursor-pointer w-10 h-10 rounded-md grid place-items-center"><FaTwitter size={17}/></li>
    <li className="text-white bg-[#24292F] hover:bg-[#24292F]/90 cursor-pointer w-10 h-10 rounded-md grid place-items-center"><FaGithub size={17}/></li>
    <li className="text-white bg-red-700 hover:bg-red-700/90 cursor-pointer w-10 h-10 rounded-md grid place-items-center"><FaYoutube size={17}/></li>
    </ul>
<ul className='flex gap-2 items-center w-fit'>
    <li className="text-white bg-[#3b5998]  hover:bg-[#3b5998]/90 cursor-pointer w-10 h-10 rounded-full grid place-items-center"><FaFacebookF size={17}/></li>
    <li className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 cursor-pointer w-10 h-10 rounded-full grid place-items-center"><FaTwitter size={17}/></li>
    <li className="text-white bg-[#24292F] hover:bg-[#24292F]/90 cursor-pointer w-10 h-10 rounded-full grid place-items-center"><FaGithub size={17}/></li>
    <li className="text-white bg-red-700 hover:bg-red-700/90 cursor-pointer w-10 h-10 rounded-full grid place-items-center"><FaYoutube size={17}/></li>
</ul>
`
  return (
    <Box code={buttonCode}>
    <div className='flex flex-wrap justify-center gap-x-12 space-y-2 md:space-y-0'>
    <ul className='flex gap-2 items-center w-fit'>
        <li className="text-white bg-[#3b5998]  hover:bg-[#3b5998]/90 cursor-pointer w-10 h-10 rounded-md grid place-items-center"><FaFacebookF size={17}/></li>
        <li className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 cursor-pointer w-10 h-10 rounded-md grid place-items-center"><FaTwitter size={17}/></li>
        <li className="text-white bg-[#24292F] hover:bg-[#24292F]/90 cursor-pointer w-10 h-10 rounded-md grid place-items-center"><FaGithub size={17}/></li>
        <li className="text-white bg-red-700 hover:bg-red-700/90 cursor-pointer w-10 h-10 rounded-md grid place-items-center"><FaYoutube size={17}/></li>
    </ul>
    <ul className='flex gap-2 items-center w-fit'>
        <li className="text-white bg-[#3b5998]  hover:bg-[#3b5998]/90 cursor-pointer w-10 h-10 rounded-full grid place-items-center"><FaFacebookF size={17}/></li>
        <li className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 cursor-pointer w-10 h-10 rounded-full grid place-items-center"><FaTwitter size={17}/></li>
        <li className="text-white bg-[#24292F] hover:bg-[#24292F]/90 cursor-pointer w-10 h-10 rounded-full grid place-items-center"><FaGithub size={17}/></li>
        <li className="text-white bg-red-700 hover:bg-red-700/90 cursor-pointer w-10 h-10 rounded-full grid place-items-center"><FaYoutube size={17}/></li>
    </ul>

    </div>
    </Box>
  )
}