import React from "react";
import { Dropdown } from "semantic-ui-react";
import { profile } from "../constant/profile";
import { countryOptions } from "../constant/countries";

function DropdownExampleSearchSelection() {
  const handleCountryChange = (e, { value }) => {
    const selectedOption = countryOptions.find(
      (option) => option.value === value
    );

    profile.country = selectedOption?.text;
  };

  return (
    <div className="flex flex-row items-center justify-center ">
      <Dropdown
        placeholder="Select Country"
        fluid
        search
        selection
        onChange={handleCountryChange}
        options={countryOptions}
        className="text-black"
      />
    </div>
  );
}

export default DropdownExampleSearchSelection;
