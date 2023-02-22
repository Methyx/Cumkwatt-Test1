import { useState, useEffect } from "react";

// components
import InputProduction from "./components/InputProduction";
import InputConsumption from "./components/InputConsumption";

// style
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [production1, setProduction1] = useState("");
  const [production2, setProduction2] = useState("");
  const [rate1, setRate1] = useState("");
  const [rate2, setRate2] = useState("");
  const [rate3, setRate3] = useState("");
  const [rate4, setRate4] = useState("");
  const [rate5, setRate5] = useState("");
  let totalProduction = Number(production1) + Number(production2);

  // useEffect
  useEffect(() => {
    if (
      Number(rate1) +
        Number(rate2) +
        Number(rate3) +
        Number(rate4) +
        Number(rate5) >
      100
    ) {
      alert(
        "La somme des pourcentage fait plus de 100% ! \nModifiez une valeur !!"
      );
    }
  }, [rate1, rate2, rate3, rate4, rate5]);

  return (
    <div className="App container">
      <div className="empty"></div>
      <div className="input-form">
        <section className="inputs-production">
          <h1>Producteurs</h1>
          <InputProduction
            title={"Producteur n°1"}
            production={production1}
            setProduction={setProduction1}
          />
          <InputProduction
            title={"Producteur n°2"}
            production={production2}
            setProduction={setProduction2}
          />
          <p>Total Production = {totalProduction.toString()} kWh</p>
        </section>
        <section className="inputs-consumption">
          <h1>Consommateurs</h1>
          <InputConsumption
            title={"Consommateur n°1"}
            rate={rate1}
            setRate={setRate1}
            totalProduction={totalProduction}
          />
          <InputConsumption
            title={"Consommateur n°2"}
            rate={rate2}
            setRate={setRate2}
            totalProduction={totalProduction}
          />
          <InputConsumption
            title={"Consommateur n°3"}
            rate={rate3}
            setRate={setRate3}
            totalProduction={totalProduction}
          />
          <InputConsumption
            title={"Consommateur n°4"}
            rate={rate4}
            setRate={setRate4}
            totalProduction={totalProduction}
          />
          <InputConsumption
            title={"Consommateur n°5"}
            rate={rate5}
            setRate={setRate5}
            totalProduction={totalProduction}
          />
          <p>
            Pourcentage de production affecté :{" "}
            {Number(rate1) +
              Number(rate2) +
              Number(rate3) +
              Number(rate4) +
              Number(rate5)}{" "}
            %
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
