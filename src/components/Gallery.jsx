import ImageCard from "./ImageCard";

function Gallery({ images, onSelect }) {
  if (images.length === 0) {
    return (
      <div className="empty-state">
        <h2>📷 No Images Yet</h2>
        <p>
          Copy an image into your watched folder and it will appear here
          instantly.
        </p>
      </div>
    );
  }

  return (
    <div className="gallery">
      {images.map((image) => (
        <ImageCard
          key={image._id}
          image={image}
          onClick={() => onSelect(image)}
        />
      ))}
    </div>
  );
}

export default Gallery;