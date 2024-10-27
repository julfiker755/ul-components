import React from 'react';
import { AlignJustify } from 'lucide-react';



interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const navItems=[
   {id:1, label:"Components", href:"/"},
   {id:2, label:"Templates", href:"/"}
]

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className='sticky top-0 z-[999] flex w-full border-b-2 py-2'>
      <header className="w-full px-3">
        <div className="flex justify-between items-center">
          {/* left side*/}
          <div className='flex gap-4 items-center'>
            <button
              aria-controls="sidebar"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
              className="z-[99999] block border rounded-md border-stroke p-1.5 shadow-sm lg:hidden"
            >
              <AlignJustify size={20}/>
            </button>
            <ul className='flex items-center gap-2'>
               {navItems.map((item) => (
                <li key={item.id}>{item.label}</li>
             ))}
            </ul>
          </div>
             <h1>DroupDown</h1>
        </div>
      </header>
    </div>
  );
};

export default Header;