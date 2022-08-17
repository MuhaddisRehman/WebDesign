import React from 'react'
import Card from 'react-bootstrap/Card';
import '../components/Card.css';

function card(props) {
    return (
        <Card className='cardEffects m-auto mb-4' style={{ width: '22rem' }}>
            <Card.Img variant="top" src={props.Img} />
            <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.description}
            </Card.Text>
            </Card.Body>
        </Card>
        
    
    )
}

export default card