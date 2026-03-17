const checkPayment = require("./payment");

describe("checkPayment()", () => {
  test("amount greater than 100 is accepted", () => {
    const r = checkPayment(150);
    expect(r).toEqual({
      success: true,
      message: "Payment accepted",
    });
  });

  test("amount equal to 100 is accepted (boundary)", () => {
    const r = checkPayment(100);
    expect(r).toEqual({
      success: true,
      message: "Payment accepted",
    });
  });

  test("amount just below 100 is rejected", () => {
    const r = checkPayment(99);
    expect(r).toEqual({
      success: false,
      message: "Payment rejected",
    });
  });

  test("small positive amount is rejected", () => {
    const r = checkPayment(1);
    expect(r).toEqual({
      success: false,
      message: "Payment rejected",
    });
  });

  test("amount zero is not processed", () => {
    const r = checkPayment(0);
    expect(r).toEqual({
      success: false,
      message: "Payment cannot be processed",
    });
  });

  test("negative amount is not processed", () => {
    const r = checkPayment(-50);
    expect(r).toEqual({
      success: false,
      message: "Payment cannot be processed",
    });
  });

  test("string number input is invalid", () => {
    const r = checkPayment("200");
    expect(r).toEqual({
      success: false,
      message: "Invalid amount",
    });
  });

  test("non-numeric string is invalid", () => {
    const r = checkPayment("abc");
    expect(r).toEqual({
      success: false,
      message: "Invalid amount",
    });
  });

  test("NaN input is invalid", () => {
    const r = checkPayment(NaN);
    expect(r).toEqual({
      success: false,
      message: "Invalid amount",
    });
  });

  test("null input is invalid", () => {
    const r = checkPayment(null);
    expect(r).toEqual({
      success: false,
      message: "Invalid amount",
    });
  });
});
