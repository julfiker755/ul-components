import Box from '@/ui-components/shared/Box'


export default function file1():JSX.Element{
const code=`
 <input type="file" className="text-gray-600 h-[35px] bg-white border  w-fit border-gray-200 rounded-md text-sm file:bg-gray-200 file:text-gray-700 file:px-4 file:h-full file:border-none file:cursor-pointer placeholder-gray-400/70" />
`
  return (
    <Box code={code}>
    <div  className='flex justify-center'>
       <input type="file" className="text-gray-600 h-[35px] bg-white border  w-fit border-gray-200 rounded-md text-sm file:bg-gray-200 file:text-gray-700 file:px-4 file:h-full file:border-none file:cursor-pointer placeholder-gray-400/70" />
    </div>
    </Box>
  )
}

