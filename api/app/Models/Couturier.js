'use strict'

const Model = use('Model')

class Couturier extends Model {


	articles()
	{
		return this.hasMany('App/Models/Article');
	}
}

module.exports = Couturier
