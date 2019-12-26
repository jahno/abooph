Route.group(() => {
  

  /**
   * Article resource Routes
   */
  Route.get('article/index', 'ArticleController.index')


 
     

})
  .prefix('v1/article')
  .namespace('Client')