import React, { useState } from "react";
import girl from "./asset1/girl.png";
import g1 from "./asset1/Group 5838.png";
import g2 from "./asset1/Group 5841.png";
import g3 from "./asset1/Group 5842.png";
import g4 from "./asset1/Group 5843.png";
import g5 from "./asset1/Group 5844.png";
import g6 from "./asset1/Group 5845.png";

// stock images from Pexels
const stockImages = [
  "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/221011/pexels-photo-221011.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=600"
];

function Modal({
  isOpen,
  onClose,
  onImageSelect,
  selectedImage,
  setSelectedImage
}) {
  if (!isOpen) return null;

  const handleSave = () => {
    onImageSelect(selectedImage);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-4 w-3/4 md:w-1/2">
        <h2 className="text-lg font-bold mb-4">Select an Image</h2>
        <div className="grid grid-cols-2 gap-4">
          {stockImages.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt={`Stock ${index}`}
                className={`cursor-pointer hover:opacity-75 ${
                  selectedImage === image ? "border-4 border-blue-500" : ""
                }`}
                onClick={() => setSelectedImage(image)}
              />
              {selectedImage === image && (
                <div className="absolute inset-0 border-4 border-blue-500 pointer-events-none" />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="mt-4 bg-gray-500 text-white py-2 px-4 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function Captive() {
  const imageData = [
    { src: g1, alt: "Group 1" },
    { src: g2, alt: "Group 2" },
    { src: g3, alt: "Group 3" },
    { src: g4, alt: "Group 4" },
    { src: g5, alt: "Group 5" },
    { src: g6, alt: "Group 6" }
  ];

  // State management
  const [selectedImages, setSelectedImages] = useState(
    Array(imageData.length).fill(null)
  );
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const handleImageSelect = (image) => {
    const newSelectedImages = [...selectedImages];
    newSelectedImages[currentIndex] = image;
    setSelectedImages(newSelectedImages);
    setModalOpen(false);
  };

  return (
    <div
      className=""
      style={{
        backgroundImage: 'url("/assets/Group 6082.png")',
        backgroundSize: "cover"
      }}
    >
      <div className="flex justify-center items-center text-green-400 pr-2 mr-24">
        <img src={girl} alt="girl" className="w-1/5 ml-0" />
        <div className="relative z-10">
          <h1 className="text-white text-center text-5xl font-light relative z-10 mt-24">
            <span className="bg-clip-text font-bold text-5xl text-[rgba(0,255,87,1)]">
              In fact, with Captivate AI
            </span>
          </h1>
          <img
            src="/assets/Group.png"
            alt="group"
            className="w-auto h-12 relative -mt-6 z-0"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center mt-8">
        {imageData.map((image, index) => (
          <div
            key={index}
            className="relative w-1/4 p-4 m-4 rounded-lg shadow-lg flex justify-center items-center"
            onClick={() => handleImageClick(index)}
          >
            {/* Render the white overlay */}
            <div className="absolute top-16 rounded-xl left-7 w-72 h-44 bg-white flex justify-center items-center">
              {selectedImages[index] ? (
                <img
                  src={selectedImages[index]}
                  alt={`Selected ${index}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <span className="text-black font-bold"></span>
              )}
            </div>
            {/* Render the default image behind the overlay */}
            <img src={image.src} alt={image.alt} className="w-2/7 h-auto" />
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onImageSelect={handleImageSelect}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </div>
  );
}

export default Captive;
