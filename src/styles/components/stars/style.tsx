import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom, transparent, ${props => props.theme.colors.black});
  position: fixed;
  top: 0;
  right: 0;
  z-index: -1;
`;

export const StarMain = styled.div`
position: relative;
  height: 6px;
  width: 6px;
  border-radius: 50%;
  box-shadow:  50px 30px white,
    200px 80px white,
    80px 400px white,
    500px 20px white,
    415px 300px white,
    560px 562px white,
    750px 100px white,
    1000px 420px white,
    810px 150px white,
    923px 749px white,
    300px 100px white,
    1104px 900px white;
  animation: star-animation 10s linear infinite;

  &::after{
  position: absolute;
  top: 100vh;
    content: " ";
  width: 6px;
  height: 6px;
  border-radius: 50%;
  box-shadow: 50px 30px white,
    200px 80px white,
    80px 400px white,
    500px 20px white,
    415px 300px white,
    560px 562px white,
    750px 100px white,
    1000px 420px white,
    810px 150px white,
    923px 749px white,
    300px 100px white,
    1104px 900px white;
  }
`;


export const StarSecond = styled.div`
position: relative;
  height: 2px;
  width: 2px;
  border-radius: 50%;
  box-shadow: 15px 150px white,
    400px 35px white,
    750px 711px white,
    600px 904px white,
    510px 82px white,
    290px 100px white,
    120px 92px white,
    300px 689px white,
    1120px 240px white,
    432px 320px white,
    920px 197px white,
    345px 280px white,
    541px 130px white,
    723px 500px white,
    410px 1046px white,
    210px 610px white,
    1250px 90px white,
    1000px 1200px white,
    987px 109px white,
    290px 700px white,
    745px 342px white,
    250px 1132px white,
    508px 900px white,
    813px 170px white,
    900px 730px white,
    769px 930px white,
    1220px 115px white;
  animation: star-animation 20s linear infinite;

  &::after{
  position: absolute;
  top: 100vh;
    content: " ";
  width: 2px;
  height: 2px;
  border-radius: 50%;
  box-shadow: 15px 150px white,
    400px 35px white,
    750px 711px white,
    600px 904px white,
    510px 82px white,
    290px 100px white,
    120px 92px white,
    300px 689px white,
    1120px 240px white,
    432px 320px white,
    920px 197px white,
    345px 280px white,
    541px 130px white,
    723px 500px white,
    410px 1046px white,
    210px 610px white,
    1250px 90px white,
    1000px 1200px white,
    987px 109px white,
    290px 700px white,
    745px 342px white,
    250px 1132px white,
    508px 900px white,
    813px 170px white,
    900px 730px white,
    769px 930px white,
    1220px 115px white;
  }
`;