import { React } from "react";
import {useNavigate} from 'react-router-dom';
import logo from "../Assets/logo.png";
import homeRight from "../Assets/home-right.svg";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-mainContainer">
      <div className="home-container">
        <div className="logo">
          <img src={logo} alt="" />
          <h1>EmoSounds</h1>
        </div>
        <div className="bottom-container">
          <div className="bottom-left">
            <h1>Speech Emotion Recognition</h1>
            <p>
            Speech Emotion Recognition (SER) is a field of NLP that uses machine learning to detect and classify emotional content in speech. It has many applications, such as improving human-computer interactions and providing customer feedback insights. SER analyzes audio features such as pitch, tempo, and spectral features to detect emotions like happiness, sadness, anger, and fear. Its key advantage is its ability to analyze large volumes of data in real-time, making it useful in customer service settings.
            </p>
            <span> </span>
          <div className="home-btn" onClick={()=> navigate('/form')}>Predict</div>
                      
          </div>
          <div className="bottom-right">
            <img src={homeRight} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
