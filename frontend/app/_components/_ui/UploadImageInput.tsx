import React from "react";

type uploadImageInputProps = {
  imageName: string;
  imageDescription: string;
  maxSize: string;
  name: string
};

function UploadImageInput({
  imageName,
  imageDescription,
  maxSize,
  name,
}: uploadImageInputProps) {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden items-center">
      <div className="px-4 py-6">
        <div
          id="image-preview"
          className="max-w-sm p-6 mb-4 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer"
        >
          <input id="upload" type="file" className="hidden" accept="image/*" name={name} multiple />
          <label htmlFor="upload" className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-gray-700 mx-auto mb-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">
              {imageName}
            </h5>
            <p className="font-normal text-sm text-gray-400 md:px-5 mb-2">
              إختر صورة بحجم لا يتجاوز{" "}
              <b className="text-gray-600">{maxSize}</b>
            </p>
            <p className="font-normal text-sm text-gray-400 md:px-5">
              يجب أن تكون الصورة بصيغة{" "}
              <b className="text-gray-600"> JPG | PNG | JPEG</b>
            </p>
            <span
              id="filename"
              className="text-gray-500 bg-gray-200 z-50"
            ></span>
          </label>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full">
            <label className="w-full text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center mr-2 mb-2 cursor-pointer">
              <span className="text-center ml-2">{imageDescription}</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadImageInput;
