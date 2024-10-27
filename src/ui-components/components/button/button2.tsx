import Box from '@/ui-components/shared/Box'


export default function Button2() {
const buttonCode=`
<button className="relative overflow-hidden h-10 w-24  origin-bottom transform rounded-md border-[1px] border-green-600  text-green-600 before:absolute before:bottom-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:bottom-0 hover:before:-z-10 hover:before:h-full hover:before:bg-green-600 ">Green</button>
<button className="relative overflow-hidden h-10 w-24  origin-top transform rounded-md border-[1px] border-sky-500/100  text-sky-500/100 before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500/100 ">Default</button>
<button className="relative overflow-hidden h-10 w-24  origin-left transform rounded-md border-[1px] border-indigo-500  text-indigo-500 before:absolute before:left-0 before:top-0 before:block before:h-full before:w-0 before:duration-500  hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:w-full hover:before:bg-indigo-500">Indigo</button>
<button className="relative overflow-hidden h-10 w-24  origin-right transform rounded-md border-[1px] border-yellow-600  text-yellow-600 before:absolute before:right-0 before:top-0 before:block before:h-full before:w-0 before:duration-500  hover:text-white hover:before:absolute hover:before:right-0 hover:before:-z-10 hover:before:w-full hover:before:bg-yellow-600">Indigo</button>
<button className="relative overflow-hidden h-10 w-24  origin-top transform rounded-md border-[1px] border-rose-600  text-rose-600 before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-rose-600">Rose</button>
<button className="relative overflow-hidden h-10 w-24  origin-top-right transform rounded-md border-[1px] border-orange-700  text-orange-700 before:absolute before:right-0 before:top-0 before:block before:h-full before:w-0 before:duration-500  hover:text-white hover:before:absolute hover:before:top-0 hover:before:-z-10 hover:before:w-full hover:before:bg-orange-700 ">Orange</button>
`
  return (
    <Box code={buttonCode}>
    <div className='text-center space-x-4 space-y-2 md:space-y-0'>
    <button className="relative overflow-hidden h-10 w-24  origin-top transform rounded-md border-[1px] border-sky-500/100  text-sky-500/100 before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500/100 ">Default</button>
    <button className="relative overflow-hidden h-10 w-24  origin-bottom transform rounded-md border-[1px] border-green-600  text-green-600 before:absolute before:bottom-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:bottom-0 hover:before:-z-10 hover:before:h-full hover:before:bg-green-600 ">Green</button>
    <button className="relative overflow-hidden h-10 w-24  origin-left transform rounded-md border-[1px] border-indigo-500  text-indigo-500 before:absolute before:left-0 before:top-0 before:block before:h-full before:w-0 before:duration-500  hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:w-full hover:before:bg-indigo-500">Indigo</button>
    <button className="relative overflow-hidden h-10 w-24  origin-right transform rounded-md border-[1px] border-yellow-600  text-yellow-600 before:absolute before:right-0 before:top-0 before:block before:h-full before:w-0 before:duration-500  hover:text-white hover:before:absolute hover:before:right-0 hover:before:-z-10 hover:before:w-full hover:before:bg-yellow-600">Indigo</button>
    <button className="relative overflow-hidden h-10 w-24  origin-top transform rounded-md border-[1px] border-rose-600  text-rose-600 before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-rose-600">Rose</button>
    <button className="relative overflow-hidden h-10 w-24  origin-top-right transform rounded-md border-[1px] border-orange-700  text-orange-700 before:absolute before:right-0 before:top-0 before:block before:h-full before:w-0 before:duration-500  hover:text-white hover:before:absolute hover:before:top-0 hover:before:-z-10 hover:before:w-full hover:before:bg-orange-700 ">Orange</button>
    </div>
    </Box>
  )
}
