import React from "react";
import '../App.css';

const Card = ({ title, description, color }) => {


    return (
        <div className="cardStyle card my-3 card-body" style={{ backgroundColor: color }}>
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{description}</p>
        </div>
    );
};

export default Card;