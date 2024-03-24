/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const AdminTag = lazyLoad(
  () => import('./index'),
  module => module.AdminTag,
);
