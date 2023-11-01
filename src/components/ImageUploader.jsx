'user client'
import Image from 'next/image';
import { useState } from 'react';
import imgThumb from "@/images/img-icon.png";

export const ImageUploader = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  return (
    <div className="relative  rounded-lg border-dashed border-2 border-gray-400 flex justify-center items-center h-full min-h-[100px]">
      <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center">
       <Image src={imgThumb} width={20} height={20} alt="img-thub"/>
        <p className="text-gray-400">Upload image</p>
      </label>
      <input
        type="file"
        id="image-upload"
        accept=".jpg,.jpeg,.png,.gif,.bmp,.tiff,.webp"
        className="hidden"
        onChange={handleImageUpload}
      />
      {image && (
        <img
          src={image}
          alt="Uploaded image"
          className="absolute inset-0 object-fit w-full h-full rounded-lg"
        />
      )}
    </div>
  );
};
