"use client"
import { useEffect, useRef } from 'react';
import Link from 'next/link'; 
import { X } from 'lucide-react';
import Image from 'next/image';


interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}


const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const trigger = useRef<HTMLButtonElement>(null);
  const sidebar = useRef<HTMLDivElement>(null);

  // Close sidebar on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [sidebarOpen, setSidebarOpen]);

  
  interface MenuItem {
    title: string;
    subItem?: { title: string; href?: string }[];
  }
  

   const menuItems: MenuItem[]=[
     {
      title:"Getting started",
       subItem:[
         {title:"Introduction"}
       ]
     },{
      title:"Components",
      subItem:[
         {title:"Button", href:"/components/button"},
         {title:"Card", href:"/card/buttton"}
      ]
     }
   ]

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0  top-0 z-[99999999] flex h-screen   w-72.5 flex-col overflow-y-hidden border-2 duration-300 ease-linear text-black w-[220px] lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="py-3">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between gap-2 px-2 py-5.5 lg:py-6.5">
          <Link href="/"> 
            <h1 className="pt-1">
              <Image src="https://julfiker.vercel.app/_next/image?url=%2Flogo.png&w=256&q=75" alt="nabmig" width={200} height={200} />
            </h1>
          </Link>
          <button
            ref={trigger}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
            className="block border rounded-full lg:hidden"
          >
            <X size={30} />
          </button>
        </div>

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          <nav className="lg:mt-9 px-2">
            <div>
            <ul className="flex flex-col space-y-2 gap-1.5">
                  {menuItems.map((item, idx) => (
                    <li key={idx}>
                      {item.title}
                      {item.subItem && (
                        <ul className="pl-4"> 
                          {item.subItem.map((subItem, subIdx) => (
                            <li key={subIdx}>
                              <Link href={subItem?.href || ""}>{subItem.title}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>

            </div>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;