import { React, UseEffect, useEffect, useState } from "react";
import Popup from 'reactjs-popup';
import axios from "axios";
import logo from "../Assets/logo.png";
import { API_BASE_URL } from "../config.js";
import "./homepage.css";
// import 'reactjs-popup/dist/index.css';

function Homepage() {
  const [audioFile, setAudioFile] = useState(null);
  const [result, setResult] = useState(null);
  const BaseUrl = API_BASE_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();
    // formdata is used to send audio file to backend as it is not json data type but binary data type
    //  so we use formdata to send binary data to backend
    try {
      const formData = new FormData();
      formData.append("audio_file", audioFile);

      const response = await axios.post(BaseUrl + "/predict/", formData);
      if (response.status === 200) {
        console.log(response.data.output);
        setResult(response.data.output);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const homepage = () => {
    window.location.href = "/";
  };
  
  return (
    <>
      <div className="homepage-container">
        <h1>
          <img src={logo} alt="logo" onClick={homepage}/>
          Speech Emotion Recognition
        </h1>
        <div className="homepage-form">
          <form onSubmit={handleSubmit}>
            <label>
              <p>Upload your Audio here!!</p>
              <div className="btn-div">
                <div className="btn">
                  <input
                    type="file"
                    name="audio"
                    onChange={(e) => setAudioFile(e.target.files[0])}
                    accept="audio/*"
                  />
                </div>
              </div>
            </label>
            {/* <div className="homepage-submit">
            </div> */}
            <div className="form-result">
              <p>{result}</p>
            </div>
            <div className="btn-submit" onClick={handleSubmit}>
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Homepage;
