'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/**
 * Auth Routes used for admins and users
 */
Route.group(() => {
     
Route.post('login', 'AuthController.Login')
Route.post('register','AuthController.register')
Route.post('logout','AuthController.logout').middleware(['auth'])



})
  .prefix('v1/auth')
  .namespace('Auth')
