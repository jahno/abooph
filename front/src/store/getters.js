const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  refresh_token: state => state.user.refresh_token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  roles: state => state.auth.roles,
  setting: state => state.user.setting,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  errorLogs: state => state.errorLog.logs,
  // Data Getters
  tasks: state => state.tasks,
/*  products: state => state.products,*/
  currentProduct: state => state.products.currentProduct,
  orders: state => state.orders,
  currentOrder: state => state.orders.currentOrder,
  coupons: state => state.coupons,
  currentCoupon: state => state.coupons.currentCoupon,
  categories: state => state.categories,
  currentCategory: state => state.categories.currentCategory,
  images: state => state.images,
  users: state => state.users,
  currentUser: state => state.users.currentUser,
  dashboard: state => state.dashboard
}
export default getters
