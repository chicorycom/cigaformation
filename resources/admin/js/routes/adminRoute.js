import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
function page (path) {
    return () => import(`../pages/${path}`).then(m => m.default || m)
}
export default {
  path: '/',
  component: DashboardLayout,
  redirect: '/dashboard',
  children: [
    {
      path: 'dashboard',
      name: 'Dashboard',
      component: page('Overview.vue')
    },
      {
          path: '/categories',
          name: 'categories',
          component: page('foo.vue')
      },
  ]
}
