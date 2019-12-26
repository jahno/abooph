'use strict'

const Model = use('Model')

class Mesure extends Model {

	commande()
	{
		return this.belongsTo('App/Models/Commande');
	}
}

module.exports = Mesure
