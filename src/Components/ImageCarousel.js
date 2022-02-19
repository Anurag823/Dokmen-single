import React from "react";
import '../Styles/ImageCarousel.css'

const ImageCarousel = () => {
  return (
    <section>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img   src="Images/Pic6.jpg" className="carousel-img d-block w-100" alt="img" />
          </div>
          <div className="carousel-item">
            <img  src="Images/pic4.jpg" className="carousel-img d-block w-100" alt="img2"/>
          </div>
          <div className="carousel-item">
            <img  src="Images/Pic1.JPG" className="carousel-img d-block w-100" alt="img3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default ImageCarousel;
