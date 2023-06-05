import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";
const displayedSushi = 4;
const startMoney = 100;

function App() {
  const [sushis, setSushi] = useState([]);
  const [startSushis, setStartSushis] = useState(0);
  const [money, setMoney] = useState(startMoney);

  useEffect(() => {
    fetch(API)
      .then((resp) => resp.json())
      .then((data) => setSushi(data));
  }, []);

  function increaseSushi() {
    setStartSushis((startSushis + displayedSushi) % sushis.length);
  }

  function eatSushi(sush) {
    if (sush.price <= money) {
      setSushi(
        sushis.map((sushi) =>
          sush.id === sushi.id ? { ...sushi, eaten: true } : sushi
        )
      );
      setMoney(money - sush.price);
    }
  }

  return (
    <div className="app">
      <SushiContainer
        sushis={sushis.slice(startSushis, startSushis + displayedSushi)}
        increaseSushi={increaseSushi}
        eatSushi={eatSushi}
      />
      <Table money={money} />
    </div>
  );
}

export default App;
