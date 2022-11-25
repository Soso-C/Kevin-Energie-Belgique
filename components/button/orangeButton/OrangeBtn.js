import React from "react";

export default function OrangeBtn({ children, large = false }) {
  return (
    <button
      className={`px-4 py-2 bg-orange-500 font-medium w-44 text-white rounded-full hover:text-black ${
        large && "text-xl"
      }`}
    >
      {children}
    </button>
  );
}
