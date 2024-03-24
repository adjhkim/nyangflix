/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const AdminCategory = lazyLoad(
  () => import('./index'),
  module => module.AdminCategory,
);
