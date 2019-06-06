import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class AddNewProject extends Component {
  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="projectTitle">Project Title</Label>
            <Input type="text" name="projecttitle" />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input type="textarea" name="description" />
          </FormGroup>

          <FormGroup>
            <Label for="providematerials">Provide Materials</Label>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="yes" /> Yes
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="no" />
                No
              </Label>
            </FormGroup>
          </FormGroup>
          <FormGroup>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">Upload picture of problem</FormText>
          </FormGroup>

          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default AddNewProject;
