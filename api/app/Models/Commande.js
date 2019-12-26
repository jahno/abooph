'use strict'

const Model = use('Model')

class Commande extends Model {

	panier()
	{
		return this.belongsTo('App/Models/Panier');
	}

   coursier()
	{
		return this.belongsTo('App/Models/Coursier');
	}

	facture()
	 {
	 	return this.belongsTo('App/Models/Facture');
	 }
}

module.exports = Commande
