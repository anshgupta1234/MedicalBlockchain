import React from 'react';
import { Button } from 'rsuite';

export default class Requests extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            pending: []
        }
    }

    checkPending = async() => {
        const response = await fetch("http://localhost:8000/request", {
            "method": "POST",
            headers: {
                'content-type': 'application/json'
            },
            "body": JSON.stringify({
                "hospitalId": "252sdfgsdgv"
            })
        }).then(res => res.json()).then(res => console.log(res))
    }

    render() { 
        return ( 
            <div style = {{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '50px' }}>
                <h4>Have any donors given you medical supplies?</h4>
                <Button style={{ margin: '10px' }} appearance="primary" size="lg" onClick={() => this.checkPending()}>Check for Pending Donation Requests</Button>
                <div style={{ height: '600%', overflowY: 'scroll' }}>

                </div>
            </div>
         );
    }
}
 
