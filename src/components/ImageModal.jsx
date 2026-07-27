import { FaTimes, FaDownload } from "react-icons/fa";

function formatSize(bytes) {
  if (!bytes) return "0 KB";

  const kb = bytes / 1024;

  if (kb < 1024) return `${kb.toFixed(1)} KB`;

  return `${(kb / 1024).toFixed(2)} MB`;
}

function ImageModal({ image, onClose }) {
  return (
    <div className="modal-backdrop">

      <div className="modal">

        <button
          className="close-btn"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        <img
          src={`http://localhost:5000${image.url}`}
          alt={image.filename}
        />

        <div className="modal-info">

          <h2>{image.filename}</h2>

          <p>
            <strong>Size:</strong> {formatSize(image.size)}
          </p>

          <p>
            <strong>Uploaded:</strong>{" "}
            {new Date(image.createdAt).toLocaleString()}
          </p>

          <a
            href={`http://localhost:5000${image.url}`}
            download
            className="download-btn"
          >
            View Full Screen
          </a>

        </div>

      </div>

    </div>
  );
}

export default ImageModal;