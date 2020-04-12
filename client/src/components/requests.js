import React from 'react';
import { Button } from 'rsuite';

export default class Requests extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            pending: []
        }
    }

    checkPending = {
        
    }

    render() { 
        return ( 
            <div style = {{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '50px' }}>
                <h4>Have any donors given you medical supplies?</h4>
                <Button style={{ margin: '10px' }} appearance="primary" size="lg">Check for Pending Requests</Button>
                <div style={{ height: '600%', overflowY: 'scroll' }}>

                </div>
            </div>
         );
    }
}
 
