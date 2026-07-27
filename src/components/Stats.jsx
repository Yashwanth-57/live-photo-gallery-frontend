import { FaImages, FaFolderOpen, FaClock } from "react-icons/fa";

function formatTime(date) {
  return new Date(date).toLocaleTimeString();
}

function Stats({ images }) {
  const latest = images[0];

  return (
    <div className="stats">

      <div className="card">
        <FaImages className="icon" />
        <h2>{images.length}</h2>
        <p>Total Images</p>
      </div>

      <div className="card">
        <FaFolderOpen className="icon" />
        <h2>Watching</h2>
        <p>LivePhotos Folder</p>
      </div>

      <div className="card">
        <FaClock className="icon" />
        <h2>
          {latest
            ? formatTime(latest.createdAt)
            : "-- : --"}
        </h2>
        <p>Last Upload</p>
      </div>

    </div>
  );
}

export default Stats;