import Box from '@/ui-components/shared/Box'


export default function file2():JSX.Element{
const code=`
<input type="file" className="block w-fit px-3 py-1  text-sm text-gray-600 bg-white border border-gray-200 rounded-md file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full  placeholder-gray-400/70 "/>
`
  return (
    <Box code={code}>
    <div  className='flex justify-center'>
       <input type="file" className="block w-fit px-3 py-1  text-sm text-gray-600 bg-white border border-gray-200 rounded-md file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full file:cursor-pointer  placeholder-gray-400/70 "/>
    </div>
    </Box>
  )
}

