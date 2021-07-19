class Machine {
  alphabet = ["f", "i", "n", "d"];
  array = [];
  constructor(string) {
    this.array = string.toLowerCase().split("");
  }
  startMachine() {
    // if (!this.validateString()) return console.log("String no válido");
    return this.validateString();
  }
  validateString() {
    return this.array.every((value) =>
      this.alphabet.some((letter) => value === letter)
    );
  }
}

module.exports = Machine;
