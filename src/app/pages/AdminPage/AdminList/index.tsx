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
import { useAppDispatch } from 'hooks';
import { menuStateActions } from 'store';
import { useEffect } from 'react';

export function AdminList() {
  //현재 선택한 NavBar 메뉴 상태 관리
  const pathName = window.location.pathname.split('/')[2];
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(menuStateActions.resetMenu());
    dispatch(menuStateActions.toggleMenu(pathName));
  });
  //-----------------------------------------------------------------

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
            <MainHead></MainHead>
            <MainBody></MainBody>
          </MainBox>
        </AdminContentBox>
      </AdminBody>
    </AdminBackground>
  );
}
