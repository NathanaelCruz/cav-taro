import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    ${props => props.theme.displaies.flexRow}
    ${props => props.theme.displaies.flexAIC}
    ${props => props.theme.displaies.flexJCC}
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    font-size: 62.5%;
    background-color: ${props => props.theme.colors.background};
  }

  @keyframes star-animation {
    from {
        transform: translateY(0vh);
    }
    to {
        transform: translateY(-100vh);
    }
  }
`