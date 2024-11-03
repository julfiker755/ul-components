"use client";
import { IoCloudUploadOutline } from "react-icons/io5";
import Box from '@/ui-components/shared/Box';
import Image from 'next/image';
import { useState } from 'react';
import { MdDeleteForever } from "react-icons/md";

const File4 = () => {
  const [imageAll, setImages] = useState<File[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setImages((prevImages) => [...prevImages, ...selectedFiles]);
    }
  };

  const deleteImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const code = `
import Image from 'next/image';
import { useState } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { IoCloudUploadOutline } from "react-icons/io5";


function MultipleFile() {
const [imageAll, setImages] = useState([]);

    const handleImageChange = (e) => {
      if (e.target.files) {
        const selectedFiles = Array.from(e.target.files);
        setImages((prevImages) => [...prevImages, ...selectedFiles]);
      }
    };
  
    const deleteImage = (index) => {
      setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };
  return (
    <div className="flex flex-col justify-center w-full items-center">
        <label htmlFor="dropzone" className="flex flex-col justify-center items-center w-full py-10 h-full mx-auto text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer rounded-xl">
          <IoCloudUploadOutline size={30} className="text-gray-700 mx-auto" />
          <h2 className="mt-1 font-medium tracking-wide text-gray-700">Upload files</h2>
          <p className="mt-2 text-xs tracking-wide text-gray-500">Supported formats: SVG, PNG, JPG, GIF.</p>
          <input onChange={handleImageChange} multiple id="dropzone" type="file" className="hidden" />
        </label>

        <div className="flex gap-4 flex-wrap mt-4">
          {imageAll.map((item, index) => (
            <div className="w-[150px] relative h-[90px] group rounded-md overflow-hidden" key={index}>
              <div className="bg-[#24292F]/30 group-hover:block hidden inset-x-0 inset-y-0 absolute p-2">
                <MdDeleteForever onClick={() => deleteImage(index)} size={25} className="absolute text-gray-300 cursor-pointer right-2 top-1"/>
              </div>
              <Image
                className="rounded-md h-full max-w-[100%]"
                src={URL.createObjectURL(item)}
                alt={"upload"+index}
                width={150}
                height={100}
                priority
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
  )
}

export default MultipleFile
`;

  return (
    <Box code={code}>
      <div className="flex flex-col justify-center w-full items-center">
        <label htmlFor="dropzone" className="flex flex-col justify-center items-center w-full py-10 h-full mx-auto text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer rounded-xl">
          <IoCloudUploadOutline size={30} className="text-gray-700 mx-auto" />
          <h2 className="mt-1 font-medium tracking-wide text-gray-700">Upload files</h2>
          <p className="mt-2 text-xs tracking-wide text-gray-500">Supported formats: SVG, PNG, JPG, GIF.</p>
          <input onChange={handleImageChange} multiple id="dropzone" type="file" className="hidden" />
        </label>

        <div className="flex gap-4 flex-wrap mt-4">
          {imageAll.map((item, index) => (
            <div className="w-[150px] relative h-[90px] group rounded-md overflow-hidden" key={index}>
              <div className="bg-[#24292F]/30 group-hover:block hidden inset-x-0 inset-y-0 absolute p-2">
                <MdDeleteForever onClick={() => deleteImage(index)} size={25} className="absolute text-gray-300 cursor-pointer right-2 top-1"/>
              </div>
              <Image
                className="rounded-md h-full max-w-[100%]"
                src={URL.createObjectURL(item)}
                alt={`Uploaded image ${index + 1}`}
                width={150}
                height={100}
                priority
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default File4;
