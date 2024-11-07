"use client";
import Box from '@/ui-components/shared/Box';
import { useState } from "react";

export default function Modal1(): JSX.Element {
  const [modalOpen, setModalOpen] = useState(false);

  const code = `
    <input type="file" className="text-gray-600 h-[35px] bg-white border w-fit border-gray-200 rounded-md text-sm file:bg-gray-200 file:text-gray-700 file:px-4 file:h-full file:border-none file:cursor-pointer placeholder-gray-400/70" />
  `;

  return (
    <Box code={code}>
      <div className="flex justify-center">
        <button onClick={() => setModalOpen(true)} className="text-white bg-sky-500/100 font-medium rounded-md text-sm py-2 px-4 lg:py-2.5 lg:px-5">Open Modal</button>
      </div>
      {modalOpen && (
        <div
          className="z-[99999999] fixed inset-0 flex items-center justify-center h-screen w-screen backdrop-blur-sm bg-black/30 duration-100"
          onClick={() => setModalOpen(false)}
        >
          <div
            className={`relative transform overflow-hidden rounded-lg bg-white shadow-xl sm:w-full sm:max-w-lg transition-all ${
              modalOpen ? "scale-1 opacity-1 duration-500" : "scale-0 opacity-0 duration-500"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3 className="text-base font-semibold text-gray-900">Deactivate account</h3>
                  <p className="mt-2 text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-500 sm:ml-3 sm:w-auto">
                Deactivate
              </button>
              <button onClick={() => setModalOpen(false)} className="mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </Box>
  );
}
