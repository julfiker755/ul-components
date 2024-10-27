import Button1 from '@/ui-components/components/button/button1'
import Button2 from '@/ui-components/components/button/button2'
import Button3 from '@/ui-components/components/button/button3'
import React from 'react'

function Button() {
  return (
    <div>
        <h1 className='text-3xl font-semibold'>Tailwind CSS Buttons</h1>
         <div className=''>
             <Button1/>
             <Button2/>
             <Button3/>
         </div>
    </div>
  )
}

export default Button