
import  styled from 'styled-components'

const FooterStyle =styled.div`
background-color:#2e2e2e;
.footer-logo{
    height: 5rem;
}
    .container{
        .mbr-text{
            a{
                text-decoration:none;
            }
        }
        .display-1{
            font-family: 'Rubik', sans-serif;
            font-size: 4.25rem;
            font-display: swap;
            font-weight: 700;
        }
        .display-2 {
            font-family: 'Rubik', sans-serif;
            font-size: 3rem;
            font-display: swap;
            font-weight: 300;
        
        }
        .display-3{
            font-family: 'Rubik', sans-serif;
            font-size: 1.5rem;
            font-display: swap;
            font-style: normal;
            line-height: 1.6;
        }
    }
    
    @media only screen and (max-width: 768px){
        .media-wrap {
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .mbr-text {
            text-align: center;
        }
    }
`

export default FooterStyle;

