import React, {useState} from "react";

function Search({handleSearch, handleSorted}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    handleSearch(search)
  }

  const [search, setSearch] = useState("")
  const [sorted, setSorted] = useState(false)

  function handleSort(){
    setSorted(!sorted)
    handleSorted(!sorted)
  }


  return (
    <>
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
    <input
      type="checkbox"
      name="abc-order"
      checked={sorted}
      onChange={handleSort}
    /> 
      <label for="abc-order"> ABC by location</label>
    </>
  );
}

export default Search;
