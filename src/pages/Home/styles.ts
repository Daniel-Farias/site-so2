import styled from 'styled-components';

export const Container = styled.div`
  background: #e0e0e0;
  color: #000;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  height: auto;
  align-items: center;
  /* margin-bottom: 60px; */
`;

export const Title = styled.h1`
  font-size: 50px;
  margin: 50px 0;
`;

export const FilterContainer = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
  list-style: none;
  margin: 10px 0;
`;

export const Filter = styled.li`
  & + & {
    margin-left: 10px;
  }
  cursor: pointer;
  font-weight: bold;

  &.active {
    color: #ff9000;

    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      margin-top: 5px;
      background: #ff9000;
    }
  }
`;

export const PostsList = styled.section`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
