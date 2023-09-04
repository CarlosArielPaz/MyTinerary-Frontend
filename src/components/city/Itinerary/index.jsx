import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Accordion from 'react-bootstrap/Accordion';

class PriceComponent extends React.Component {
  constructor(props) {
    super(props);
    this.amount = props.amount;
  }

  generateElements() {
    const elements = [];
    for (let i = 0; i < this.amount; i++) {
      elements.push(<i className="ps-2 bi bi-cash"></i>);
    }
    return elements;
  }

  render() {
    return this.generateElements();
  }
}

export default function Itinerary({ itinerary }) {
  return (
    <Card className="w-100">
      <Card.Img variant="lef" src={'http://localhost:5000' + itinerary.image} height="100px" className="object-fit-cover" />
      <Card.Header as="h5">Itinerary {itinerary.name}</Card.Header>
      <Card.Body>
        <Card.Title className="mb-4">{itinerary.operator}</Card.Title>
        <Card.Text>
          <i className="bi bi-clock-fill"></i> Duration:&nbsp;&nbsp;{itinerary.duration}
        </Card.Text>
        <Card.Text>
          <i className="bi bi-currency-dollar"></i> Price:&nbsp;&nbsp;
          <PriceComponent amount={itinerary.price} />
        </Card.Text>
        <Card.Text>
          <i className="bi bi-heart-fill"></i> Likes:&nbsp;&nbsp;{itinerary.likes}
        </Card.Text>
        <Card.Text>
          <i className="bi bi-tag-fill"></i> Hashtag:{' '}
          {itinerary.hashtags && itinerary.hashtags.length > 0
            ? itinerary.hashtags.map((tag, key) => (
                <Badge className="ms-2 p-2" bg="secondary" key={key}>
                  #{tag}
                </Badge>
              ))
            : ''}
        </Card.Text>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="text-center">View more</Accordion.Header>
            <Accordion.Body>Under constructions...</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  );
}
