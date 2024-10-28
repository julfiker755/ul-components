import Box from '@/ui-components/shared/Box'
import React from 'react'

export default function Button3() {
const buttonCode=`
<button className="text-white bg-indigo-200  font-medium rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5 cursor-not-allowed">Default</button>
<button disabled className="text-white bg-green-600 disabled:bg-green-400  font-medium rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">Green</button>
<button disabled  className="text-white bg-indigo-500 disabled:bg-indigo-400 font-medium rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">Indigo</button>
<button disabled className="text-white bg-yellow-600 disabled:bg-yellow-400  font-medium rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">Yellow</button>
<button disabled className="text-white bg-rose-600 disabled:bg-rose-400 font-medium rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">Rose</button>
<button disabled className="text-white bg-orange-700 disabled:bg-orange-400 font-medium rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">Orange</button>
<button disabled className="text-white bg-fuchsia-600 disabled:bg-fuchsia-400  font-medium rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">Fuchsia</button>
`
  return (
    <Box code={buttonCode}>
    <div className='text-center space-x-4 space-y-2 md:space-y-0'>
       <button className="text-white bg-indigo-200  font-medium rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5 cursor-not-allowed">Default</button>
       <button disabled className="text-white bg-green-600 disabled:bg-green-400  font-medium rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">Green</button>
       <button disabled  className="text-white bg-indigo-500 disabled:bg-indigo-400 font-medium rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">Indigo</button>
       <button disabled className="text-white bg-yellow-600 disabled:bg-yellow-400  font-medium rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">Yellow</button>
       <button disabled className="text-white bg-rose-600 disabled:bg-rose-400 font-medium rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">Rose</button>
       <button disabled className="text-white bg-orange-700 disabled:bg-orange-400 font-medium rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">Orange</button>
       <button disabled className="text-white bg-fuchsia-600 disabled:bg-fuchsia-400  font-medium rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">Fuchsia</button>
    </div>
    </Box>
  )
}