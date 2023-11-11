import React from 'react';
import profile from '../assets/Images/haseeb.png';

export const HeroSection=()=>{
    return(
      <>
        <div className='container Hero-Section'>
            <div className='row'>
                <div className='col col-sm-12 col-md-6 col-lg-6'>
                <h1 className='title-section'>Hi, HaseebKhan is here!</h1>
                <h3 className='subheading'>Software Engineer</h3>
                </div>
               
                <div className='col col-sm-12 col-md-6 col-lg-6'>
                    <img scr={profile} alt='Profile Image'></img>
                </div>

            </div>
        </div>
      </>
        
    )
}
export default HeroSection;