import { useState } from "react";
import { Dropdown } from "semantic-ui-react";
import { profile } from "../constant/profile";
import { countryOptions } from "../constant/countries";

function DropdownExampleSearchSelection() {
  const [country, setCountry] = useState(profile.countryCode || "ca");
  const handleCountryChange = (e, { value }) => {
    const selectedOption = countryOptions.find(
      (option) => option.value === value
    );
    profile.country = selectedOption?.text;
    profile.countryCode = selectedOption?.value;
    setCountry(selectedOption?.value || "");
  };
  return (
    <div className="flex flex-row items-center justify-center">
      <dropdown
        placeholder="Select Country"
        fluid
        search
        selection
        onChange={handleCountryChange}
        options={countryOptions}
        className="w-full text-black"
        value={country}
      />
    </div>
  );
}

export default DropdownExampleSearchSelection;
