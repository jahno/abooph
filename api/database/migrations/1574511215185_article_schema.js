'use strict'

const Schema = use('Schema')

class ArticleSchema extends Schema {
  up () {
    this.create('articles', (table) => {
      table.increments()
      table.string('nom')
      table.string('description')
      table.string('prix')
      table.string('stock')
      table.boolean('valid').default(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('articles')
  }
}

module.exports = ArticleSchema
