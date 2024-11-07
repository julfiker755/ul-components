import React from 'react'
import InterfaceHeading, { ItemCollectionProps } from '@/ui-components/shared/interface-heading'
import { elementItemProps } from '@/types'
import modal1 from '@/ui-components/components/modal/modal1'





function Modal() {
 const ItemCollection:ItemCollectionProps={
   title:"Tailwind CSS Modal ",
   text:"The modal component is designed to display a modal window in a visually appealing manner, making it easy to interact with the content.",
   subMenu:[
     {title:"example1", href:"/components/file#modal1"},
   ]
 }
  const elementItem:elementItemProps = [
     {id:"modal1",element:modal1},
  ]
  return (
    <InterfaceHeading ItemCollection={ItemCollection}>
             {elementItem.map((item) => (
              <div id={item.id} key={item.id}><item.element /></div>
             ))}
    </InterfaceHeading>
  )
}


export default Modal