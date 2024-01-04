const obtenerPrimerStringLargo = require("../ejercicios/05.js");

describe("obtenerPrimerStringLargo", () => {
  it("should return the first string with more than 5 characters", () => {
    expect(
      obtenerPrimerStringLargo(["hello", "world", "this", "is", "a", "tester"])
    ).toBe("tester");
    expect(
      obtenerPrimerStringLargo([
        "this",
        "is",
        "a",
        "test",
        "with",
        "a",
        "long",
        "string",
      ])
    ).toBe("string");
  });

  it("should return undefined if no string with more than 5 characters is found", () => {
    expect(
      obtenerPrimerStringLargo(["hi", "theyre", "how", "are", "you"])
    ).toBe("theyre")
    expect(
      obtenerPrimerStringLargo(["this", "is", "a", "test"])
    ).toBeUndefined();
  });
});
