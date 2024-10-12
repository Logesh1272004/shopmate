import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import styled from 'styled-components';

const ProductImage = styled.img`
  max-width: 300px;
  margin-bottom: 20px;
`;

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body className="text-center">
          <ProductImage src={product.image} alt={product.title} />
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductDetails;
