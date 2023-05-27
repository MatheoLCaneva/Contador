import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  max-width: 400px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Button = styled.button`
  font-size: 18px;
  font-weight: bold;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: none;
  background-color: #e0e0e0;
  color: #333;
  cursor: pointer;
  margin-right: 10px;
  ${(props) => props.increment && `margin-left: 10px;`}
`;

const Counter = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #333;
  min-width: 50px;
  text-align: center;
`;

const Amount = styled.p`
  font-size: 18px;
  color: #666;
`;

const Home = () => {
  const [melCount, setMelCount] = useState(0);
  const [matheCount, setMatheCount] = useState(0);

  useEffect(() => {
    const storedMelCount = localStorage.getItem('melCount');
    const storedMatheCount = localStorage.getItem('matheCount');

    if (storedMelCount) {
      setMelCount(Number(storedMelCount));
    }

    if (storedMatheCount) {
      setMatheCount(Number(storedMatheCount));
    }
  }, []);

  const handleMelIncrement = () => {
    const newMelCount = melCount + 1;
    setMelCount(newMelCount);
    localStorage.setItem('melCount', newMelCount);
  };

  const handleMelDecrement = () => {
    const newMelCount = melCount - 1;
    setMelCount(newMelCount >= 0 ? newMelCount : 0);
    localStorage.setItem('melCount', newMelCount >= 0 ? newMelCount : 0);
  };

  const handleMatheIncrement = () => {
    const newMatheCount = matheCount + 1;
    setMatheCount(newMatheCount);
    localStorage.setItem('matheCount', newMatheCount);
  };

  const handleMatheDecrement = () => {
    const newMatheCount = matheCount - 1;
    setMatheCount(newMatheCount >= 0 ? newMatheCount : 0);
    localStorage.setItem('matheCount', newMatheCount >= 0 ? newMatheCount : 0);
  };

  const calculateAmount = (count) => {
    return count * 10;
  };

  return (
    <Container>
      <Title>Contador de Mel:</Title>
      <CounterContainer>
        <Button onClick={handleMelDecrement}>-</Button>
        <Counter>{melCount}</Counter>
        <Button increment onClick={handleMelIncrement}>+</Button>
      </CounterContainer>
      <Amount>Valor en pesos: ${calculateAmount(melCount)}</Amount>

      <Title>Contador de Mathe:</Title>
      <CounterContainer>
        <Button onClick={handleMatheDecrement}>-</Button>
        <Counter>{matheCount}</Counter>
        <Button increment onClick={handleMatheIncrement}>+</Button>
      </CounterContainer>
      <Amount>Valor en pesos: ${calculateAmount(matheCount)}</Amount>
    </Container>
  );
};

export default Home;
