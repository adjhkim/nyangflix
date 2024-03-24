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
`;

const HeaderTitle = styled.span`
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 4px;
  cursor: pointer;
  transition: all ease 0.5s;

  &:hover {
    letter-spacing: 8px;
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
