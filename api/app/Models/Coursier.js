'use strict'

const Model = use('Model')

class Coursier extends Model {

	comandes()
	{
		 return this.hasMany('App/Models/Commande');
	}

	/*zone()
	{
		return this.belongsTo('App/Models/zone');
	}*/
}

module.exports = Coursier
