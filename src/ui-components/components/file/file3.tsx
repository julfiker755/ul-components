"use client"
import { IoCloudUploadOutline } from "react-icons/io5";
import Box from '@/ui-components/shared/Box'
import Image from 'next/image';
import { useState } from 'react';

const File3= () => {
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    //   console.log(e.target.files[0]);
    }
  };
  const code=`
import React, { useState } from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";
  
function File() {
const [image,setimage]=useState("")

    const handleimagechange=(e)=>{
      setimage(e.target.files[0])
      const file=e.target.files[0]
      console.log(file)   
   }

    return (
      <label htmlFor="dropzone-file" className="flex justify-center items-center w-full h-full  mx-auto  text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer rounded-xl">
          <div className='w-[300px] h-[150px] overflow-hidden flex items-center justify-center m-1'>
          {image ? <img className='rounded-md'  src={URL.createObjectURL(image)} alt="ff" /> :
          <div>
          <IoCloudUploadOutline size={30} className='text-gray-700 mx-auto'/>
          <h2 className="mt-1 font-medium tracking-wide text-gray-700">Upload image</h2>
          <p className="mt-2 text-xs tracking-wide text-gray-500">Supported formats: SVG, PNG, JPG, GIF.</p>
          </div>
          }
          </div>
          <input  onChange={handleimagechange} id="dropzone-file" type="file" className="hidden" />
      </label>
    )
  }
  
  export default File
  `

  return (
    <Box code={code}>
      <div className='flex justify-center'>
        <div>
          <label htmlFor="dropzone-file" className="flex justify-center items-center w-full h-full mx-auto text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer rounded-xl">
            <div className='w-[300px] h-[150px] overflow-hidden flex items-center justify-center m-1'>
              {image ? <Image  className="rounded-md"
                  src={URL.createObjectURL(image)}
                  alt="Uploaded image"
                  width={300}
                  height={150}
                  priority
                  unoptimized/> :
                <div>
                  <IoCloudUploadOutline size={30} className='text-gray-700 mx-auto'/>
                  <h2 className="mt-1 font-medium tracking-wide text-gray-700">Upload image</h2>
                  <p className="mt-2 text-xs tracking-wide text-gray-500">Supported formats: SVG, PNG, JPG, GIF.</p>
                </div>
              }
            </div>
            <input onChange={handleImageChange} id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      </div>
    </Box>
  );
};

export default File3;
