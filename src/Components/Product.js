import React from 'react'
import './Product.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button ,Card} from 'react-bootstrap'
function Product() {
  return (
      <Card className="mb-3 product" style={{ width: '20rem'}}>
      <Card.Img variant="top" src="https://picsum.photos/200/100" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <a href="#a" class="btn btn-primary">Go somewhere</a>
      </Card.Body>
  </Card>
   
    
  )
}

export default Product