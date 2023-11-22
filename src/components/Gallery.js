import React, { Component } from "react";
import avatar3 from "./../image/2.jpeg";
import avatar4 from "./../image/3.jpeg";
import avatar5 from "./../image/g1.jpeg";
import avatar6 from "./../image/g5.jpg";
import avatar7 from "./../image/g14.jpeg";
import avatar8 from "./../image/g11.jpeg";

const Gallery = () => {
  return (
    <div className="section2">
      <div className="container">
        <h1>Gallery</h1>
        <div className="row mt-5">
          <div className="col-4 mt-4 gambar">
            <img className="img-fluid" src={avatar6} />
          </div>
          <div className="col-4 mt-4 gambar">
            <img className="img-fluid" src={avatar4} />
          </div>
          <div className="col-4 mt-4 gambar">
            <img className="img-fluid" src={avatar5} />
          </div>
          <div className="col-4 mt-4 gambar">
            <img className="img-fluid" src={avatar3} />
          </div>
          <div className="col-4 mt-4 gambar">
            <img className="img-fluid" src={avatar7} />
          </div>
          <div className="col-4 mt-4 gambar">
            <img className="img-fluid" src={avatar8} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
