const checkPayment = require("./payment");

describe("checkPayment()", () => {
  test("amount greater than 100 is accepted", () => {
    const r = checkPayment(150);
    expect(r.success).toBe(true);
  });

  test("amount equal to 100 is accepted", () => {
    const r = checkPayment(100);
    expect(r.success).toBe(true);
  });

  // finish your code here
});
