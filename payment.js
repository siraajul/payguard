function checkPayment(amount) {
  // 1. Validate type (must be a real number)
  if (typeof amount !== "number" || Number.isNaN(amount)) {
    return {
      success: false,
      message: "Invalid amount",
    };
  }

  // 2. Business rule: amount <= 0
  if (amount <= 0) {
    return {
      success: false,
      message: "Payment cannot be processed",
    };
  }

  // 3. Threshold: amount >= 100
  if (amount >= 100) {
    return {
      success: true,
      message: "Payment accepted",
    };
  }

  // 4. Remaining valid but below threshold
  return {
    success: false,
    message: "Payment rejected",
  };
}

module.exports = checkPayment;
