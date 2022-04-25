
import  styled from 'styled-components'

const HeaderStyle =styled.div`

    min-height:80px;
    background-color:#333333;
    position:fixed;
    top:0;
    min-width: 100%;
    .logo {
        img{
            max-width: 100%;
            height: 2.8rem;
        }
    }
    nav{
        padding:10px 0;
        .nav-link{
            font-family: 'Rubik', sans-serif;
            font-size: 1rem !important;
            font-weight: 600;
        }
        .text-white.display-4{
                font-size:42px;
        }

    }
`

export default HeaderStyle;

