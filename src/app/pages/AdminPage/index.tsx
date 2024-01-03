import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adminAction } from 'store/admin';
import store from 'store/index';
import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #141414;
  color: #fff;
  font-family: 'Noto Sans KR', sans-serif;
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
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 4px;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 10%;
  min-width: 200px;
  height: 100%;
  padding: 10vh 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 1s;
`;

const BarItem = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 4px;
  cursor: pointer;

  &:hover {
    background-color: #141414;
    animation: breathe 1500ms infinite both;
  }

  @keyframes breathe {
    0% {
      font-weight: 700;
      letter-spacing: 4px;
    }
    50% {
      font-weight: 100;
      letter-spacing: 0px;
    }
    100% {
      font-weight: 700;
      letter-spacing: 4px;
    }
  }
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
`;

export function AdminPage() {
  const dispatch = useDispatch();
  // const adminState = useSelector(state => state.admin);
  const adminToggle = function () {
    dispatch(adminAction.toggle());
  };

  return (
    <>
      <Background>
        <Header>
          <HeaderTitle>관리자 모드</HeaderTitle>
        </Header>
        <Wrapper>
          <NavBar>
            <BarItem className="off" onClick={() => adminToggle()}>
              태그
            </BarItem>
            <BarItem className="off">시리즈</BarItem>
            <BarItem className="off">리스트</BarItem>
            <BarItem className="off">카테고리</BarItem>
          </NavBar>
          <ContentBox></ContentBox>
        </Wrapper>
      </Background>
    </>
  );
}
