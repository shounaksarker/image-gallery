"use client";
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
  // <----- array of all images ----->
  const initialImgArr = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    { id: 6, img: img6 },
    { id: 7, img: img7 },
    { id: 8, img: img8 },
    { id: 9, img: img9 },
    { id: 10, img: img10 },
    { id: 11, img: img11 },
  ];

  // <----- States -----> 
  const [imgArr, setImgArr] = useState(initialImgArr);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  // <----- functions for select items ----->
  const handleCheckboxChange = (event, imgName) => {
    if (event.target.checked) {
      setSelectedImages([...selectedImages, imgName]);
    } else {
      setSelectedImages(selectedImages.filter((img) => img !== imgName));
    }
  };
// <----- select all images ----->
  const handleSelectAllChange = (event) => {
    setSelectAll(event.target.checked);
    setSelectedImages(event.target.checked ? imgArr : []);
  };


  // <----- Function for delete selected images ----->
  const handleDelete = () => {
    // Filter out the selected images from imgArr
    const updatedImgArr = imgArr.filter((img) => !selectedImages.includes(img));
    setImgArr(updatedImgArr);
    setSelectedImages([]);
    setSelectAll(false);
  };

  
  // <----- functions for drag and drop ----->
  const handleDragStart = (e, index) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", index);
  };

  const handleDrop = (e, newIndex) => {
    e.preventDefault();
    const draggedIndex = e.dataTransfer.getData("text/plain");
    const updatedItems = [...imgArr];
    updatedItems.splice(newIndex, 0, updatedItems.splice(draggedIndex, 1)[0]);
    setImgArr(updatedItems);
  };

  return (
    <section className="bg-white max-w-[90%] lg:max-w-[70%] 2xl:max-w-[90%] mx-auto rounded-lg py-4">
      {/* <----- top bar -----> */}
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
          <button
            className="text-red-500 font-semibold"
            onClick={handleDelete}
            disabled={selectedImages.length === 0}
          >
            Delete File
          </button>
        </div>
      </div>

      {/* <----- all images -----> */}
      <div className="p-4 w-full mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 w-full">
          {imgArr?.map((pic, index) => (
            <div
              className={`aspect-square ${
                index === 0 && "col-span-2 row-span-1 md:row-span-2"
              }`}
              key={index}
              draggable="true"
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, index)}
            >
              <ImageBox
                img={pic}
                onCheckboxChange={handleCheckboxChange}
                isSelected={selectedImages.includes(pic)}
              />
            </div>
          ))}

          {/* <----- image uploder -----> */}
          <div className="aspect-sqare h-full">
            <ImageUploader />
          </div>
        </div>
      </div>
    </section>
  );
};
