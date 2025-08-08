// import node module libraries
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Image } from "react-bootstrap";
import { v4 as uuid } from "uuid";

export const ImageDropzone = ({ onDropImage, images }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleImageDrop = (files) => {
    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = function (e) {
        onDropImage((prevImages) => [
          ...prevImages,
          { id: uuid(), src: e.target.result },
        ]);
      };

      reader.readAsDataURL(file);
    });
  };

  const handleRemoveImage = (id) => {
    onDropImage((prevImages) => prevImages.filter((image) => image.id !== id));
  };

  const { getRootProps, getInputProps, acceptedFiles, isDragActive } =
    useDropzone({
      accept: {
        "image/*": [],
      },
      onDrop: handleImageDrop,
    });

  return (
    <>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <div className="text-center pt-4">
          {isDragActive && (
            <p className="dropzone-content">Release to drop the files here</p>
          )}

          {images?.length ? (
            ""
          ) : (
            <p className="dropzone-content">Drop files here to upload</p>
          )}
        </div>

        {images?.map((file, index) => (
          <div
            className="droped_file"
            key={file.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image src={file.src} alt="" />
            <div className="dz-action">
              {hoveredIndex === index ? (
                <Image
                  src="/images/svg-graphics/DZCLOSE.svg"
                  alt=""
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveImage(file.id);
                  }}
                />
              ) : (
                <Image src="/images/svg-graphics/DZSUCCESS.svg" alt="" />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
