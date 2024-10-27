import Box from '@/ui-components/shared/Box'
import React from 'react'

export default function Button3() {
const buttonCode=`
<button className="text-white bg-sky-500/100  font-medium rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">Default</button>
<button className="text-white bg-green-600  font-medium rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">Green</button>
<button className="text-white bg-indigo-500 font-medium rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">Indigo</button>
<button className="text-white bg-yellow-600  font-medium rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">Yellow</button>
<button className="text-white bg-rose-600  font-medium rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">Rose</button>
<button className="text-white bg-orange-700  font-medium rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">Orange</button>
<button className="text-white bg-fuchsia-600  font-medium rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">Fuchsia</button>
`
  return (
    <Box code={buttonCode}>
    <div className='text-center space-x-4 space-y-2 md:space-y-0'>
       <button className="text-white bg-gradient-to-r  from-sky-500/100 via-sky-600/100 to-sky-500/100 hover:bg-gradient-to-br font-medium rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">Default</button>
       <button className="text-white bg-green-600  font-medium rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">Green</button>
       <button className="text-white bg-indigo-500 font-medium rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">Indigo</button>
       <button className="text-white bg-yellow-600  font-medium rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">Yellow</button>
       <button className="text-white bg-rose-600  font-medium rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">Rose</button>
       <button className="text-white bg-orange-700  font-medium rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">Orange</button>
       <button className="text-white bg-fuchsia-600  font-medium rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">Fuchsia</button>
    </div>
    </Box>
  )
}