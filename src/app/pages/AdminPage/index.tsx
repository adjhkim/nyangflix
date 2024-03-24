import * as React from 'react';
import styled from 'styled-components';
import { AdminHeader } from 'app/components/components_admin/AdminHeader';
import { AdminNavbar } from 'app/components/components_admin/AdminNavbar';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #141414;
  color: #fff;
  font-family: 'Noto Sans KR', sans-serif;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
`;

const AdminContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  padding: 5vh;
`;

export function AdminPage(props: { content?: JSX.Element }) {
  return (
    <Background>
      <AdminHeader></AdminHeader>
      <Wrapper>
        <AdminNavbar></AdminNavbar>
        <AdminContent>{props.content}</AdminContent>
      </Wrapper>
    </Background>
  );
}
