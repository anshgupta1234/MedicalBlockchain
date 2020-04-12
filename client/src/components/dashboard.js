import React from 'react';
import poly from './Component1.svg'
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
                    <h1 style={{textAlign: "left", margin: "20px", zIndex : "1"}}>Medical Masks: </h1>
                    <h1 style={{textAlign: "left", margin: "20px", zIndex : "1"}}>Ventilators: </h1>
                    <h1 style={{textAlign: "left", margin: "20px", zIndex : "1"}}>Gloves: </h1>
                </div>
                <img src={poly} width="50%" style={{position: "absolute", right: "8.2%", bottom: "10%", zIndex: "0"}}></img>

            </div> 
        );
    }
}
 
export default Dashboard;