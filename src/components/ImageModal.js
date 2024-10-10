import React from "react";

const stockImages = [
  "https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg",
  "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
];

const ImageModal = ({ isOpen, onClose, onSelect }) => {
  const handleImageClick = (image) => {
    onSelect(image);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      {" "}
      <div className="bg-white p-4 rounded-lg border border-red-500">
        {" "}
        <h2 className="text-lg font-bold">Select an Image</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {stockImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Stock ${index + 1}`}
              className="cursor-pointer w-96 h-96 rounded-lg hover:scale-105 transition-transform"
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
