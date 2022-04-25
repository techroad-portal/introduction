
import  styled from 'styled-components'

const HeroStyle =styled.div`
    min-height: 100vh;
    background-size:cover;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: 50% 50%;
    .hero-text{
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
        .hero-text{
        .display-1{
            font-family: 'Rubik', sans-serif;
            font-size: 3rem;
            font-display: swap;
            font-weight: 700;
        }
        .display-2 {
            font-family: 'Rubik', sans-serif;
            font-size: 2rem;
            font-display: swap;
            font-weight: 300;
        
        }
        .display-3{
            font-family: 'Rubik', sans-serif;
            font-size: 1rem;
            font-display: swap;
            font-style: normal;
            line-height: 1.6;
        }
    }
    }
`

export default HeroStyle;

