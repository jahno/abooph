'use strict'

const Schema = use('Schema')

class CoursierSchema extends Schema {
  up () {
    this.create('coursiers', (table) => {
      table.increments()
       table.string('username', 80).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('tel', 254).notNullable()
      table.string('localite', 254).notNullable()
      table.string('image', 254)
      table.string('password', 60).notNullable()
      table.integer('image_id').unsigned()
      
      table.timestamps()
    })
  }

  down () {
    this.drop('coursiers')
  }
}

module.exports = CoursierSchema
