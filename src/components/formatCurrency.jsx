export const formatCurrency = (currency, value, isEditing) => {
  if (value)
    if (isEditing) {
      return value.toString();
    } else {
      return value.toLocaleString("en-US", {
        style: "currency",
        currency: currency,
      });
    }
};
