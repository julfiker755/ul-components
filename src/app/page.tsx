import Link from 'next/link'
import React from 'react'



function Rootpage() {
  return (
    <div>
      <Link href="/components/button">
      <button className='bg-[green] py-2 px-4 text-white'>components</button>
      </Link>
    </div>
  )
}

export default Rootpage