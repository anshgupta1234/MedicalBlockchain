import React from 'react';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock , Slider} from 'rsuite';
import { Button, ButtonToolbar, RadioGroup, Radio} from 'rsuite';

export default class Donate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    submit(){
        //const id = 
    }

    render() { 
        return ( 
            <div style={{display: "flex", justifyContent : "center", alignItems : "center", height: "100%", width: "100%"}}>
            <Form>
                <FormGroup>
                    <ControlLabel>Hospital Id</ControlLabel>
                    <FormControl name="name" />
                    <HelpBlock>Required</HelpBlock>
                </FormGroup>
                <RadioGroup>
                    <Radio value="Gloves">Gloves</Radio>
                    <Radio value="Ventilators">Ventilators</Radio>
                    <Radio value="Medical Masks">Medical Masks</Radio>
                </RadioGroup>
                <div style={{height : "20px"}}></div>
                <FormGroup>
                    <ControlLabel>Amount</ControlLabel>
                    <FormControl
                    accepter={Slider}
                    min={0}
                    max={100000}
                    name="Amount"
                    label="Level"
                    style={{ width: 300, margin: '10px 0' }}
                    />
                </FormGroup>
                <FormGroup>
                    <ButtonToolbar>
                        <Button appearance="primary" onClick={() => this.submit()}>Submit</Button>
                        <Button appearance="inverse">Cancel</Button>
                    </ButtonToolbar>
                </FormGroup>
            </Form>
            </div> 
        );
    }
}
 
