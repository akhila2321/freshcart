// import node module libraries
import { useState } from "react";
import { Image } from "react-bootstrap";

const ImageHoverZoom = ({ src, alt, className, ...props }) => {
  const [backgroundPosition, setBackgroundPosition] = useState("50% 50%");

  const handleMouseMove = (e) => {
    const zoomer = e.currentTarget;
    let offsetX, offsetY;
    if (e.nativeEvent.offsetX !== undefined) {
      offsetX = e.nativeEvent.offsetX;
      offsetY = e.nativeEvent.offsetY;
    } else {
      offsetX = e.touches[0].pageX - zoomer.getBoundingClientRect().left;
      offsetY = e.touches[0].pageY - zoomer.getBoundingClientRect().top;
    }
    const x = (offsetX / zoomer.offsetWidth) * 100;
    const y = (offsetY / zoomer.offsetHeight) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  return (
    <div
      className="zoom"
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: backgroundPosition,
      }}
    >
      <Image src={src} alt={alt} className="product-image" />
    </div>
  );
};

export default ImageHoverZoom;
