import { React, UseEffect, useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config.js";
import "./homepage.css";

function Homepage() {
  const [audioFile, setAudioFile] = useState(null);
  const BaseUrl = API_BASE_URL;


  const handleSubmit = async (event) => {
    event.preventDefault();
    // formdata is used to send audio file to backend as it is not json data type but binary data type
    //  so we use formdata to send binary data to backend 
    try {
      const formData = new FormData();
      formData.append(
        "audio_file",
        audioFile,
      );
     
      const response = await axios.post(BaseUrl + "/predict/", formData);
      if (response.status === 200) {
        console.log(response.data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="homepage-container">
        <h1>Speech Emotion Recognition</h1>
        <div className="homepage-form">
          <form onSubmit={handleSubmit}>
            <label>
              upload audio
              <input
                type="file"
                name="audio"
                onChange={(e) => setAudioFile(e.target.files[0])}
                accept="audio/*"
              />
            </label>
            <div className="homepage-submit">
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Homepage;
