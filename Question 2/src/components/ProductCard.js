import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled(Link)`
  display: block;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 15px;
`;

const CardTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const CardInfo = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.lightText};
  margin-bottom: 5px;
`;

const ProductCard = ({ product }) => {
  const randomImageUrl = `https://picsum.photos/seed/${product.id}/300/200`;

  return (
    <Card to={`/product/${product.id}`}>
      <CardImage src={randomImageUrl} alt={product.name} />
      <CardContent>
        <CardTitle>{product.name}</CardTitle>
        <CardInfo>Price: Rs.{product.price}</CardInfo>
        <CardInfo>Rating: {product.rating}</CardInfo>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
