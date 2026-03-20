const SearchBox = ({ onSearch }) => {
  return <input type="text" placeholder="Search articles..." onChange={(e) => onSearch(e.target.value)} style={{ padding: "0.5rem", width: "100%", marginBottom: "1rem" }} />;
};

export default SearchBox;
