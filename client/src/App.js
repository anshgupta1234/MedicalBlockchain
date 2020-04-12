import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import { Sidenav , Nav, Icon, Dropdown} from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import Map from './components/map'
import Dashboard from './components/dashboard'
import Requests from './components/requests'
import Transactions from './components/transactions'
import Profile from './components/profile'
import Donate from './components/donate'
import History from './components/history'
import Logo from './meditrak2.png'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.scss";

class App extends Component {
  constructor(){
    super()
  }

  state = { storageValue: 0, web3: null, accounts: null, contract: null, masks: 0, ventilators: 0, gloves: 0, history: [] };

  updateValues = (data) => {
    console.log(data)
    switch(data.type){
      case 'masks':
        this.setState({ masks: this.state.masks + data.amount })
      case 'ventilators':
        this.setState({ ventilators: this.state.ventilators + data.amount })
      case 'gloves':
        this.setState({ gloves: this.state.gloves + data.amount })
    }
    this.setState({ history: [...this.state.history, { type: data.type, amount: data.amount, time: new Date() }] })
  }

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  // runExample = async () => {
  //   const { accounts, contract } = this.state;

  //   // Stores a given value, 5 by default.
  //   await contract.methods.set(5).send({ from: accounts[0] });

  //   // Get the value from the contract to prove it worked.
  //   const response = await contract.methods.get().call();
    
  //   // Update state with the result.
  //   this.setState({ storageValue: response });
  // };

  render() {
    if (!this.state.web3) {
      return (
        <div className="login-div">
          <div class="animation">
            <span class="first">Please login</span> 
            <span class="oh">
            <span class="second">with Metamask</span>
            </span>
          </div>
        </div>
      )
    }
    return (
      
        <div className="App">
          <Router>
            <div className="sidenav-div">
              <div className="logo-div">
                <img src={Logo} style={{marginLeft: "10px"}}width="320"></img>
                <div style={{color : "white", fontSize: "25px"}}>Meditrak</div>
              </div>
              <Sidenav
                activeKey={this.state.activeKey}
                onSelect={this.handleSelect}
                className="sideNav"
                appearance="inverse"
                >
                <Sidenav.Body>
                  <Nav>
                    <Link to="/dashboard" style={{textDecoration : "none"}}>
                      <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
                        Dashboard
                      </Nav.Item>
                    </Link>
                    <Link to="/profile" style={{textDecoration : "none"}}>
                      <Nav.Item eventKey="1" icon={<Icon icon="user" />}>
                        Profile
                      </Nav.Item>
                    </Link>
                    <Link to="/history" style={{textDecoration : "none"}}>
                      <Nav.Item eventKey="1" icon={<Icon icon="history" />}>
                        History
                      </Nav.Item>
                    </Link>
                    <Link to="/requests" style={{textDecoration : "none"}}>
                      <Nav.Item eventKey="2" icon={<Icon icon="check" />}>
                        Pending Requests
                      </Nav.Item>
                    </Link>
                    <Link to="/donate" style={{textDecoration : "none"}}>
                      <Nav.Item eventKey="2" icon={<Icon icon="heart-o" />}>
                        Supply
                      </Nav.Item>
                    </Link>
                    <Link to="/map" style={{textDecoration : "none"}}>
                      <Nav.Item eventKey="2" icon={<Icon icon="map" />}>
                        Map
                      </Nav.Item>
                    </Link>
                  </Nav>
                </Sidenav.Body>
              </Sidenav>
            </div>
            <div className="content-div">
              <div className="card-div" >
                <Switch>
                  <Route path="/dashboard">
                    <Dashboard data={this.state}></Dashboard>
                  </Route>
                  <Route path="/profile">
                    <Profile></Profile>
                  </Route>
                  <Route path="/history">
                    <History history={this.state.history}></History>
                  </Route>
                  <Route path="/requests">
                    <Requests wallet={this.state.accounts[0]} contract={this.state.contract} web3={this.state.web3} callback={this.updateValues}></Requests>
                  </Route>
                  <Route path="/donate">
                    <Donate></Donate>
                  </Route>
                  <Route path="/map">
                    <Map></Map>
                  </Route>
                </Switch>
              </div>
              
            </div>
          </Router>
        </div>

    );
  }
}

export default App;
