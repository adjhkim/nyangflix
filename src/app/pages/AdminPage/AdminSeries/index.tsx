import * as React from 'react';
import styled from 'styled-components';
import { AdminPage } from '..';
import { ContentHeader } from 'app/components/components_admin/ContentHeader';
import { ContentArea } from 'app/components/components_admin/ContentArea';

const Test = styled.div``;

export function AdminSeries() {
  function createMainFunc() {
    return <Test></Test>;
  }

  function createContent() {
    return [<Test key={'test' + 1}></Test>];
  }

  return (
    <AdminPage
      content={
        <>
          <ContentHeader name="시리즈 관리"></ContentHeader>
          <ContentArea
            func={createMainFunc()}
            content={createContent()}
          ></ContentArea>
        </>
      }
    ></AdminPage>
  );
}
