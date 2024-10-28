import Box from '@/ui-components/shared/Box'


export default function Button1(){
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
    <div  className='text-center space-x-4 space-y-2 md:space-y-0'>
       <button className="text-white bg-sky-500/100  font-medium rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">Default</button>
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
