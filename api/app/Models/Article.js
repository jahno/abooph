'use strict'

const Model = use('Model')

class Article extends Model {


	paniers()
	{
		 return this.belongsToMany('App/Models/Panier')
	}

	couturier()
	{
		 return this.belongsTo('App/Models/Couturier')
	}

	types()
	{
		return this.hasMany('App/Models/Type');
	}

	images()
	{
		 return this.hasMany('App/Models/Image')
	}

	categories()
	{
		 return this.belongsToMany('App/Models/Categorie')
	}
	
}

module.exports = Article
