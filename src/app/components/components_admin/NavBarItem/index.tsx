import * as React from 'react';
import styled from 'styled-components';
import { useAppSelector } from 'hooks';
import { useNavigate } from 'react-router-dom';

//NavBar에 들어갈 아이템 디자인 (hover&선택 시 하이라이트)
const Item = styled.span<{ menuState?: string }>`
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

export function NavBarItem() {
  //선택한 메뉴 하이라이트 상태 관리
  const selector = useAppSelector(state => state.adminMenuState);
  const navigate = useNavigate();
  //-----------------------------------------------------------------

  //adminMenu 크기만큼 BarItem 리스트 생성
  const result: JSX.Element[] = [];
  for (let i in selector.menu) {
    result.push(
      <Item
        key={'item' + i}
        menuState={selector.menu[i].onOff}
        onClick={() => {
          navigate(`/admin/${selector.menu[i].name.toLowerCase()}`);
        }}
      >
        {selector.menu[i].name}
      </Item>,
    );
  }
  //-----------------------------------------------------------------

  return <>{result}</>;
}
