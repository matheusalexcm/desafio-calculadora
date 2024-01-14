import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row, Column } from "./styles";
import { useState } from 'react';

const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState();
  const [operation, setOperation] = useState('');

  const handlerAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handlerClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  const handlerSumNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handlerMinusNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    }else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handlerMultNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('x')
    }else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handlerDivideNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')
    }else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handlerEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch (operation) {
        case '+':
            handlerSumNumbers();
          break;
          case '-':
            handlerMinusNumbers();
          break;
          case 'x':
            handlerMultNumbers();
          break;
          case '/':
            handlerDivideNumbers();
          break;
        default:
          break;
      }
    }

  }

  return (
    <Container className="App">
      <Content >
        <Input value={currentNumber}/>
        <Row>
          <Button label="x" onClick={handlerMultNumbers}/>
          <Button label="/" onClick={handlerDivideNumbers}/>
          <Button label="c" onClick={handlerClear}/>
          <Button label="."/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handlerAddNumber('7')}/>
          <Button label="8" onClick={() => handlerAddNumber('8')}/>
          <Button label="9" onClick={() => handlerAddNumber('9')}/>
          <Button label="-" onClick={handlerMinusNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handlerAddNumber('4')}/>
          <Button label="5" onClick={() => handlerAddNumber('5')}/>
          <Button label="6" onClick={() => handlerAddNumber('6')}/>
          <Button label="+" onClick={handlerSumNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handlerAddNumber('1')}/>
          <Button label="2" onClick={() => handlerAddNumber('2')}/>
          <Button label="3" onClick={() => handlerAddNumber('3')}/>
          <Button label="=" onClick={handlerEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
