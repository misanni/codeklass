/* Home.js */
import React from "react";
import Navbar from "./Navbar";
import "./Home.css";

const Home = () => {
  // YouTube video URLs for each course
  const youtubeLinks = {
    html:
      "https://www.youtube.com/embed/https://youtube.com/playlist?list=PL4cUxeGkcC9ibZ2TSBaGGNrgh4ZgYE6Cc&si=8s3vH6jr7cShB6xI",
    css:
      "https://www.youtube.com/embed/https://youtu.be/OXGznpKZ_sA?si=P7VtBHmB8n53oGZ8",
    javascript:
      "https://www.youtube.com/embed/https://youtu.be/PkZNo7MFNFg?si=mYnOM6Pl2KcN-qAT",
    bootstrap:
      "https://www.youtube.com/embed/https://youtu.be/eow125xV5-c?si=OkPtuDvEQMRmN3Dx",
    react:
      "https://www.youtube.com/embed/https://youtu.be/bMknfKXIFA8?si=yjgv404JkUYSSyD_",
    node:
      "https://www.youtube.com/embed/https://youtu.be/Oe421EPjeBE?si=rImo5hNvAM5N-nkZ",
  };

  return (
    <div>
      <Navbar />
      <h1 className="h1-portal">WELCOME TO YOUR LEARNING PORTAL</h1>
      <div className="grid-container">
        {/* First Card */}
        <div className="grid-item">
          <iframe
            src={youtubeLinks.html}
            title="HTML Course"
            width="300"
            height="200"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <p>HTML Course</p>
        </div>

        {/* Second Card */}
        <div className="grid-item">
          <iframe
            src={youtubeLinks.css}
            title="CSS Course"
            width="300"
            height="200"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <p>CSS Course</p>
        </div>

        {/* Repeat the pattern for the remaining cards */}
        {/* Third Card */}
        <div className="grid-item">
          <iframe
            src={youtubeLinks.javascript}
            title="JavaScript Course"
            width="300"
            height="200"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <p>JavaScript Course</p>
        </div>

        {/* Fourth Card */}
        <div className="grid-item">
          <iframe
            src={youtubeLinks.bootstrap}
            title="Bootstrap Course"
            width="300"
            height="200"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <p>Bootstrap Course</p>
        </div>

        {/* Fifth Card */}
        <div className="grid-item">
          <iframe
            src={youtubeLinks.react}
            title="React Course"
            width="300"
            height="200"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <p>React Course</p>
        </div>

        {/* Sixth Card */}
        <div className="grid-item">
          <iframe
            src={youtubeLinks.node}
            title="Node.js Course"
            width="300"
            height="200"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <p>Node.js Course</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
