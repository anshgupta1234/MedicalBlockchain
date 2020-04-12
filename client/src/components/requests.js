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
        }).then(res => res.json()).then(res => {
            console.log(res)
            this.addPending(res.data)
        })
    }

    addPending = data => {
        this.setState({ pending: [...this.state.pending, ...data]})
    }

    render() { 
        return ( 
            <div style = {{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '50px' }}>
                <h4>Have any donors given you medical supplies?</h4>
                <Button style={{ margin: '10px' }} appearance="primary" size="lg" onClick={() => this.checkPending()}>Check for Pending Donation Requests</Button>
                <div style={{ height: '60%', width: '100%', display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                    {
                        this.state.pending.map((req, i) => (
                            <div style={{ height: '150px', width: '100%', margin: '10px', padding: '10px', backgr: 'green', borderWidth: 1, borderColor: 'black' }}>

                            </div>
                        ))
                    }
                </div>
            </div>
         );
    }
}
 
