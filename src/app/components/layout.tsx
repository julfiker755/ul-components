"use client"
import Navber from '@/ui-components/common/Navber';
import Sidebar from '@/ui-components/common/Sideber';
import React from 'react';
import { useState } from 'react';


const ComLayout = ({children}:{children:React.ReactNode}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Navber  sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}></Navber>
          <main>
            <div className="mx-auto max-w-screen-2xl p-2">
               {children}
               
            </div>
          </main>
        </div>
      </div>
  );
};

export default ComLayout