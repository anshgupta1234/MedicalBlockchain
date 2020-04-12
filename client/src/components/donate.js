import React from 'react';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock , Slider} from 'rsuite';
import { Button, ButtonToolbar, RadioGroup, Radio} from 'rsuite';

export default class Donate extends React.Component {
    constructor(props) {
        super(props);
        this.state = { formValue: {} }
    }

    submit = () => {
        const { id, amount } = this.state.formValue
        fetch("http://localhost:8000/new", {
            "method": "POST",
            headers: {
                'content-type': 'application/json'
            },
            "body": JSON.stringify({
                "hospitalId": id,
                amount,
                type: this.state.type.toLowerCase()
            })
        }).then(res => res.json()).then(res => {
            console.log(res)
            
        })
    }

    render() { 
        return ( 
            <div style={{display: "flex", justifyContent : "center", alignItems : "center", height: "100%", width: "100%"}}>
            <Form onChange={formValue => this.setState({ formValue })}>
                <FormGroup>
                    <ControlLabel>Hospital Id</ControlLabel>
                    <FormControl name="id" />
                    <HelpBlock>Required</HelpBlock>
                </FormGroup>
                <RadioGroup name='type' onChange={value => this.setState({ type: value })}>
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
                    max={1000}
                    name="amount"
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
 
