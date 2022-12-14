// import InputGroup from "react-bootstrap/InputGroup";
// import FormControl from "react-bootstrap/FormControl";

const Search = (props) => {
  return (
    <>
      <form>
        <input
          className="px-2 py-3 bg-black border border-white text-white font-gt-america"
          typeof="text"
          placeholder="find your jam"
          name="Search"
          value={props.name}
          onChange={(e) => props.handleSearch(e)}
        ></input>
      </form>
      {/* <InputGroup className="mb-3">
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          className="search-form search-input"
          value={props.name}
          onChange={(e) => props.handleSearch(e)}
          name="Search"
          placeholder="Find your Jam"
          type="text"
          autoFocus
        />
      </InputGroup> */}
    </>
  );
};

export default Search;
