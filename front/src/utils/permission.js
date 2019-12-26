import store from '../store/store.js'

/**
 * @param {Array} value
 * @returns {Boolean}
 * @example see @/views/permission/directive.vue
 */
export default function checkPermission(value) {
  if (value && value instanceof Array && value.length > 0) {
    const roles = store.getters && store.getters.roles
    const permissionRoles = value

   if(roles != null){
    const hasPermission = roles.some(role => {
      return permissionRoles.includes(role)
    })

    if (!hasPermission) {
      return false
    }
     return true

   }
    
    
    return false
  } else {
    console.error(`need roles! Like v-permission="['admin','editor']"`)
    return false
  }
}
