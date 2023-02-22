import Form from "react-bootstrap/Form";

const InputConsumption = ({ consumption, setConsumption, title }) => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>{title} (kWh)</Form.Label>
        <Form.Control
          type="number"
          placeholder="entrez la consommation en kWh"
          value={consumption}
          onChange={(event) => {
            setConsumption(event.target.value);
          }}
        ></Form.Control>
      </Form.Group>
    </Form>
  );
};
export default InputConsumption;
