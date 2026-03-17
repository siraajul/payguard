const checkPayment = require('./payment');

describe("checkPayment()", () => { 

  test("amount greater than 100 is accepted", () => {
    const r = checkPayment(150);
    expect(r.success).toBe(true);
  });

  test("amount equal to 100 is accepted", () => {
    const r = checkPayment(100);
    expect(r.success).toBe(true);
  });

  // --- Finished Code Below ---

  test("amount just below 100 is rejected", () => {
    const r = checkPayment(99);
    expect(r.success).toBe(false);
  });

  test("small positive amount is rejected", () => {
    const r = checkPayment(50);
    expect(r.success).toBe(false);
  });

  test("amount zero or negative is not processed", () => {
    const testZero = checkPayment(0);
    expect(testZero.success).toBe(false);

    const testNegative = checkPayment(-10);
    expect(testNegative.success).toBe(false);
  });

  test("non-numeric strings are invalid", () => {
    const testString = checkPayment("200");
    expect(testString.success).toBe(false);

    const testText = checkPayment("abc");
    expect(testText.success).toBe(false);
  });

  test("null and NaN inputs are invalid", () => {
    const testNull = checkPayment(null);
    expect(testNull.success).toBe(false);

    const testNaN = checkPayment(NaN);
    expect(testNaN.success).toBe(false);
  });

});
