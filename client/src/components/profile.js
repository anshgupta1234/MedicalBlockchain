import React from 'react';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button, ButtonToolbar } from 'rsuite';
import { Steps } from 'rsuite';



class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { num : 0, formValue: {} }
    }

    next1(){
        setTimeout(() => { 
            this.setState((prevState) => {
                return {num : prevState.num + 1}
            })
        }, 1000);

        setTimeout(() => { 
            this.setState((prevState) => {
                return {num : prevState.num + 1}
            })
        }, 5000);
        console.log(this.state.formValue)
    }

    render() { 
        return ( 
            <div style={{display: "flex", width: "100%", height:"100%", flex : "1"}}>
                <div style={{width: "40%", background: "#3498ff", padding: "20px", height: "100%", borderRadius : "10px 0px 0px 10px"}} >
                    <Form fluid onChange={formValue => this.setState({ formValue })}>
                        <FormGroup>
                            <ControlLabel style={{color : "white"}}>Hospital Name</ControlLabel>
                            <FormControl name="name" />
                        </FormGroup>
                        <FormGroup style={{width : "100%", display: "flex"}}>
                            <div style={{width : "45%"}}>
                                <ControlLabel style={{color : "white", width : "50%"}}>Latitude</ControlLabel>
                                <FormControl name="email" type="email" />
                            </div>
                            <div style={{flex : "1"}}></div>
                            <div style={{width : "45%"}}>
                                <ControlLabel style={{color : "white", width : "50%"}}>Longitude</ControlLabel>
                                <FormControl name="email" type="email" />
                            </div>
                        </FormGroup>
                        <FormGroup style={{width : "100%", display: "flex"}}>
                            <div style={{width : "30%"}}>
                                <ControlLabel style={{color : "white", width : "50%"}}>Masks</ControlLabel>
                                <FormControl name="email" type="email" />
                            </div>
                            <div style={{flex : "1"}}></div>
                            <div style={{width : "30%"}}>
                                <ControlLabel style={{color : "white", width : "50%"}}>Ventilators</ControlLabel>
                                <FormControl name="email" type="email" />
                            </div>
                            <div style={{flex : "1"}}></div>
                            <div style={{width : "30%"}}>
                                <ControlLabel style={{color : "white", width : "50%"}}>Gloves</ControlLabel>
                                <FormControl name="email" type="email" />
                            </div>
                        </FormGroup>

                        <FormGroup>
                        <ButtonToolbar>
                            <Button appearance="inverse" onClick={() => this.next1()}>Submit</Button>
                            <Button appearance="primary">Cancel</Button>
                        </ButtonToolbar>
                        </FormGroup>
                    </Form>
                </div> 
                <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems : "center"}}>                
                    <h3>Hospital Registration Status</h3>
                    <div style={{height: "40%"}}></div>
                    <Steps current={this.state.num} style={{width: "80%"}}>
                        <Steps.Item title="Submitted" />
                        <Steps.Item title="In progress" />
                        <Steps.Item title="Accepted" />
                    </Steps>
                </div>

                
            </div>
        );
    }
}
 
export default Profile;