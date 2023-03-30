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

const convertStringToNumber = (value) => {
  // Remove commas and dollar signs from the value
  const strippedValue = value.replace(/[\$,]/g, "");

  return parseFloat(strippedValue);
};

export const getYearsOfExperience = (str) => {
  const regex = /^(\d+)-(\d+)$/; // matches strings in the format "X-Y"
  const matches = regex.exec(str);

  if (matches) {
    const num1 = parseInt(matches[1]);
    const num2 = parseInt(matches[2]);
    return (num1 + num2) / 2;
  }

  const num = parseInt(str);

  if (!isNaN(num)) {
    return num;
  }

  return 0;
};

export const salaryInYear = (profile, row) => {
  const median = convertStringToNumber(row.median);
  const top = convertStringToNumber(row.top);
  const currentYear = new Date().getFullYear();
  const goalYear = profile.goalYear - currentYear; //Calculate how long it will take to earn money in year
  const earnAmount = profile.earnAmount / goalYear;
  return median > earnAmount || top > earnAmount;
};

export const salaryAfterGraduatingInYear = (profile, row) => {
  // console.log(row.title);
  const medianSalary = convertStringToNumber(row.median);
  const topSalary = convertStringToNumber(row.top);
  const currentYear = new Date().getFullYear();
  const educationYear = getYearsOfExperience(row.educationPeriod);
  const workingYear = profile.goalYear - currentYear - educationYear; //Calculate how long it will take to earn money in year
  if (workingYear <= 0) {
    return false;
  } else {
    return (
      workingYear * medianSalary > profile.earnAmount ||
      workingYear * topSalary > profile.earnAmount
    );
  }
};
