import React from "react";

export default function GallerImage({ show }) {
  return (
    <div className="gallery-image">
      <img src={show.image.medium} />
    </div>
  );
}
