/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const AdminSeries = lazyLoad(
  () => import('./index'),
  module => module.AdminSeries,
);
