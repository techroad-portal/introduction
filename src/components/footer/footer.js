import React from 'react'
import ImgData from '../../assets/imageData/imgData'
import FooterStyle from './footer.style'
const Footer = () => {
    return (
        <FooterStyle>
            
            <div className="container">
                <div className="row content text-white py-5">
                    <div className="col-12 col-md-3 ft-logo">
                        <div className="media-wrap">
                            <a href="https://techroad.io">
                                <img  alt="techroad" title="" src={ImgData.logoSmall} className="footer-logo" />
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-3  display-7">
                        <h5 className="pb-3">
                            Address
                        </h5>
                        <p className="mbr-text">215, Yeoksam-ro, Gangnam-gu, Seoul, Republic of Korea</p>
                    </div>
                    <div className="col-12 col-md-3  display-7">
                        <h5 className="pb-3">
                            Contacts
                        </h5>
                        <p className="mbr-text">
                            lion.cho@techroad.io &nbsp; &nbsp;&nbsp;<br/><br/></p>
                    </div>
                    <div className="col-12 col-md-3 mbr-fonts-style display-7">
                        <h5 className="pb-3">
                            Links
                        </h5>
                        <p className="mbr-text"><a href="https://community.techroad.io" className="text-primary">Community</a><br/></p>
                    </div>
                </div>
                <div className="footer-lower">
                    <div className="row">
                        <div className="col-sm-12">
                            <hr className="bg-white"/>
                        </div>
                    </div>
                    <div className="container row ">
                        <div className="col-sm-6 copyright">
                            <p className="mbr-text  display-7 text-white">
                                © Copyright 2022 Tehcroad - All Rights Reserved
                            </p>
                        </div>
                        <div className="col-md-6">
                            
                        </div>
                    </div>
                </div>
            </div>
        </FooterStyle>
    )
}

export default Footer