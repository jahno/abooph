'use strict'

const Schema = use('Schema')

class CouturierSchema extends Schema {
  up () {
    this.create('couturiers', (table) => {
      table.increments()
     table.string('username', 80)
      table.string('email', 254).unique()
      table.string('tel', 254)
      table.string('localite', 254)
      table.string('image', 254)
      table.string('password', 60)
      table.integer('image_id').unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('couturiers')
  }
}

module.exports = CouturierSchema
