import { MdSearch } from "react-icons/md";

const FilteringContent = ({
  setCooperationType,
  setNeedExperience,
  setTitle,
  doOperation,
}) => {
  return (
    <section id="searching" className="mb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="search-box mb-4 md:mx-4 grid-cols-1">
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Type here"
              className="input w-full outline-none"
            />
          </div>
          <div className="search-place mb-4 md:mx-4 grid-cols-1">
            <select
              className="input w-full outline-none"
              onChange={(e) => setCooperationType(e.target.value)}
            >
              <option disabled selected>
                Select cooperation Type
              </option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Remote">Remote</option>
              <option value="Project Oriented">Project Oriented</option>
              <option value="all">All Items</option>
            </select>
          </div>
          <div className="search-time mb-4 md:mx-4 grid-cols-1">
            <select
              className="input w-full outline-none"
              onChange={(e) => setNeedExperience(e.target.value)}
            >
              <option disabled selected>
                Select Need Experience
              </option>
              <option value="ud-3">Under 3 years</option>
              <option value="ov-3">Above 3 years</option>
              <option value="all">All Items</option>
            </select>
          </div>
          <div
            className="search-btn mb-4 md:mx-4 grid-cols-1"
            onClick={doOperation}
          >
            <button className="input w-full flex items-center justify-center bg-appColor_2 text-run">
              <MdSearch className="text-xl" />
              <span>Search Job</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilteringContent;
