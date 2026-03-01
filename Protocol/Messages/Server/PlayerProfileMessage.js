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
    this.decks = [
        [26000000, 26000001, 26000002, 26000003, 26000004, 26000005, 26000006, 26000007],   // Deck 1
        [26000000, 26000001, 26000002, 26000003, 26000004, 26000005, 26000006, 26000007],   // Deck 2
        [26000000, 26000001, 26000002, 26000003, 26000004, 26000005, 26000006, 26000007],   // Deck 3
        [26000000, 26000001, 26000002, 26000003, 26000004, 26000005, 26000006, 26000007],   // Deck 4
        [26000000, 26000001, 26000002, 26000003, 26000004, 26000005, 26000006, 26000007],   // Deck 5
    ]
    this.selectedDeck = 0
    this.cards = [
        { ID: 1, level: 0, xpPoints: 1 },
        { ID: 2, level: 0, xpPoints: 1 },
        { ID: 3, level: 0, xpPoints: 1 },
        { ID: 4, level: 0, xpPoints: 1 },
        { ID: 5, level: 0, xpPoints: 1 },
        { ID: 6, level: 0, xpPoints: 1 },
        { ID: 7, level: 0, xpPoints: 1 },
        { ID: 8, level: 0, xpPoints: 1 },
    ]

    this.writeVInt(8)
    this.writeShort(255)
    this.writeVInt(1)
    
    let currentDeck = this.decks[this.selectedDeck]
    currentDeck.forEach(cardSCID => {
        let card = utils.findObjectByKey(this.cards, 'ID', cardUtils.SCIDtoInstanceID(cardSCID))

        this.writeVInt(card.ID)
        this.writeVInt(card.level)
        this.writeVInt(0)
        this.writeVInt(card.xpPoints)
        this.writeVInt(0)
        this.writeVInt(0)
        this.writeVInt(0)
    })

    this.writeLong(0, 1) // HighID, LowID

    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(1)

    const avatar = new ClientAvatar()
    avatar.encode(this)
  }
}

module.exports = PlayerProfileMessage