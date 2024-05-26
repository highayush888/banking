import React from "react";
import Slider from "react-slick";
import '../Css/SliderComponent.css';

export default function SliderComponent({speed_ns,img1,img2,img3,img4,img5,img6,widths,heights,classvalue,fade_s,dots}) {
  var settings = {
    dots: dots,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay:true,
    autoplaySpeed : speed_ns,
    pauseOnHover: true,
    slidesToScroll: 1,
    width:widths,
    fade:fade_s,
    height:heights
  };
  return (
    <Slider {...settings}>
      <div>
      <img src={img1} alt="Example Image" className={classvalue}/>
      </div>
      <div>
      <img src={img2} alt="Example Image" className={classvalue}/>
      </div>
      <div>
      <img src={img3} alt="Example Image" className={classvalue}/>
      </div>
      <div>
      <img src={img4} alt="Example Image" className={classvalue}/>
      </div>
      <div>
      <img src={img5} alt="Example Image" className={classvalue}/>
      </div>
      <div>
      <img src={img6} alt="Example Image" className={classvalue}/>
      </div>
    </Slider>
  );
}
SliderComponent.defaultProps = {
  dots: true,
  fade:false,
};