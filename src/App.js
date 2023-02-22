import { useState } from "react";

// components
import InputProduction from "./components/InputProduction";
import InputConsumption from "./components/InputConsumption";
import { Button } from "react-bootstrap";

// style
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [production1, setProduction1] = useState(0);
  const [production2, setProduction2] = useState(0);
  const [consumption1, setConsumption1] = useState(0);
  const [consumption2, setConsumption2] = useState(0);
  const [consumption3, setConsumption3] = useState(0);
  const [consumption4, setConsumption4] = useState(0);
  const [consumption5, setConsumption5] = useState(0);
  return (
    <div className="App container">
      <form className="input-form">
        <div className="inputs-data">
          <section className="inputs-production">
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
          </section>
          <section className="inputs-consumption">
            <InputConsumption
              title={"Consommateur n°1"}
              consumption={consumption1}
              setConsumption={setConsumption1}
            />
            <InputConsumption
              title={"Consommateur n°2"}
              consumption={consumption2}
              setConsumption={setConsumption2}
            />
            <InputConsumption
              title={"Consommateur n°3"}
              consumption={consumption3}
              setConsumption={setConsumption3}
            />
            <InputConsumption
              title={"Consommateur n°4"}
              consumption={consumption4}
              setConsumption={setConsumption4}
            />
            <InputConsumption
              title={"Consommateur n°5"}
              consumption={consumption5}
              setConsumption={setConsumption5}
            />
          </section>
        </div>
        <Button variant="primary" type="submit">
          Calculer la répartition
        </Button>
      </form>
    </div>
  );
}

export default App;
