import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [allListings, setAllListings] = useState([])
  const [search, setSearch] = useState("")
  const [sorted, setSorted] = useState(false)


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

  function handleSorted(sortBoolean){
    setSorted(sortBoolean)
    if (sortBoolean) {
      setAllListings( allListings.sort((A,B)=> A.description.localeCompare(B.description))
      )
    }
  }

  


  const searchedObjects = allListings.filter(listing => {
    return listing.description.toLowerCase().includes(search.toLowerCase())
  } )
  
  


  return (
    <div className="app">
      <Header handleSearch={handleSearch} handleSorted={handleSorted}/>
      <ListingsContainer allListings={searchedObjects} onDelete={onDelete}/>
    </div>
  );
}

export default App;
