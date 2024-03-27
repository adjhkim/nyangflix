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

export function AdminPage() {
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
