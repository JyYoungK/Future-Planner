import React from "react";
import { Dropdown } from "semantic-ui-react";
import { profile } from "../constant/profile";
import dropdownStyle from "../components/countrySelect.css?inline";
import { countryOptions } from "../constant/countries";

function DropdownExampleSearchSelection() {
  const handleCountryChange = (e, { value }) => {
    const selectedOption = countryOptions.find(
      (option) => option.value === value
    );

    profile.country = selectedOption?.text;
  };

  return (
    <Dropdown
      placeholder="Select Country"
      fluid
      search
      selection
      onChange={handleCountryChange}
      options={countryOptions}
      className={dropdownStyle}
    />
  );
}

export default DropdownExampleSearchSelection;
