const Machine = require("../src/state-machine");

describe("state machine tests", () => {
  test("get a string 'Fins' in the class and validate it", () => {
    let machine = new Machine("Fins");
    expect(machine.startMachine()).toBe(false);
  });

  test("get a string 'fffiiinndd' in the class and validate it", () => {
    let machine = new Machine("fffiiinndd");
    expect(machine.startMachine()).toBe(true);
  });
});
