import * as React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { adminMenuActions } from 'store';
import { useNavigate } from 'react-router-dom';

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 25vh;
  height: 90vh;
  padding: 10vh 2vh;
  background-color: rgba(0, 0, 0, 0.75);
  transition: all ease 0.25s;
  user-select: none;
`;

//NavBar에 들어갈 아이템 디자인 (hover&선택 시 하이라이트)
const BarItem = styled.span<{ menuState?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  color: ${props => (props.menuState === 'on' ? 'rgb(229, 9, 20);' : 'none')};
  font-size: 1.75vh;
  font-weight: 1000;
  letter-spacing: 0.5vh;
  cursor: pointer;
  transition: all ease 0.25s;

  &:hover {
    letter-spacing: 1vh;
  }
`;
//-----------------------------------------------------------------

export function AdminNavbar() {
  //선택한 메뉴 하이라이트 상태 관리
  const adminMenu = useAppSelector(state => state.adminMenu);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  //-----------------------------------------------------------------

  //adminMenu 크기만큼 BarItem 리스트 생성
  function createBarItem() {
    const menuName: string[] = ['TAG', 'SERIES', 'LIST', 'CATEGORY'];
    const result: JSX.Element[] = [];
    for (let i = 0; i < adminMenu.length; i++) {
      result.push(
        <BarItem
          key={'item' + i}
          menuState={adminMenu[i]}
          onClick={() => {
            dispatch(adminMenuActions.resetMenu());
            dispatch(adminMenuActions.toggleMenu(i));
            navigate(`/admin/${menuName[i].toLowerCase()}`);
          }}
        >
          {menuName[i]}
        </BarItem>,
      );
    }
    return result;
  }
  //-----------------------------------------------------------------
  return <NavBar>{createBarItem()}</NavBar>;
}
