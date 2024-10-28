import React from 'react'
import { elementItemProps } from '@/types'
import InterfaceHeading, { ItemCollectionProps } from '@/ui-components/shared/interface-heading'
import Button1 from '@/ui-components/components/button/button1'
import Button2 from '@/ui-components/components/button/button2'
import Button3 from '@/ui-components/components/button/button3'
import Button4 from '@/ui-components/components/button/button4'
import Button5 from '@/ui-components/components/button/button5'
import Button6 from '@/ui-components/components/button/button6'



function Button() {
 const ItemCollection:ItemCollectionProps={
   title:"Tailwind CSS Buttons",
   text:"Use the button component across forms, links, social logins, and payment options, with support for various styles, colors, sizes, gradients, and shadows.",
   subMenu:[
     {title:"Default button", href:"/components/button#default"},
     {title:"Hover effect", href:"/components/button#effect"},
     {title:"Disabled button", href:"/components/button#disabled"},
     {title:"Social button", href:"/components/button#social"},
     {title:"Loading", href:"/components/button#loading"},
   ]
 }
  const elementItem:elementItemProps = [
     {id:"default", element:Button1 },
     {id:"effect", element:Button2 },
     {id:"disabled", element:Button3 },
     {id:"social",element:Button4},
     {id:"social2",element:Button5},
     {id:"loading",element:Button6}
  ]
  return (
    <InterfaceHeading ItemCollection={ItemCollection}>
             {elementItem.map((item) => (
              <div id={item.id} key={item.id}><item.element /></div>
             ))}
    </InterfaceHeading>
  )
}

export default Button