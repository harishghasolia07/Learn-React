import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card" style={{overflow:"hidden"}} >
      <img
        src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
        alt="Nature" width={300} style={{border: '1px solid red'}}/>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
