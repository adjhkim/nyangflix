import * as React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #141414;
  color: #fff;
  font-family: 'Black Han Sans', sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
`;

const HeaderTitle = styled.span`
  font-size: 1.5rem;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10%;
  min-width: 200px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 1s;
`;

const BarItem = styled.span`
  font-size: 1.5rem;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
`;

export function AdminPage() {
  return (
    <>
      <Background>
        <Header>
          <HeaderTitle>관리자 모드</HeaderTitle>
        </Header>
        <Wrapper>
          <NavBar>
            <BarItem>태그 관리</BarItem>
            <BarItem>시리즈 관리</BarItem>
            <BarItem>리스트 관리</BarItem>
            <BarItem>카테고리 관리</BarItem>
          </NavBar>
          <ContentBox></ContentBox>
        </Wrapper>
      </Background>
    </>
  );
}
