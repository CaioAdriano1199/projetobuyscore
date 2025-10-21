"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Button from "../button/button";

export default function CameraButton() {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleClick = () => fileInputRef.current.click();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div className="flex flex-col items-center">
      <label className="block mb-1 text-sm font-medium text-[rgb(227,227,227)] flex self-start">Logo</label>
      <Button
        type="button"
        onClick={handleClick}
        variant="outline"
        className="w-32 h-32 rounded-full flex items-center justify-center overflow-hidden bg-gray-100 hover:bg-gray-200"
      >
        {selectedImage ? (
          <Image
            src={selectedImage}
            alt="Imagem selecionada"
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        ) : (
          <Image
            src="/camera.svg"
            alt="Ícone de câmera"
            width={40}
            height={40}
            className="opacity-70"
          />
        )}
      </Button>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
