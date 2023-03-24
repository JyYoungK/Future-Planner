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

export const convertStringToNumber = (value) => {
  // Remove commas and dollar signs from the value
  const strippedValue = value.replace(/[\$,]/g, "");

  return parseFloat(strippedValue);
};
