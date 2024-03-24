import * as React from 'react';
import styled from 'styled-components';
import { AdminPage } from '..';

const Test = styled.div`
  width: 100%;
  height: 100%;
`;

export function AdminList() {
  return <AdminPage content={<Test>리스트 페이지</Test>}></AdminPage>;
}
