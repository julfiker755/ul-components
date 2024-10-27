'use client';
import {useState } from 'react';
import Highlighter from './CodeBox';



interface BoxProps {
  children: React.ReactNode;
  code: string; 
}

export default function Box({ children, code }: BoxProps) {
    const [tabNum, setTabNum] = useState<number>(0);
    const [size, setSize] = useState<string>('full');
   

    const totalConfig = [
        {
            item: 0,
            name: 'Preview',
            component: (
                <div className={`min-w-80 rounded-sm border border-zinc-200 p-5 lg:p-5 w-full`}>
                   <div className={`m-auto ${size === 'xs' ? 'w-1/2' : size === 'md' ? 'w-3/4' : 'w-full'}`}>
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
                    <li className='cursor-pointer' onClick={() => handleTabChange(0)}>Preview</li>
                    <li className='cursor-pointer' onClick={() => handleTabChange(1)}>Code</li>
                </ul>
                <ul className='flex gap-2 items-center'>
                    <li onClick={() => setSize("xs")} className='cursor-pointer'>xs</li>
                    <li onClick={() => setSize("md")} className='cursor-pointer'>md</li>
                    <li onClick={() => setSize("full")} className='cursor-pointer'>full</li>
                </ul>
            </div>

            <div className={`mb-10 rounded-sm`}>
               {totalConfig[tabNum].component}
            </div>
        </div>
    );
}