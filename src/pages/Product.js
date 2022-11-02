import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Card, CardBody, CardText, CardTitle, Col, Row } from 'reactstrap';
import { buyProduct } from '../actions/cartAction';
import { product } from '../db';

const Product = () => {
  const dispatch = useDispatch()
  return (
    <div className='container mt-5'>
      <h1>List Product</h1>
      <Row xs="4" className='mt-3'>
        {product && product.map((item, index) => {
          const product_current = {
            id: item.id,
            name: item.name,
            price: item.price,
          };
          return (
            <Col key={index} className="my-3">
              <Card
                style={{
                  width: '18rem'
                }}
              >
                <CardBody>
                  <CardTitle tag="h5">
                    {item.name}
                  </CardTitle>
                  <CardText>
                    {item.price} $
                  </CardText>
                  <Button color='primary' onClick={() => dispatch(buyProduct(product_current))}>
                    Buy Product
                  </Button>
                </CardBody>
              </Card>
            </Col>
          )
        }

        )}

      </Row>

    </div>

  )
}

export default Product