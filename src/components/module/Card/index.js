import React from "react";
import Button from "../../base/Button";
import './card.css'

const Card = ({ title, photo, price, onClick }) => {
  return (
    <div className="card">
      <div className="wrapper-img">
        <img src={photo} className="photo-card" alt="" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h3 className="card-text text-warning">{price}</h3>
        <Button onClick={onClick} className="btn btn-info">Show</Button>
      </div>
    </div>
  );
};

export default Card;
