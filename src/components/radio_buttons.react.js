import React from 'react';
import { Button, Form, FormGroup, Label, Input, ButtonGroup} from 'reactstrap';
import '../styles/radio.css';


export default class RadioButtons extends React.Component {
  render(props) {
    return (
      <Form inline id="radio_buttons" className="radio-label-vertical-wrapper">
      <FormGroup check>
           <Label check>
             <Input onChange={this.props.handleOptionChange} id="Vanilla" type="radio" name="radio1" value="vanilla" checked={this.props.selectedOption === "vanilla"} />{' '}
              <span id="Vanilla">Vanilla🍦</span>
           </Label>
         </FormGroup>

      <FormGroup check>
           <Label check>
             <Input onChange={this.props.handleOptionChange} id="Spicy" type="radio" name="radio1" value="spicy" checked={this.props.selectedOption === "spicy"} />{' '}
            <span id="Spicy">Spicy🌶️&nbsp;&nbsp;</span>
           </Label>
         </FormGroup>

         <FormGroup check>
              <Label check>
                <Input onChange={this.props.handleOptionChange} id="Party" type="radio" name="radio1" value="party" checked={this.props.selectedOption === "party"} />{' '}
               <span id="Party">Party🎉&nbsp;&nbsp;&nbsp;</span>
              </Label>
            </FormGroup>

      </Form>
    );
  }
}
