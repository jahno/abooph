'use strict'

const { Command } = require('@adonisjs/ace')
const User = require('App/Models/User')
class CreateUser extends Command {
  static get signature () {
    return 'create:user'
  }

  static get description () {
    return 'commande pour cree un user'
  }

  async handle (args, options) {
     const ue = await User.findOrCreate({'username':'jahno','email':'jeba760@gmail.com','password':'jeba760'})
    this.info('ok')
  }
}

module.exports = CreateUser
