"use client";
import Image from "next/image";
import React from "react";

export default function PhotoModal({ src, alt, onClose }) {
  if (!src) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-gray-800 p-4 rounded-lg relative border border-gray-600">
        <button
          onClick={onClose}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Close
        </button>
        <div className="relative w-[80vw] h-[80vh]">
          <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
