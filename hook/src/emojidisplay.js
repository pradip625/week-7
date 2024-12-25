import React, { useState } from "react";
import Love from './Love.png'
import Sad from './sad.png'
import Like from './like.png'
import happy from './happy.png'
const ImageComponent = () => {
  const [inputText, setInputText] = useState("");

  // Function to determine which image to show based on input
  const getImage = () => {
    if (inputText.toLowerCase() === "happy") {
      return "happy.png"; // Replace with actual happy face image URL
    } else if (inputText.toLowerCase() === "like") {
      return "like.png"; // Replace with actual like icon image URL
    } else if (inputText.toLowerCase() === "sad") {
      return "sad.png"; // Replace with actual sad emoji image URL
    } else {
      return null; // No image to display
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Mood Image Display</h1>
      <input
        type="text"
        placeholder="Type 'Happy', 'Like', or 'Sad'"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        style={{ padding: "10px", fontSize: "16px", width: "250px" }}
      />
      <div style={{ marginTop: "20px" }}>
        {getImage() ? (
          <img
            src={getImage()}
            alt={inputText}
            style={{ width: "100px", height: "100px" }}
          />
        ) : (
          <p>Type "Happy", "Like", or "Sad" to see an image</p>
        )}
      </div>
    </div>
  );
};

export default ImageComponent;
