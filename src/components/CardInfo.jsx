import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList";

function CardInfo() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://db.ygoprodeck.com/api/v7/cardinfo.php"
      );
      const data = await response.json();
      setCards(data.data.slice(15,50)); 
      console.log(cards)
      console.log(data)
    }
    fetchData();
  }, []);

  return <CharacterList data={cards} />;
}

export default CardInfo;
