
const index = () => import('./')

export default [
  {
    path: '/',
    name: 'index',
    component: index,
    meta: { requiresAuth: false }
  }
]
