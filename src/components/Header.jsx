import { FaCamera, FaCircle } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      <div>
        <h1>
          <FaCamera /> Live Photo Monitoring
        </h1>
        <p>Watching shared folder for incoming images</p>
      </div>

      <div className="live-badge">
        <FaCircle />
        LIVE
      </div>
    </header>
  );
}

export default Header;