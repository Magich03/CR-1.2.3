const PiranhaMessage = require('../../PiranhaMessage')

class AllianceStreamMessage extends PiranhaMessage {
  constructor (client) {
    super()
    this.id = 24311
    this.client = client
    this.version = 1
  }

  async encode () {
    let num = 0

    this.writeByte(2)

    this.writeHex('90EDBAEB01')

    this.writeVInt(num + 1)
    // StreamEntry::encode
    {
      this.writeLong(0, 1) // AllianceHighID, AllianceLowID
      this.writeLong(0, 1) // AllianceHighID, AllianceLowID
      this.writeString('Clashers') // AllianceName
      this.writeByte(8)
      this.writeVInt(2) // Role (1 = Member, 2 = Leader, 3 = Elder, 4 = Co-Leader)
      this.writeByte(30)
      this.writeByte(0)
    }
  }
}

module.exports = AllianceStreamMessage