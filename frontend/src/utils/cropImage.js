export const getCroppedImg = (imageSrc, crop) => {
  const image = new Image();
  image.src = imageSrc;

  return new Promise((resolve) => {
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 450;
      canvas.height = 350;
      const ctx = canvas.getContext("2d");

      ctx.drawImage(
        image,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        450,
        350
      );

      canvas.toBlob((blob) => {
        const file = new File([blob], "cropped.jpg", {
          type: "image/jpeg",
        });
        resolve(file);
      }, "image/jpeg");
    };
  });
};
