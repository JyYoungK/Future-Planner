import Countries from "../components/countries";
import dropdownStyle from "../components/countrySelect.css";

function countrySelect({ handleButtonClick, setCountry }) {
  return (
    <div className="rounded-lg bg-white p-10 shadow-md">
      <h1 className="mb-5 text-2xl font-bold">Select your residing country</h1>
      <div className="mb-5 flex items-center justify-center">
        <Countries className={dropdownStyle} setCountry={setCountry} />
      </div>
      <button
        className="mx-2 rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600"
        onClick={() => handleButtonClick(3)}
      >
        Continue
      </button>
      <button
        className="mx-2 rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600"
        onClick={() => handleButtonClick(1)}
      >
        Back
      </button>
    </div>
  );
}

export default countrySelect;
