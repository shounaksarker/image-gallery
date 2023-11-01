"use client"
import React, { useState } from "react";
import { ImageBox } from "@/components/ImageBox";
import { ImageUploader } from "@/components/ImageUploader";
import img1 from "@/images/image-1.webp";
import img2 from "@/images/image-2.webp";
import img3 from "@/images/image-3.webp";
import img4 from "@/images/image-4.webp";
import img5 from "@/images/image-5.webp";
import img6 from "@/images/image-6.webp";
import img7 from "@/images/image-7.webp";
import img8 from "@/images/image-8.webp";
import img9 from "@/images/image-9.webp";
import img10 from "@/images/image-10.jpeg";
import img11 from "@/images/image-11.jpeg";

export const Gallery = () => {
  const imgArr = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
  ];

  const [selectedImages, setSelectedImages] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleCheckboxChange = (event, imgName) => {
    if (event.target.checked) {
      setSelectedImages([...selectedImages, imgName]);
    } else {
      setSelectedImages(selectedImages.filter((img) => img !== imgName));
    }
  };

  const handleSelectAllChange = (event) => {
    setSelectAll(event.target.checked);
    setSelectedImages(event.target.checked ? imgArr : []);
  };

  return (
    <section className="bg-white max-w-[90%] mx-auto rounded-lg py-4">
      <div className="border-b border-slate-400 px-4 pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              className={`${!selectedImages.length && "hidden"}`}
              onChange={handleSelectAllChange}
              checked={selectAll}
            />
            <label className="font-bold">
              {selectedImages.length > 0
                ? `${selectedImages.length} File Selected`
                : "Gallery"}
            </label>
          </div>
          <button className="text-red-500 font-semibold">Delete File</button>
        </div>
      </div>
      <div className="p-4 w-full mx-auto">
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3 w-full">
          {imgArr?.map((imgg, index) => (
            <div
              className={`aspect-square ${
                index === 0 && "md:row-span-2 md:col-span-2"
              }`}
            >
              <ImageBox img={imgg} onCheckboxChange={handleCheckboxChange} isSelected={selectedImages.includes(imgg)}/>
            </div>
          ))}
          <div className="aspect-sqare h-full">
            <ImageUploader />
          </div>
        </div>
      </div>
    </section>
  );
};
