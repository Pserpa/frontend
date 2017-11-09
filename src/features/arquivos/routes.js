
const index = () => import('./')

export default [
  {
    path: '/arquivos',
    name: 'arquivos.index',
    component: index,
    meta: { requiresAuth: false }
  }
]
