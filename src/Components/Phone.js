import React from 'react';
import '../Css/Phone.css';
import SliderComponent from './SliderComponent';

const Phone = () => {
  return (
    <>
    <div className='phone-container relative'>
      <div className='phonecenter-content absolute_full_width_outer'>
        <img src="/page.png" alt="Example Image" className="absolute_full_width" />
        <h3 className="z_top good_one_h3 mt-2 mx-2 mb-5">Mobile App Available.</h3>
        <div className="container no_bg flex gap-2 new_one justify-between">
        <div className="sm md:mx-auto sm:mx-auto  mx-auto out_side_mobile_view phonepic z_top">
          <div className="insde_mob_view">
          <SliderComponent classvalue='mob_animate' speed_ns={1500} img1='/mob.jpg' img2='/mob2.jpg' img3='/mob3.jpg' img4='/mob4.jpg' img5='/mob5.jpg'  img6='/mob6.jpg' widths='300px' heights='200px' fade_s={false} dots={false}/>
          </div>
        </div>
        <div className="sm md:mx-auto sm:mx-auto mx-auto  out_side_mobile_view phonepic z_top">
          <div className="insde_mob_view">
          <SliderComponent classvalue='mob_animate' speed_ns={2000} img1='/agent.jpg' img2='/agent2.jpg' img5='/agent3.jpg' img3='/agent4.jpg' img4='/agent5.jpg'  img6='/agent6.jpg' widths='300px' heights='200px' fade_s={false} dots={false}/>
          </div>
        </div>
        <div className="sm md:mx-auto sm:mx-auto mx-auto  out_side_mobile_view phonepic z_top">
          <div className="insde_mob_view">
          <SliderComponent classvalue='mob_animate' speed_ns={2500} img1='/mob.jpg' img2='/agent.jpg' img5='/mob.jpg' img3='/mob2.jpg' img4='/agent2.jpg'  img6='/agent3.jpg' widths='300px' heights='200px' fade_s={false} dots={false}/>
          </div>
        </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Phone;
