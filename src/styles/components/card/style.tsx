import styled from 'styled-components';

export const CardContainer = styled.div`

  ${props => props.theme.displaies.flexColumn}
  background-color: transparent;
  perspective: 1000;
  z-index: 5;

  &:hover .c-cardContainer__content{
    transform: rotateY(180deg);
  }

  &, .c-cardContainer__front, .c-cardContainer__back{
    width: 25em;
    max-width: 100%;
    height: 43em;
  }

  .c-cardContainer__content{
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;
  }

  .c-cardContainer__front,
  .c-cardContainer__back{
    backface-visibility: hidden;
    overflow: hidden;
    border-radius: 5px;
    position: absolute;
    top: 0;
    left: 0;
  }

  .c-cardContainer__front{
    background-image: url('/images/verso-carta.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: 2;
  }

  .c-cardContainer__back{
    background-color: #f5f5f5;
    transform: rotateY(180deg);
    color: ${props => props.theme.colors.text};
    overflow: hidden;
    padding: 1em;

    &, .c-cardContainer__backContent{
      ${props => props.theme.displaies.flexColumn}
      ${props => props.theme.displaies.flexJCC}
      ${props => props.theme.displaies.flexAIC}
    }

    .c-cardContainer__backContent{
      background-color: ${props => props.theme.colors.black};
      width: 95%;
      height: 95%;
      padding: 1em;
      border-radius: 5px;
    }

    .c-cardContainer__title{
      font: 600 2em 'Nunito Sans';
      text-align: center;
      color: ${props => props.theme.colors.gold};
    }
    .c-cardContainer__userCloth{
      font: 300 1.5em 'Open Sans Condensed';
      text-align: center;
      color: #fff;
    }

    .c-cardContainer__image{
      display: block;
      margin: 1.5em auto;
      width: 80%;
      border-radius: 50%;
      border: 3px dotted #fff;
    }
  }
`;
