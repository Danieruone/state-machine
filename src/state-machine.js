require("colors");

class Machine {
  alphabet = ["f", "i", "n", "d"];
  input = [];
  validator = [];
  currentState = 0;
  totalStates = [];

  startMachine(string) {
    this.input = string.toLowerCase().split("");
    if (!this.validateString())
      return console.log(
        "El string contiene símbolos que no corresponden al alfabeto"
      );
    return this.startStates();
  }

  validateString() {
    return this.input.every((value) =>
      this.alphabet.some((letter) => value === letter)
    );
  }

  startStates() {
    this.input.map((letter, idx) => this.validateState(letter, idx));
    if (this.validateResult()) {
      console.log(
        `String válido \nNúmero final de iteraciones: ${this.validator.length} \nEstados: ${this.totalStates}`
          .green
      );
      return true;
    } else {
      console.log("String NO válido".red);
      return false;
    }
  }

  validateState(letter, idx) {
    if (idx === 0) {
      this.totalStates.push("q0");
    } else {
      if (this.input[idx - 1] !== letter) {
        this.currentState++;
        this.totalStates.push(`q${this.currentState}`);
      }
    }
    console.log(`Siguiente transición: q${this.currentState}`.bgBlue.black);
    return this.generateState(letter);
  }

  generateState(letter) {
    console.log(
      `Estado actual q${this.currentState} con valor ${letter}`.bgYellow.black
    );
    this.validator.push(letter);
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
