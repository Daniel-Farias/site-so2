import styled from 'styled-components';

export const Content = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  max-width: 300px;
  border-radius: 4px;
  margin: 10px 10px 10px 0;
`;

export const Image = styled.img`
  height: 100%;
  max-height: 200px;
  object-fit: cover;
`;

export const Body = styled.div`
  background: #39405c;
  padding: 15px;
`;

export const CategoryContainer = styled.div`
  margin: 10px 0 15px 0;
`;

export const Category = styled.span`
  border-radius: 4px;
  font-size: 14px;
  color: #fff;
  background: #ff9000;
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
`;
