import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Content = styled(Link)`
  color: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  max-width: 300px;
  border-radius: 4px;
  margin: 10px 10px 10px 0;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s;
  }
`;

export const Image = styled.img`
  height: 100%;
  max-height: 200px;
  object-fit: cover;
`;

export const Body = styled.div`
  background: #021118;
  padding: 15px;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CategoryContainer = styled.div`
  margin: 10px 0 15px 0;
`;

export const Category = styled.span`
  border-radius: 4px;
  font-size: 14px;
  color: #fff;
  background: #3498db;
  padding: 5px;
  margin-right: 5px;
`;

export const Title = styled.span`
  font-size: 20px;
`;

export const Footer = styled.div`
  margin-top: 20px;
`;

export const Date = styled.span`
  font-size: 14px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  svg {
    margin-right: 8px;
  }
`;
