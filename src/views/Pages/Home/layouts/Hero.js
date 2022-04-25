import React from 'react'
import ImgData from '../../../../assets/imageData/imgData'
import HeroStyle from './Hero.style'
const Hero = () => {
    return (
        <HeroStyle style={{"backgroundImage" :` url(${ImgData.heroBg})`}}>
                <div class="container align-center h-100">
                    <div class="row justify-content-center ">
                        <div class=" col-md-10 hero-text text-white text-center">
                            <h1 class=" display-1 pt-5">Career-path</h1>
                            <h3 class="text-center pb-3 display-2">
                                We believe human potential</h3>
                            <p class=" pb-3  display-3">Having a fast development cycle is a key differentiator from other competitors. This competitive advantage does not come from huge salaries. My solution is "carrier-path". If someone wants to work in crypto field for at least the next five years, he will work even if he is sleeping.</p>
                            
                        </div>
                    </div>
                </div>
    
        </HeroStyle>
    )
}

export default Hero