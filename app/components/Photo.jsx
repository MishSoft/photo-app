"use client";
import React from "react";
import Image from "next/image";

export default function Photo({
  url,
  alt,
  width,
  height,
  photoName,
  isFavorite = false,
}) {

  return (
    <div
      style={{ width, height }}
      className="relative w-auto h-auto shadow-md border border-white border-opacity-90 rounded-lg overflow-hidden cursor-pointer"
    >
      <Image
        src={url}
        alt={alt}
        layout="fill"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
    </div>
  );
}
