import Form from "react-bootstrap/Form";

const InputProduction = ({ production, setProduction, title }) => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Production du {title} (kWh)</Form.Label>
        <Form.Control
          type="number"
          placeholder="entrez la production en kWh"
          value={production}
          onChange={(event) => {
            setProduction(event.target.value);
          }}
        ></Form.Control>
      </Form.Group>
    </Form>
  );
};
export default InputProduction;
