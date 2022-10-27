import React from 'react'
import CitasButton from './CitasButton'
import Card from 'react-bootstrap/Card';

const CitasCard = () => {
  return (
    <Card className='citasCard'>
      <Card.Header>Cita</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{' '}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
            <CitasButton />
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default CitasCard;
