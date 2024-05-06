"use client";
import React, { useState } from "react";
import Image from "next/image";
import PhotoModal from "./PhotoModal";

export default function Photo({
  url,
  alt,
  width,
  height,
  photoName,
  isFavorite = false,
}) {
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
        <Image
          src={url}
          alt={alt}
          layout="fill"
          style={{ objectFit: "cover", objectPosition: "center" }}
          onClick={() => setShowModal(true)}
        />
      </div>

      {showModal && <PhotoModal src={url} alt={alt} onClose={toggleModal} />}
    </>
  );
}
