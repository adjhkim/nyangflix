import * as React from 'react';
import {
  AdminBackground,
  AdminBody,
  AdminContentBox,
  AdminHeader,
  AdminNavBar,
} from 'app/components/components_admin/AdminTemplate';
import { AdminTitle } from 'app/components/components_admin/AdminTitle';
import { NavBarItem } from 'app/components/components_admin/NavBarItem';
import { useAppDispatch } from 'hooks';
import { menuStateActions } from 'store';
import { useEffect } from 'react';

export function AdminPage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(menuStateActions.resetMenu());
  });
  return (
    <AdminBackground>
      <AdminHeader>
        <AdminTitle></AdminTitle>
      </AdminHeader>
      <AdminBody>
        <AdminNavBar>
          <NavBarItem></NavBarItem>
        </AdminNavBar>
        <AdminContentBox></AdminContentBox>
      </AdminBody>
    </AdminBackground>
  );
}
