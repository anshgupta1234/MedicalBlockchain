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

    accept = async(_id) => {
        const response = await fetch("http://localhost:8000/accept", {
            "method": "POST",
            headers: {
                'content-type': 'application/json'
            },
            "body": JSON.stringify({
                transactionId: _id
            })
        }).then(res => res.json()).then(res => {
            console.log(res)
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
                <div style={{ height: '500px', width: '100%', display: 'flex', alignItems: 'flex-start', flexDirection: 'column', borderWidth: 1 }}>
                    {
                        this.state.pending.map((req, i) => (
                            <div style={{ height: '60px', width: '100%', margin: '10px', padding: '15px', background: '#ffe5b4', justifyContent: 'flex-start', borderRadius: 10, display: 'flex', alignItems: 'center' }}>
                                <p style={{ fontSize: '18px' }}>{req.amount} {req.type}</p>
                                <div style={{ marginLeft: 'auto', height: '60px', width: '100px', display: 'flex', alignItems: 'center' }}>
                                    <Button color='green' size='md' appearance='primary' style={{ marginLeft: 'auto' }} onClick={() => this.accept(req._id)}>Yes</Button>
                                    <Button color='red' size='md' appearance='primary' style={{ marginLeft: 'auto' }}>No</Button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
         );
    }
}
 
