const PiranhaMessage = require('../../PiranhaMessage')
const ClientAvatar = require('../../../Logic/ClientAvatar')
const cardUtils = require('../../../Utils/cardUtils')
const utils = require('../../../Utils')

class PlayerProfileMessage extends PiranhaMessage {
  constructor (client, HighID, LowID) {
    super()
    this.id = 24113
    this.client = client
    this.version = 1
    this.HighID = HighID
    this.LowID = LowID
  }

  async encode () {
    this.writeByte(1)

    this.writeLong(0, 1) // HighID, LowID

    const avatar = new ClientAvatar()
    avatar.encode(this)
  }
}

module.exports = PlayerProfileMessage