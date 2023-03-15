export const formatCurrency = (isTyping, currency, value) => {
  if (isTyping) {
    return value;
  } else {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
    });
    return formatter.format(value);
  }
};

export const formatCurrency2 = (currency, value) => {
  let stringAmount = value.toLocaleString("en-US", {
    style: "currency",
    currency: currency,
  });
  return stringAmount;
};
