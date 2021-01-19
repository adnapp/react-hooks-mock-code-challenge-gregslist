import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({allListings, onDelete}) {



  const listingObj = allListings.map(listing => {
    return <ListingCard
      key={listing.id}
      listing = {listing}
      onDelete={onDelete}
    />

  })


  return (
    <main>
      <ul className="cards">
        {listingObj}
      </ul>
    </main>
  );
}

export default ListingsContainer;
