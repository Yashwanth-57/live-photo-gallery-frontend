// import { useEffect, useState } from "react";
// import axios from "../services/imageApi";
// import socket from "../services/socket";


// function App() {

//     const [images,setImages]=useState([]);

//     useEffect(()=>{

//         loadImages();

//         socket.on("new-image",(image)=>{

//             setImages(prev=>[image,...prev]);

//         });

//         return ()=>socket.off("new-image");

//     },[]);

//     async function loadImages(){

//         const res=await axios.get("/images");

//         setImages(res.data);

//     }

//     return(

//         <div>

//             <h1>Live Photos</h1>

//             {
//                 images.map(image=>(

//                     <div key={image._id}>

//                         <img
//                             src={`http://localhost:5000${image.url}`}
//                             width={250}
//                         />

//                         <h3>{image.filename}</h3>

//                         <p>{image.size} bytes</p>

//                     </div>

//                 ))
//             }

//         </div>

//     )

// }

// export default App;

import { useEffect, useState } from "react";

import axios from "./services/imageApi";
import socket from "./services/socket";

import Header from "./components/Header";
import Stats from "./components/Stats";
import Gallery from "./components/Gallery";
import ImageModal from "./components/ImageModal";

import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    loadImages();

    socket.on("new-image", (image) => {
      setImages((prev) => [image, ...prev]);
    });

    return () => socket.off("new-image");
  }, []);

  async function loadImages() {
    try {
      const res = await axios.get("/images");
      setImages(res.data);
    } catch (err) {

      console.log("Error fetching images:", err);
      console.error(err);
    }
  }

  return (
    <div className="container">
      <Header />

      <Stats images={images} />

      <Gallery
        images={images}
        onSelect={setSelected}
      />

      {selected && (
        <ImageModal
          image={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}

export default App;