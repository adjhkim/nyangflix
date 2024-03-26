import * as React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7.5%;
  padding: 1vh 4vh;
  border-bottom: 1px solid #fff;
  user-select: none;
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  font-size: 1.75vh;
  font-weight: 700;
  letter-spacing: 0.25vh;
`;

const SearchArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;

export function ContentHeader(props: { name?: string }) {
  return (
    <>
      <Header>
        <Title>{props.name}</Title>
        <SearchArea></SearchArea>
      </Header>
    </>
  );
}
