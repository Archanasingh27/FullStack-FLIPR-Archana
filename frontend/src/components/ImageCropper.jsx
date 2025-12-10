import React, { useState } from "react";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "../utils/cropImage";

const ImageCropper = ({ imageSrc, onCancel, onCropDone }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = (_, croppedPixels) => {
    setCroppedAreaPixels(croppedPixels);
  };

  const handleCropSave = async () => {
    const croppedFile = await getCroppedImg(imageSrc, croppedAreaPixels);
    onCropDone(croppedFile);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded w-[420px]">
        <h3 className="font-bold mb-2">Crop Image (450 × 350)</h3>

        <div className="relative w-full h-[300px]">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={450 / 350}   // ✅ Fixed ratio
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
          />
        </div>

        <div className="flex gap-2 mt-4">
          <button
            onClick={handleCropSave}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Crop & Save
          </button>

          <button
            onClick={onCancel}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCropper;
