import React from "react";
import { Dropdown } from "semantic-ui-react";

function DropdownExampleSearchSelection({ setCountry }) {
  const handleCountryChange = (e, { value }) => {
    const selectedOption = countryOptions.find(
      (option) => option.value === value
    );

    console.log(selectedOption?.text || "");
    setCountry(selectedOption?.text || "");
  };

  const countryOptions = [
    { key: "ca", value: "ca", flag: "ca", text: "Canada" },
    { key: "us", value: "us", flag: "us", text: "United States" },
    { key: "af", value: "af", flag: "af", text: "Afghanistan" },
    { key: "ax", value: "ax", flag: "ax", text: "Aland Islands" },
    { key: "al", value: "al", flag: "al", text: "Albania" },
    { key: "dz", value: "dz", flag: "dz", text: "Algeria" },
    { key: "as", value: "as", flag: "as", text: "American Samoa" },
    { key: "ad", value: "ad", flag: "ad", text: "Andorra" },
    { key: "ao", value: "ao", flag: "ao", text: "Angola" },
    { key: "ai", value: "ai", flag: "ai", text: "Anguilla" },
    { key: "ag", value: "ag", flag: "ag", text: "Antigua" },
    { key: "ar", value: "ar", flag: "ar", text: "Argentina" },
    { key: "am", value: "am", flag: "am", text: "Armenia" },
    { key: "aw", value: "aw", flag: "aw", text: "Aruba" },
    { key: "au", value: "au", flag: "au", text: "Australia" },
    { key: "at", value: "at", flag: "at", text: "Austria" },
    { key: "az", value: "az", flag: "az", text: "Azerbaijan" },
    { key: "bs", value: "bs", flag: "bs", text: "Bahamas" },
    { key: "bh", value: "bh", flag: "bh", text: "Bahrain" },
    { key: "bd", value: "bd", flag: "bd", text: "Bangladesh" },
    { key: "bb", value: "bb", flag: "bb", text: "Barbados" },
    { key: "by", value: "by", flag: "by", text: "Belarus" },
    { key: "be", value: "be", flag: "be", text: "Belgium" },
    { key: "bz", value: "bz", flag: "bz", text: "Belize" },
    { key: "bj", value: "bj", flag: "bj", text: "Benin" },
  ];

  return (
    <Dropdown
      placeholder="Select Country"
      fluid
      search
      selection
      onChange={handleCountryChange}
      options={countryOptions}
    />
  );
}

export default DropdownExampleSearchSelection;
