import Link from 'next/link';
import React from 'react'

export interface ItemCollectionProps {
  title: string;
  text: string;
  subMenu?: { title: string,href?:string }[];
}

export default function InterfaceHeading({ children, ItemCollection }: { children: React.ReactNode; ItemCollection:ItemCollectionProps}) {
  return (
    <>
        <div className='max-w-3xl'>
            <h1 className='text-3xl font-semibold'>{ItemCollection.title}</h1>
            <p>{ItemCollection.text}</p>
        </div>
      <div className='grid grid-cols-6 gap-x-10'>
        <div className='col-span-6 lg:col-span-5'>{children}</div>
        <div className='hidden lg:block'>
           <h1 className="font-medium">On this page</h1>
           <ul className='space-y-1'>
             {ItemCollection?.subMenu?.map((item, idx) => (<li key={idx}>
               <Link href={item.href || ""}>{item.title}</Link>
             </li>))}
          </ul>
        </div>
     </div>
    </>
  )
}
