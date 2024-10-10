import React from "react";
import fontImage from "./asset/Similar HOT Reels.png";
import contentImage2 from "./asset/Untitled-5.png";
import groupImage from "./asset/Group 5808.png";

function ReelsPage() {
  return (
    <div
      className="bg-cover bg-center flex flex-col items-center justify-center text-black p-5 h-screen"
      style={{
        backgroundImage: 'url("/assets/Group 5830.png")',
        backgroundSize: "cover"
      }}
    >
      <p className="font-montserrat text-4xl font-bold mb-5">
        You Too Can Generate
      </p>
      <img
        src={fontImage}
        alt="Similar HOT Reels"
        className="font-montserrat text-4xl font-bold mb-5"
        style={{ maxWidth: "25%", height: "auto" }}
      />

      <div className="flex items-center justify-center mt-5 w-auto flex-wrap">
        {/* Buttons Section */}
        <div className="flex flex-col mr-14 w-96 space-y-3">
          {[
            "That’s the beauty of Captivate AI…",
            "It allows ANYONE to generate viral reels like you just saw…",
            "Without doing anything technical…"
          ].map((text, index) => (
            <button
              key={index}
              aria-label={`Description of action ${index + 1}`}
              className="rounded-full w-full p-3 pl-5 flex justify-start items-center bg-gradient-to-r from-[#A8FFC5] to-[#CFDDFF] text-black font-montserrat text-lg font-bold border-none cursor-pointer shadow-md transition duration-300 hover:from-[#CFDDFF] hover:to-[#A8FFC5]"
              onMouseOver={(e) =>
                (e.currentTarget.style.background =
                  "linear-gradient(90deg, #CFDDFF 0%, #A8FFC5 100%)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background =
                  "linear-gradient(90deg, #A8FFC5 0%, #CFDDFF 100%)")
              }
            >
              <img
                src={groupImage}
                alt="Group icon"
                width={60}
                height={60}
                className="pr-2"
              />
              {text}
            </button>
          ))}
        </div>

        {/* Image Section */}
        <div
          style={{
            maxWidth: "300px",
            marginTop: "20px"
          }}
        >
          <img
            src={contentImage2}
            alt="Illustrative content"
            style={{
              maxHeight: "80%",
              maxWidth: "100%",
              objectFit: "contain"
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ReelsPage;
