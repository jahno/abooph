'use strict'


const Route = use('Route')


 
Route.group(() => {
  

  /**
   * Article resource Routes
   */
  Route.resource('article', 'ArticleController').apiOnly()



  /**
   * Users Resource Rotues
   */
  Route.resource('users', 'UserController')
    .apiOnly()
     

  /**
   * Dashboard Routes
   */
  Route.get('dashboard', 'DashboardController.index').as('dahboard')
})
  .prefix('v1/admin')
  .namespace('Admin')
 // .middleware(['auth', 'is:(admin || manager)'])
