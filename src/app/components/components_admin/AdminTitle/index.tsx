import * as React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Title = styled.span`
  font-size: 2vh;
  font-weight: 800;
  letter-spacing: 0.5vh;
  cursor: pointer;
  transition: all ease 0.25s;

  &:hover {
    letter-spacing: 1vh;
  }
`;

export function AdminTitle() {
  const navigate = useNavigate();
  return (
    <Title
      onClick={() => {
        navigate('/admin');
      }}
    >
      관리자 모드
    </Title>
  );
}
