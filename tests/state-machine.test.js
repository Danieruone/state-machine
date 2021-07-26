const Machine = require("../src/state-machine");

describe("state machine tests", () => {
  test("get a string 'Fins' in the class and validate it", () => {
    let machine = new Machine("Fins");
    expect(machine.startMachine()).toBe(undefined);
  });

  test("get a string 'fffiiinndd' in the class and validate it", () => {
    let machine = new Machine("fffiiinndd");
    expect(machine.startMachine()).toBe(true);
  });

  test("get a string 'fffiiinn' in the class and validate it", () => {
    let machine = new Machine("fffiiinn");
    expect(machine.startMachine()).toBe(false);
  });

  test("get a string 'iiinnd' in the class and validate it", () => {
    let machine = new Machine("iiinnd");
    expect(machine.startMachine()).toBe(false);
  });

  test("get a string 'innfnd' in the class and validate it", () => {
    let machine = new Machine("innfnd");
    expect(machine.startMachine()).toBe(true);
  });

  test("get a string 'fnfiinfddi' in the class and validate it", () => {
    let machine = new Machine("fnfiinfddi");
    expect(machine.startMachine()).toBe(true);
  });
});
