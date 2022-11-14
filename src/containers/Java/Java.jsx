import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './Java.scss'
import { images } from '../../constants'

function BasicExample() {
  return (
    <div className='app__body'>
      <div className='app__card'>
      <Card style={{ width: '18rem' }}>
      <img src={images.download} alt="logo" />

      <Card.Body className='app__body-body'>

        <Card.Title className='title'>Java Programming</Card.Title>
        <Card.Text className='text'>
        Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.
        </Card.Text>

        <Button className='btn1'> UNIT - I </Button>
        <Button className='btn2'> UNIT - II </Button>
        <Button className='btn3'> UNIT - III </Button>
        <Button className='btn4'> UNIT - IV </Button>
        <Button className='btn5'> UNIT - V </Button>

      </Card.Body>

    </Card>
      </div>
    </div>
    
  );
}

export default BasicExample;