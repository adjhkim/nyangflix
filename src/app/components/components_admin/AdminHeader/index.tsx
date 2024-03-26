import * as React from 'react';
import styled from 'styled-components';
import { useAppDispatch } from 'hooks';
import { adminMenuActions } from 'store';
import { useNavigate } from 'react-router-dom';

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: rgba(0, 0, 0, 0.9);
  user-select: none;
  transition: all ease 0.25s;
`;

const HeaderTitle = styled.span`
  font-size: 2vh;
  font-weight: 800;
  letter-spacing: 0.5vh;
  cursor: pointer;
  transition: all ease 0.25s;

  &:hover {
    letter-spacing: 1vh;
  }
`;

export function AdminHeader() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <Header>
      <HeaderTitle
        onClick={() => {
          dispatch(adminMenuActions.resetMenu());
          navigate('/admin');
        }}
      >
        관리자 모드
      </HeaderTitle>
    </Header>
  );
}
