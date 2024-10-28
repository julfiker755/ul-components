import Box from '@/ui-components/shared/Box'
import React from 'react'
import { FaTwitter,FaGithub,FaYoutube,FaFacebookF, FaGoogle } from "react-icons/fa";

export default function Button4() {
const buttonCode=`
// import { FaTwitter,FaGithub,FaYoutube,FaFacebookF, FaGoogle } from "react-icons/fa";

<button className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
    <FaFacebookF className='mx-1' size={14}/> Facebook
</button>
<button className="text-white  bg-[#1da1f2] hover:bg-[#1da1f2]/90  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
    <FaTwitter className='mx-1' size={16}/> Twitter
</button>
<button className="text-white  bg-[#24292F] hover:bg-[#24292F]/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
    <FaGithub className='mx-1' size={16}/> Github
</button>
<button className="text-white  bg-[#1da1f2] hover:bg-[#1da1f2]/90font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
    <FaGoogle  className='mx-1' size={16}/> Google
</button>
<button className="text-white  bg-red-700 hover:bg-red-700/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
    <FaYoutube className='mx-1' size={20}/> Youtube
</button>
`
  return (
    <Box code={buttonCode}>
    <div className='text-center space-x-4 space-y-2 md:space-y-0'>
    <button className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
      <FaFacebookF className='mx-1' size={14}/>
     Facebook
    </button>
    <button className="text-white  bg-[#1da1f2] hover:bg-[#1da1f2]/90  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
      <FaTwitter className='mx-1' size={16}/>
      Twitter
    </button>
    <button className="text-white  bg-[#24292F] hover:bg-[#24292F]/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
      <FaGithub className='mx-1' size={16}/>
      Github
    </button>
    <button className="text-white  bg-[#1da1f2] hover:bg-[#1da1f2]/90font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
      <FaGoogle  className='mx-1' size={16}/>
        Google
    </button>
    <button className="text-white  bg-red-700 hover:bg-red-700/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
      <FaYoutube className='mx-1' size={20}/>
        Youtube
    </button>
    </div>
    </Box>
  )
}