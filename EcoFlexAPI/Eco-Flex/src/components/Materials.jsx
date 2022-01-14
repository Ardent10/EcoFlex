import React, { Component } from "react";
import "./material.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { materials } from "../data";

export default class AutoPlay extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
        
            {
              breakpoint: 380,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };


// const Materials = () => {    


    return (
        // <Container>
            <div className="slide">
                <h1 className="slide-title">MATERIALS</h1>
                <p className="slide-p">Ecoflex promotes environment safety and sustainable development, 
                   Hence we only use and promote products and brands that 
                   does not harm the environment by any means.
                
                </p>
                <Slider className="slider" {...settings}>
                    {materials.map((item)=>(
                        <div  key={item.id}>
                            <div className="main-slider" >
                                <h3 className="slider-title">{item.title}</h3>
                                <img className="slider-img" src={item.img} alt="" />
                            <div className="overlay">
                                <p className="slider-desc">{item.desc}</p>
                            </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

           
        // </Container>
        );
    }
}
// export default Materials
