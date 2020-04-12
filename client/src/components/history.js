import React from 'react';

export default class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        console.log(this.props.history)
    }
    render() { 
        return ( 
            <div>
                <h3 style={{margin: "20px"}}>Transaction History</h3>
                <div style={{width : "100%", height: "100%", display: "flex", flexDirection : "column"}}>
                    {this.props.history.map(element => {
                        console.log("hi")
                        console.log(element)
                        return (
                            <div style={{width : "90%", height: "50px", background: "#b8dbff", margin: "20px", borderRadius: "10px", boxShadow : "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)", display : "flex", alignItems : "center", fontFamily : "'Montserrat', sans-serif"}}>
                                <div style={{margin: "10px"}}>Amount : {element.amount}</div>
                                <div>Type : {element.type}</div>
                                <div style={{flex: "1"}}></div>
                                <div style={{margin: "10px"}}>Date : {element.time.toDateString()}</div>
                            </div>
                        )
                    })}
                    
                </div>
            </div> );
    }
}