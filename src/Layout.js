import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #343a40;
  padding: 20px;
  color: white;
  text-align: center;
`;

const FooterContainer = styled.footer`
  background-color: #343a40;
  color: white;
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const Header = () => (
  <HeaderContainer>
    <h1>ShopMate</h1>
    <p>Your go-to online store for amazing products</p>
  </HeaderContainer>
);

export const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 ShopMate. All rights reserved.</p>
  </FooterContainer>
);
