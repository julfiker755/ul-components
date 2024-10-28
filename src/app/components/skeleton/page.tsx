import React from 'react'
import { elementItemProps } from '@/types'
import InterfaceHeading, { ItemCollectionProps } from '@/ui-components/shared/interface-heading'
import Skeleton1 from '@/ui-components/components/skeleton/skeleton1'
import Skeleton2 from '@/ui-components/components/skeleton/skeleton2'
import Skeleton3 from '@/ui-components/components/skeleton/skeleton3'
import PackageSkeleton from '@/ui-components/components/skeleton/package'




function Skeleton() {
 const ItemCollection:ItemCollectionProps={
   title:"Tailwind CSS Skeleton",
   text:"The skeleton component serves as an alternative loading indicator to the spinner by simulating the layout of the content being loaded, such as cards or tables",
   subMenu:[
     {title:"npm Package", href:"/components/skeleton#package"},
   ]
 }
  const elementItem:elementItemProps = [
     {id:"default", element:Skeleton1},
     {id:"default2", element:Skeleton2},
     {id:"default3", element:Skeleton3},
     {id:"package", element:PackageSkeleton},
  ]
  return (
    <InterfaceHeading ItemCollection={ItemCollection}>
             {elementItem.map((item) => (
              <div id={item.id} key={item.id}><item.element /></div>
             ))}
    </InterfaceHeading>
  )
}

export default Skeleton