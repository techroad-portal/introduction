import React from 'react'
import {Link} from 'react-router-dom'
import ImgData from '../../assets/imageData/imgData'
import HeaderStyle from './Header.style'
import {BsList} from "react-icons/bs";
import $ from "jquery";
const Header = () => {
    $("#navbar-toggler").click(function(){
        $('.collapse').toggle()
    })
        
    
    return (
        <div>
            <HeaderStyle>
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <div className="container">
                            <Link className="navbar-brand logo " to="">
                                <img src={ImgData.whiteLogo} alt="" />
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" id="navbar-toggler" >
                                <BsList className= "text-white display-4 "/>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active text-white display-4" aria-current="page" to="">COMMUNITY</Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
            </HeaderStyle>

        </div>
    )
}

export default Header