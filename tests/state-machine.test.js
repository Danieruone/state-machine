const Machine = require("../src/state-machine");

describe("state machine tests", () => {
  beforeEach(() => {
    machine = new Machine();
  });

  test("get a string 'Fins' in the class and validate it", () => {
    expect(machine.startMachine("Fins")).toBe(undefined);
  });

  test("get a string 'fffiiinndd' in the class and validate it", () => {
    expect(machine.startMachine("fffiiinndd")).toBe(true);
  });

  test("get a string 'fffiiinn' in the class and validate it", () => {
    expect(machine.startMachine("fffiiinn")).toBe(false);
  });

  test("get a string 'iiinnd' in the class and validate it", () => {
    expect(machine.startMachine("iiinnd")).toBe(false);
  });

  test("get a string 'iiinndddd' in the class and validate it", () => {
    expect(machine.startMachine("iiinndddd")).toBe(false);
  });

  test("get a string 'innfnd' in the class and validate it", () => {
    expect(machine.startMachine("innfnd")).toBe(true);
  });

  test("get a string 'fnfiinfddi' in the class and validate it", () => {
    expect(machine.startMachine("fnfiinfddi")).toBe(true);
  });
});
