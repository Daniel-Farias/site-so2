import styled from 'styled-components';

export const Container = styled.aside`
  background: #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  min-width: 320px;
  padding: 10px;
  margin-top: 30px;
`;

export const LogoContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  height: 100px;
  margin-bottom: 10px;
`;

export const LogoText = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin: 2px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 18px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 10px;
`;

export const ItemsContainer = styled.ul`
  margin-left: 30px;
`;

export const Item = styled.li`
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 10px;

  a {
    text-decoration: none;
    color: #000;

    &:hover {
      color: #888;
    }
  }
`;
