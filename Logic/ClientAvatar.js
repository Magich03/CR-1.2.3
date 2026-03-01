class ClientAvatar {
  async encode (self) {
    self.writeString('Astral') // Name
    self.writeByte(1) // Name Set

    self.writeVInt(0) // OldLevel?
    self.writeVInt(54)
    self.writeVInt(1) // OldArena?
    self.writeVInt(0) // Score

    self.writeByte(1)
    self.writeByte(0)
    self.writeByte(0)
    self.writeByte(0)
    self.writeByte(0)

    self.writeVInt(1) // Level
    self.writeVInt(0) // Score
    self.writeVInt(0) // Score

    self.writeByte(4)
    self.writeByte(6)
    self.writeByte(5)
    self.writeByte(5)
    self.writeByte(1)

    self.writeVInt(1000000000) // Gold

    self.writeByte(5)
    self.writeByte(2)
    self.writeByte(7)
    self.writeByte(5)
    self.writeByte(3)
    self.writeByte(10)

    self.writeByte(5)
    self.writeByte(4)
    self.writeByte(0)

    self.writeByte(5)
    self.writeByte(5)

    self.writeVInt(500000)

    // Unknown
    self.writeHex('00073c07093c08093c09093c04013c05013c06013c0a01013c0a0101050809071a000b1a01081a03091a0d0d1a0e061c00021a0c04')

    // Stats
    self.writeVInt(1000000000) // Diamonds
    self.writeVInt(1000000000) // FreeDiamonds
    self.writeVInt(0) // Experience
    self.writeVInt(1) // Level (12 = Max level)

    // 7 = Name already set + no clan
    // 8 = Set name popup + clan
    // 9 = Name already set + clan
    // < 7 =  Set name popup
    const InClan = 0
    if (InClan == 1) {
      self.writeByte(9)
      self.writeLong(0, 1) // HighID, LowID
      self.writeString('Greedycell') // Name
      self.writeByte(1) // Badge
      self.writeVInt(4) // Role
    } else {
      self.writeByte(0)
    }
  }
}

module.exports = ClientAvatar