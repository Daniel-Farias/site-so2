import styled from 'styled-components';
interface SideBarProps {
  extend: boolean;
}

export const SideBarArea = styled.div<SideBarProps>`
  display: flex;
  flex-direction: row;
  transition: transform 0.4s;
  transform: ${(props) => (props.extend ? 'translateX(0)' : 'translateX(-320px)')};
  @media (max-width: 700px) {
    position: absolute;
  }
`;

export const SideBarToggle = styled.div`
  font-size: 30px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #3498db;
  color: #fff;
  cursor: pointer;
  display: none;
  @media (max-width: 700px) {
    display: flex;
  }
`;

export const Container = styled.aside<SideBarProps>`
  background: #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  min-width: 320px;
  padding: 10px;
  overflow-x: hidden;
  transition: transform 0.5s;
  transform: ${(props) => (props.extend ? 'translateX(0)' : 'translateX(-320px)')};

  @media (min-width: 700px) {
    transform: ${(props) => (props.extend ? 'translateX(0)' : 'translateX(320px)')};
  }
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
