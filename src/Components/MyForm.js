import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class MyForm extends React.Component {

  selectHorns = (event) => {
    this.props.hornFilter(event.target.value);
  }

  onClick = (event) => {
    event.preventDefault();
      this.props.filteredBeasts();
  }

  render() {
    return(
      <Form>
        <Form.Group>
          <Form.Label>Search By Number Of Horns</Form.Label>
          <Form.Control name="numHorns" as="select" onChange={this.selectHorns}>
            <option value="1">One Horne</option>
            <option value="2">Two Hornes</option>
            <option value="3">Three Hornes</option>
            <option value="100">WOW! above 100 </option>
          </Form.Control>
          <Button variant="success" onClick={this.onClick}>Search!</Button>
        </Form.Group>
      </Form>
    );
  }
}
export default MyForm;