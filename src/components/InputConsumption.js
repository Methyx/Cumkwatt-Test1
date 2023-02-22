import { useState } from "react";

import Form from "react-bootstrap/Form";

// style
import "../style/consumption.css";

const InputConsumption = ({
  // consumption,
  // setConsumption,
  title,
  rate,
  setRate,
  totalProduction,
}) => {
  // init
  const [consumption, setConsumption] = useState("");
  let consumptionENR = Math.min(
    Number(consumption),
    (Number(totalProduction) * Number(rate)) / 100
  );
  let consumptionFossil = consumption - consumptionENR;

  //Return
  return (
    <Form className="consumer">
      <Form.Label className="consumer-title">{title}</Form.Label>
      <Form.Group className="mb-3">
        <Form.Label>Consommation totale</Form.Label>
        <Form.Control
          type="number"
          placeholder="kWh"
          value={consumption}
          onChange={(event) => {
            setConsumption(event.target.value);
          }}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Part de Production ENR</Form.Label>
        <Form.Control
          type="number"
          placeholder="%"
          value={rate}
          onChange={(event) => {
            if (Number(event.target.value) <= 100) {
              setRate(event.target.value);
            }
          }}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Consommation ENR</Form.Label>
        <Form.Control
          type="number"
          value={consumptionENR}
          disabled
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Consommation Réseau</Form.Label>
        <Form.Control
          type="number"
          value={consumptionFossil}
          disabled
        ></Form.Control>
      </Form.Group>
    </Form>
  );
};
export default InputConsumption;
