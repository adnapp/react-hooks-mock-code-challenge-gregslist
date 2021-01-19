import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [allListings, setAllListings] = useState([])
  const [search, setSearch] = useState("")


  useEffect(() => {
    fetch(`http://localhost:6001/listings`)
    .then(response => response.json())
    .then(data => setAllListings(data))
  },[])

  function onDelete(delObj){
    console.log(delObj)

    fetch(`http://localhost:6001/listings/${delObj.id}`, {
      method: 'DELETE'    })
    .then(response => response.json())
    .then((data) => {
      const postDelete = allListings.filter(listing => {
        return listing.id !== delObj.id
      })
      setAllListings(postDelete)
    })}

    function handleSearch(incomingSearch){
      setSearch(incomingSearch)
    }


  const searchedObjects = allListings.filter(listing => {
    return listing.description.toLowerCase().includes(search.toLowerCase())
  } )


  return (
    <div className="app">
      <Header handleSearch={handleSearch}/>
      <ListingsContainer allListings={searchedObjects} onDelete={onDelete}/>
    </div>
  );
}

export default App;
