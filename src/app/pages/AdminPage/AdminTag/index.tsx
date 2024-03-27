import * as React from 'react';
import {
  AdminBackground,
  AdminBody,
  AdminContentBox,
  AdminHeader,
  AdminNavBar,
  MainBody,
  MainBox,
  MainHead,
} from 'app/components/components_admin/AdminTemplate';
import { AdminTitle } from 'app/components/components_admin/AdminTitle';
import { NavBarItem } from 'app/components/components_admin/NavBarItem';
import { ContentHead } from 'app/components/components_admin/ContentHead';
import {
  tagHeadFunc,
  tagBodyFunc,
} from 'app/components/components_admin/FunctionTag';

export function AdminTag() {
  return (
    <AdminBackground>
      <AdminHeader>
        <AdminTitle></AdminTitle>
      </AdminHeader>
      <AdminBody>
        <AdminNavBar>
          <NavBarItem></NavBarItem>
        </AdminNavBar>
        <AdminContentBox>
          <ContentHead></ContentHead>
          <MainBox>
            <MainHead>{tagHeadFunc()}</MainHead>
            <MainBody>{tagBodyFunc()}</MainBody>
          </MainBox>
        </AdminContentBox>
      </AdminBody>
    </AdminBackground>
  );
}
