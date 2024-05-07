"use client";
import React, { useState } from "react";
import Image from "next/image";
import PhotoModal from "./PhotoModal";
import { Delete } from "@mui/icons-material";
import { deletePhoto } from "../actions/deletePhoto";

export default function Photo({ url, alt, width, height }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div
        style={{ width, height }}
        className="relative w-auto h-auto shadow-md border border-white border-opacity-90 rounded-lg overflow-hidden cursor-pointer"
      >
        <form
          action={deletePhoto}
          className="absolute bg-gray-900 bottom-2.5 right-5 z-10"
        >
          <input type="hidden" name="photoPath" value={url} />
          <button
            type="submit"
            className="bg-transparent border-none text-white cursor-pointer hover:text-red-500 hover:scale-110 transition duration-300"
          >
            <Delete />
          </button>
        </form>

        <Image
          src={url}
          alt={alt}
          fill={true}
          style={{ objectFit: "cover", objectPosition: "center" }}
          onClick={() => setShowModal(true)}
        />
      </div>

      {showModal && <PhotoModal src={url} alt={alt} onClose={toggleModal} />}
    </>
  );
}
