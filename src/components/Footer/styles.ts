import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Footer = styled.footer`
  position: relative;
  padding: 20px 0;
  background: #181818;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  color: white;
`;

export const Img = styled.img`
  max-width: 40px;
`;

export const AreaImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Copyright = styled.div`
  background: #222;
  padding: 5px;
  margin: 10px 0;
  text-align: center;
  color: white;
`;
export const Widget = styled.div``;

export const WidgetTitle = styled.h5`
  font-size: 1.3rem;
`;

export const Ul = styled.ul`
  list-style: none;
  /* gap: 5px; */
`;

export const Paragraph = styled.p`
  margin: 5px 0;
`;

export const Li = styled.li``;

export const Button = styled.button`
  display: inline-block;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: 2px solid #3498db;
  color: #fff;
  background-color: #39405c;
  border-radius: 5px;
  transition:
    background-color 0.3s,
    color 0.3s;

  &&:hover {
    background-color: #2980b9;
    border: 2px solid #39405c;
    color: #fff;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`;

export const Divider = styled.div`
  width: 150px;
  height: 3px;
  background-color: #39405c;
  margin: 10px 0;
`;
