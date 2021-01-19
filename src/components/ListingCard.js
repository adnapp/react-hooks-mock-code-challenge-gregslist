import React, {useState} from "react";

function ListingCard({listing, onDelete}) {

  const [favorite, setFavorite] = useState(false)

  const {description, image, location} = listing
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={() => setFavorite(!favorite)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={() =>setFavorite(!favorite)}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={()=> onDelete(listing)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
