'use client';
import {useState } from 'react';
import Highlighter from './CodeBox';
// import { MdSmartphone } from "react-icons/md";



interface BoxProps {
  children: React.ReactNode;
  code: string; 
}

export default function Box({ children, code }: BoxProps) {
    const [tabNum, setTabNum] = useState<number>(0);
    const [size, setSize] = useState<string>('w-full mx-auto');

    const devicesMenu = [
        { label: "sm", value:"sm:max-w-xs mx-auto"},
        { label: "md", value:"md:max-w-md mx-auto"},
        { label: "xl", value:"w-full mx-auto"},
      ];
   

    const totalConfig = [
        {
            item: 0,
            name: 'Preview',
            component: (
                <div className={`rounded-md border border-zinc-200 p-5  w-full`}>
                   <div className={`${size}`}>
                       {children}
                    </div>
                </div>
            )
        },
        {
            item: 1,
            name: 'Code',
            component:<Highlighter code={code}></Highlighter>
        }
    ];

    const handleTabChange = (index: number) => {
        setTabNum(index);
    };

    

    return (
        <div className="my-5 h-fit w-full min-w-80 max-w-5xl">
            <div className="item-center mb-2 border-b-[1px] flex justify-between gap-2">
                <ul className='flex gap-2'>
                    <li className={`cursor-pointer ${tabNum === 0 && 'border-b-[1px]'} border-sky-500/100`} onClick={() => handleTabChange(0)}>Preview</li>
                    <li className={`cursor-pointer ${tabNum === 1 && 'border-b-[1px]'} border-sky-500/100`} onClick={() => handleTabChange(1)}>Code</li>
                </ul>
                <ul className='flex gap-2 items-center'>
                    {devicesMenu.map((item,idx)=>(
                        <li key={idx} onClick={() => setSize(item.value)} className='cursor-pointer'>{item.label}</li>
                    ))}
                </ul>
            </div>

            <div className={`mb-10 rounded-sm`}>
               {totalConfig[tabNum].component}
            </div>
        </div>
    );
}