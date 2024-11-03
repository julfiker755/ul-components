import React from 'react'
import InterfaceHeading, { ItemCollectionProps } from '@/ui-components/shared/interface-heading'
import { elementItemProps } from '@/types'
import file1 from '@/ui-components/components/file/file1'
import file2 from '@/ui-components/components/file/file2'
import file3 from '@/ui-components/components/file/file3'
import File4 from '@/ui-components/components/file/file4'





function Files() {
 const ItemCollection:ItemCollectionProps={
   title:"Tailwind CSS File Input",
   text:"The files component is designed to display a collection of files in a visually appealing manner, making it easy to browse and manage files.",
   subMenu:[
     {title:"example1", href:"/components/file#file1"},
     {title:"example2", href:"/components/file#file2"},
     {title:"example3", href:"/components/file#file3"},
     {title:"example4", href:"/components/file#file4"},
   ]
 }
  const elementItem:elementItemProps = [
     {id:"file1",element:file1},
     {id:"file2",element:file2},
     {id:"file3",element:file3},
     {id:"file4",element:File4}
  ]
  return (
    <InterfaceHeading ItemCollection={ItemCollection}>
             {elementItem.map((item) => (
              <div id={item.id} key={item.id}><item.element /></div>
             ))}
    </InterfaceHeading>
  )
}


export default Files