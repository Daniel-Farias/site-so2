import styled from 'styled-components';

export const Container = styled.div`
  background: #e0e0e0;
  color: #000;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  align-items: center;
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
  text-transform: uppercase;

  &.active {
    color: #3498db;

    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      margin-top: 5px;
      background: #3498db;
    }
  }
`;

export const PostListContainer = styled.section`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const PostsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
