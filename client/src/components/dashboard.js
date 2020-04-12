import React from 'react';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{display: "flex", width: "100%", height: "100%", justifyContent:"space-evenly", alignItems:"center"}}>
                <div style={{width: "80%", height: "80%", display: "flex", flexDirection: "column", justifyContent:"space-evenly"}}>
                    <h4>Supplies Received:</h4>
                    <h1 style={{textAlign: "left", margin: "20px"}}>Medical Masks: </h1>
                    <h1 style={{textAlign: "left", margin: "20px"}}>Ventilators: </h1>
                    <h1 style={{textAlign: "left", margin: "20px"}}>Gloves: </h1>
                </div>
            </div> 
        );
    }
}
 
export default Dashboard;