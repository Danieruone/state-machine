class Machine {
  alphabet = ["f", "i", "n", "d"];
  input = [];
  validator = [];

  constructor(string) {
    this.input = string.toLowerCase().split("");
  }

  startMachine() {
    if (!this.validateString()) return console.log("String NO válido");
    return this.startStates();
  }

  validateString() {
    return this.input.every((value) =>
      this.alphabet.some((letter) => value === letter)
    );
  }

  startStates() {
    this.input.map((letter) => {
      switch (letter) {
        case "f":
          this.q0(letter);
          break;
        case "i":
          this.q1(letter);
          break;
        case "n":
          this.q2(letter);
          break;
        case "d":
          this.q3(letter);
          break;
      }
    });
    if (this.validateResult()) {
      console.log("String válido");
      return true;
    } else {
      console.log("String NO válido");
      return false;
    }
  }

  q0(letter) {
    console.log(`Estado actual q0 con valor ${letter}`);
    if (!this.validator.includes("f")) this.validator.push(letter);
  }
  q1(letter) {
    console.log(`Estado actual q1 con valor ${letter}`);
    if (!this.validator.includes("i")) this.validator.push(letter);
  }
  q2(letter) {
    console.log(`Estado actual q2 con valor ${letter}`);
    if (!this.validator.includes("n")) this.validator.push(letter);
  }
  q3(letter) {
    console.log(`Estado actual q3 con valor ${letter}`);
    if (!this.validator.includes("d")) this.validator.push(letter);
  }

  validateResult() {
    let valid = true;
    this.alphabet.map((letter) => {
      this.validator.includes(letter) ? null : (valid = false);
    });
    return valid;
  }
}

module.exports = Machine;
