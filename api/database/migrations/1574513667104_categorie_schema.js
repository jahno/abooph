'use strict'

const Schema = use('Schema')

class CategorieSchema extends Schema {
  up () {
    this.create('categories', (table) => {
      table.increments()
      table.string('nom')
      table.integer('image_id').unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('categories')
  }
}

module.exports = CategorieSchema
