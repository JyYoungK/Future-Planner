import { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import { Country, State, City } from "country-state-city";

function Regions() {
  const [country, setCountry] = useState("ca");
  const countries = Country.getAllCountries();

  const [state, setState] = useState("");
  const states = State.getAllStates();
  const countryOptions = countries
    .filter(
      (country) =>
        ![
          "aq",
          "gg",
          "je",
          "im",
          "bq",
          "bl",
          "mf",
          "ss",
          "xk",
          "cw",
          "sx",
        ].includes(country.isoCode.toLowerCase())
    )
    .map((country) => ({
      key: country.isoCode.toLowerCase(),
      value: country.isoCode.toLowerCase(),
      flag: country.isoCode.toLowerCase(),
      text:
        country.name.length > 12 ? country.name.split(" ")[0] : country.name,
    }));

  const [stateOptions, setStateOptions] = useState([]);

  const handleCountryChange = (e, { value }) => {
    const selectedOption = countryOptions.find(
      (option) => option.value === value
    );
    setCountry(selectedOption?.value || "");

    const filteredStateOptions = states
      .filter(
        (state) => state.countryCode.toLowerCase() === selectedOption.value
      )
      .map((state) => ({
        key: state.isoCode.toLowerCase(),
        value: state.isoCode.toLowerCase(),
        text: state.name,
      }));
    setState("");
    setStateOptions(filteredStateOptions);
  };

  const handleStateChange = (e, { value }) => {
    const selectedOption = stateOptions.find(
      (option) => option.value === value
    );

    setState(selectedOption?.value || "");
  };

  return (
    <div className="flex flex-row items-center justify-center text-xl">
      <div className="mr-4"> Country </div>
      <div className="w-[210px]">
        <Dropdown
          placeholder="Select Country"
          fluid
          search
          selection
          onChange={handleCountryChange}
          options={countryOptions}
          className=" text-black"
          value={country}
        />
      </div>
      <div className="mx-4"> State </div>
      <div className="w-[310px]">
        <Dropdown
          placeholder="Select State"
          fluid
          search
          selection
          onChange={handleStateChange}
          options={stateOptions}
          className="w-full text-black"
          value={state}
        />
      </div>
    </div>
  );
}

export default Regions;
