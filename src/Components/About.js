import React, { useState } from "react";
import "../Styles/About.css";

const About = ({children}) => {
  const text = children;
  const [showReadMore, setShowReadMore] = useState(false);
  return (
    <div className="container py-4">
      <h1 className="title text-center">ABOUT DOKMEN</h1>
      <div className="img text-center">
      <img
        src="Images/Founder.jpg"
        alt=""
        className="founder-img"
      />

      </div>

      <p className="content">
        {showReadMore?text:text.slice(0,600)}
        <div className="text-center my-2"><button type="button" onClick={()=>setShowReadMore(!showReadMore)}>{showReadMore?"Read Less":"Read More"}</button></div>
      </p>
    
    </div>
  );
};

export default About;
