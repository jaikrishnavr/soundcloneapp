import React from "react";
import style from "./Cards.module.css";
import data from "../../playlist.json";
import "./Form.css";
import Card from "../Card/Card";
import { useState } from "react";

function Cards() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <form className="main1">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="colo"
        />
      </form>
      <div className={[style.cardsWrapper, "custom_scrollBar"].join(" ")}>
        {data
          .filter((data) =>
            data.user.username.toLowerCase().includes(search.toLowerCase())
          )
          .map((cardDetail) => (
            <Card key={cardDetail.id} data={cardDetail} />
          ))}
      </div>
    </div>
  );
}

export default Cards;
