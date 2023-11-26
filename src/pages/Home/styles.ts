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

export const Banner = styled.div`
  position: relative;
  width: 65%;
  height: 250px;
  display: flex;
  margin: 20px 0;
  border-radius: 5px;
  box-shadow:
    0 2px 4px 0 rgba(0, 0, 0, 0.2),
    0 3px 10px 0 rgba(0, 0, 0, 0.19);
  background-image: url('https://static.vecteezy.com/ti/vetor-gratis/p1/5120230-atualizacao-conceito-programador-atualizacao-operacao-sistema-do-computador-ilustracaoial-plana-vetor.jpg');
  background-repeat: no-repeat;
  background-position: top left;
`;

export const Title = styled.h1`
  font-size: 40px;
  position: absolute;
  color: #021118;
  bottom: 20px;
  left: 15px;
`;

export const FilterContainer = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
  list-style: none;
  margin: 20px 0;
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
