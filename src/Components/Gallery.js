import React, { useEffect } from "react";
import "../Styles/Gallery.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


const Gallery = ({productImg,fetchImages}) => {
  useEffect(() => {
   fetchImages()
  }, [])
  
  const state= {
    responsive:{
        0: {
            items: 2,
        },
        450: {
            items: 2,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 5,
        },
    },
}


 console.log(productImg);

  return (
    <div className="gallery">
      <div className="container-fluid ">
        <h2 className="text-center py-4">DOKMEN PRODUCT</h2>

        <div className="image-col">
        
          <OwlCarousel
            className="owl-theme"
            loop
            center
            margin={4}
            autoplayTimeout={2500}
            autoplay={true}
            dots={false}
            items={5}
            touchDrag={true}
            lazyLoad={true}
            // rtlClass={true}
            // rtlClass={false}
            animateIn='linear'
            animateOut='linear'
             responsive={state.responsive}// add this line
           
          >
            {productImg.map((item)=>{
              return(

                <img src={item.image} alt="" key={item.id} />
              )
            })}
           
          </OwlCarousel
          >

          <OwlCarousel
            className="owl-theme"
            loop
            center
            margin={4}
            autoplay={true}
            dots={false}
            items={5}
            touchDrag={true}
            lazyLoad={true}
            autoplayTimeout={3500}

             responsive={state.responsive}// add this line
           
          >
                {productImg.map((item)=>{
              return(

                <img src={item.image} alt="" key={item.id} />
              )
            })}
        
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
