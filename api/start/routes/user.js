'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/**
 * Auth Routes used for admins and users
 */
Route.group(() => {
     
Route.post('register', '/Auth/UserController.Create')


})
  .prefix('v1/user')
  .namespace('Api')

Route.get('v1/me', 'UserController.me')
  .as('me')
  .middleware('auth')