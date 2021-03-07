import React from 'react';
import { Container, StarMain, StarSecond } from '../styles/components/stars/style';

const Stars: React.FC = () => {
  return (
    <Container>
      <StarMain></StarMain>
      <StarSecond></StarSecond>
    </Container>
  );
}

export default Stars;