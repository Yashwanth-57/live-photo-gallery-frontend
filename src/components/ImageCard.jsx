// function formatSize(bytes) {
//   if (!bytes) return "0 KB";

//   const kb = bytes / 1024;

//   if (kb < 1024) return `${kb.toFixed(1)} KB`;

//   return `${(kb / 1024).toFixed(2)} MB`;
// }

// function formatDate(date) {
//   return new Date(date).toLocaleString();
// }

// function ImageCard({ image, onClick }) {
//   return (
//     <div className="image-card" onClick={onClick}>
//       <img
//         src={`http://localhost:5000${image.url}`}
//         alt={image.filename}
//       />

//       <div className="image-info">
//         <h3>{image.filename}</h3>

//         <p>{formatSize(image.size)}</p>

//         <span>{formatDate(image.createdAt)}</span>
//       </div>
//     </div>
//   );
// }

// export default ImageCard;


function formatSize(bytes) {
  if (!bytes) return "0 KB";

  const kb = bytes / 1024;

  if (kb < 1024) return `${kb.toFixed(1)} KB`;

  return `${(kb / 1024).toFixed(2)} MB`;
}

function formatDate(date) {
  return new Date(date).toLocaleString();
}

const BACKEND_URL = import.meta.env.VITE_API_URL;

function ImageCard({ image, onClick }) {

  const imageUrl = `${BACKEND_URL}${image.url}`;

  // function downloadImage(e) {
  //   e.stopPropagation(); // prevent opening modal

  //   const link = document.createElement("a");

  //   link.href = imageUrl;
  //   link.download = image.filename;

  //   document.body.appendChild(link);

  //   link.click();

  //   document.body.removeChild(link);
  // }

  function downloadImage(e) {
  e.stopPropagation();

  window.open(
    `${BACKEND_URL}/download/${image.filename}`,
    "_blank"
  );
}

  return (
    <div className="image-card" onClick={onClick}>

      <img
        src={imageUrl}
        alt={image.filename}
      />


      <div className="image-info">

        <h3>{image.filename}</h3>

        <p>{formatSize(image.size)}</p>

        <span>{formatDate(image.createdAt)}</span>


        <button
          onClick={downloadImage}
          className="download-btn"
        >
          ⬇ Download
        </button>


      </div>

    </div>
  );
}

export default ImageCard;