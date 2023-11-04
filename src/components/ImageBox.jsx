import Image from "next/image";

export const ImageBox = ({ img, onCheckboxChange, isSelected }) => {
  const handleCheckbox = (event) => {
    onCheckboxChange(event, img);
  };
  return (
    <div className="relative w-full h-full rounded-lg border border-slate-400 transition-all group/item">
      <Image src={img.img} alt="img" fill className="rounded-lg z-10" />
      {/* <----- overlay over the image on hover ----->  */}
      <div
        className={`group/edit invisible transition-all group-hover/item:visible w-full h-full z-20 absolute rounded-lg opacity-50 ${
          isSelected ? "bg-white !visible" : "bg-black"
        }`}
      />
      {/* <----- checkbox for selecting an image -----> */}
      <input
        type="checkbox"
        className={`group/edit invisible group-hover/item:visible absolute z-30 top-5 left-5 p-2 h-5 w-5  ${
          isSelected ? "!visible" : ""
        }`}
        onChange={handleCheckbox}
        checked={isSelected}
      />
    </div>
  );
};
