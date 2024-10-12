import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ProductCard = styled(Card)`
  margin: 20px 0;
  text-align: center;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = ['all', 'electronics', 'jewelery', "men's clothing", "women's clothing"];

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === 'all' || product.category === selectedCategory) &&
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <h2 className="mt-5 text-center">Explore Our Products</h2>

      <SearchBar
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <Row>
        {filteredProducts.map((product) => (
          <Col key={product.id} md={4}>
            <ProductCard>
              <Card.Img variant="top" src={product.image} alt={product.title} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Link to={`/product/${product.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </Card.Body>
            </ProductCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
