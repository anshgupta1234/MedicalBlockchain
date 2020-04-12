import React from 'react';
import { Button } from 'rsuite';
import IPFS from 'ipfs-mini';

export default class Requests extends React.Component {    

    constructor(props) {
        super(props);
        this.state = { 
            pending: []
        }
        this.ipfs = new IPFS({ host:'ipfs.infura.io', port: 5001, protocol: 'https' })
    }

    checkPending = async() => {
        const response = await fetch("http://localhost:8000/request", {
            "method": "POST",
            headers: {
                'content-type': 'application/json'
            },
            "body": JSON.stringify({
                "hospitalId": this.props.wallet
            })
        }).then(res => res.json()).then(res => {
            console.log(res)
            this.addPending(res.data)
        })
    }

    accept = async(req, i) => {
        const response = await fetch("http://localhost:8000/accept", {
            "method": "POST",
            headers: {
                'content-type': 'application/json'
            },
            "body": JSON.stringify({
                transactionId: req._id
            })
        }).then(res => res.json()).then(res => {
            console.log(res)
        })
        // Delete pending from list
        let temp = this.state.pending;
        temp.splice(i);
        this.setState({ pending: temp });
        // IPFS time reeeeeeeeeeeeeeeeee
        this.ipfs.addJSON(req, async(err, result) => {
            console.log(err, result);
            this.props.contract.methods.set(5).send({ from: this.props.wallet })
        });
    }

    addPending = data => {
        this.setState({ pending: [...this.state.pending, ...data]})
    }

    render() { 
        return ( 
            <div style = {{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '50px' }}>
                <h4>Have any suppliers given you medical supplies?</h4>
                <Button style={{ margin: '10px' }} appearance="primary" size="lg" onClick={() => this.checkPending()}>Check for Pending Requests</Button>
                <div style={{ height: '500px', width: '100%', display: 'flex', alignItems: 'flex-start', flexDirection: 'column', borderWidth: 1 }}>
                    {
                        this.state.pending.map((req, i) => (
                            <div style={{ height: '60px', width: '100%', margin: '10px', padding: '15px', background: '#ffe5b4', justifyContent: 'flex-start', borderRadius: 10, display: 'flex', alignItems: 'center' }}>
                                <p style={{ fontSize: '18px' }}>{req.amount} {req.type}</p>
                                <div style={{ marginLeft: 'auto', height: '60px', width: '100px', display: 'flex', alignItems: 'center' }}>
                                    <Button color='green' size='md' appearance='primary' style={{ marginLeft: 'auto' }} onClick={() => this.accept(req, i)}>Yes</Button>
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
 
