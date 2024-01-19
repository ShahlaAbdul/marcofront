import React, { useEffect, useState } from "react";
import "./style.scss";

function FoodCards() {
  const [fetchData, setFetchData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3100/")
      .then((res) => res.json())
      .then((data) => setFetchData(data));
  }, []);

  return (
    <section id="foodcard">
      <div className="foodcards">
        <div className="foodcards_head">
          <h1>What kind of Foods we serve for you</h1>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="search">
          <input type="text" name="" id="" placeholder="search"/>
        </div>
        <ul className="cards_filter">
          <li className="all">All</li>
          <li>Breakfast </li>
          <li>Lunch</li>
          <li>Dinner</li>
          <li>Budget</li>
          <li>Meal</li>
          <li className="buffet">Buffet</li>
        </ul>
        <div className="foodcards_cards">
          {fetchData.map((x) => (
            <div className="foodcards_card" key={x._id}>
              <ul>
                <li className="card_head">
                  <h1>{x.name}</h1>
                  <span>${x.price}</span>
                </li>
                <li>{x.description}</li>
                <li className="card_icons">
                  <i className="fa-solid fa-eye"></i>
                  <i class="fa-solid fa-cart-shopping"></i>
                  <i className="fa-solid fa-heart"></i>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FoodCards;
