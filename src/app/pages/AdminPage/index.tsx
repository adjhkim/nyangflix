import * as React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { adminActions } from 'store';

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
  background-color: rgba(0, 0, 0, 0.9);
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
  background-color: rgba(0, 0, 0, 0.75);
  transition: all 1s;
`;

//NavBar에 들어갈 아이템 디자인 (hover&선택 시 하이라이트)
const BarItem = styled.span<{ menuState?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  color: ${props => (props.menuState === 'on' ? 'rgb(229, 9, 20);' : 'none')};
  font-size: 1rem;
  font-weight: 1000;
  letter-spacing: ${props => (props.menuState === 'on' ? '8px' : '4px')};
  cursor: pointer;
  transition: all ease 0.5s;

  &:hover {
    letter-spacing: 8px;
  }
`;
//-----------------------------------------------------------------

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
`;

export function AdminPage() {
  //선택한 메뉴 하이라이트 상태 관리
  const selector = useAppSelector(state => state.adminMenu);
  const dispatch = useAppDispatch();
  //-----------------------------------------------------------------

  //selector 크기만큼 BarItem 리스트 생성
  function createBarItem() {
    let menuName: string[] = ['TAG', 'SERIES', 'LIST', 'CATEGORY'];
    let result: Array<JSX.Element> = [];
    for (let i = 0; i < selector.length; i++) {
      result.push(
        <BarItem
          key={'item' + i}
          menuState={selector[i]}
          onClick={() => {
            dispatch(adminActions.resetMenu());
            dispatch(adminActions.toggleMenu(i));
          }}
        >
          {menuName[i]}
        </BarItem>,
      );
    }
    return result;
  }
  //-----------------------------------------------------------------

  return (
    <Background>
      <Header>
        <HeaderTitle>관리자 모드</HeaderTitle>
      </Header>
      <Wrapper>
        <NavBar>{createBarItem()}</NavBar>
        <ContentBox></ContentBox>
      </Wrapper>
    </Background>
  );
}
