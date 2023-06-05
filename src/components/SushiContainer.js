import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

//define sushi state
// GET sushi
// update sushi state

function SushiContainer({ sushis, increaseSushi, eatSushi }) {
  return (
    <div className="belt">
      {sushis.map((sushi) => (
        <Sushi
          key={sushi.id}
          sushi={sushi}
          name={sushi.name}
          img_url={sushi.img_url}
          price={sushi.price}
          id={sushi.id}
          eatSushi={eatSushi}
        />
      ))}
      <MoreButton handleClick={increaseSushi} />
    </div>
  );
}

export default SushiContainer;
