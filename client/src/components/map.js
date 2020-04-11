import React, { Component } from 'react'
import Hos from '../data/hospitals.json'
import { Button } from 'rsuite';


const google = window.google
class MapContainer extends Component {
    constructor(){
        super()
        this.state = { "hospitals" : true}
    }
    componentDidMount(){

        var heatmapData = [
            {location: new google.maps.LatLng(40.7099, -74.0048), weight: 50}
        ];



        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 40.7099, lng: -74.0048},
            zoom: 11
        });

        var heatmap = new google.maps.visualization.HeatmapLayer({
            data: heatmapData
        });
        heatmap.setMap(map);

        this.setState({map : map})


    }
    addMarker(){
        if (this.state.hospitals == true){
            console.log(this.state.hospitals)
            var markerList = []

            Hos.features.map((value, index) => {
                markerList.push(new google.maps.Marker({
                    position: {lat: value.attributes.LATITUDE, lng: value.attributes.LONGITUDE},
                    map: this.state.map,
                }))
                markerList[markerList.length - 1].setMap(this.state.map)
            })
            this.setState(() => {
                return {
                    "markerList" : markerList,
                    "hospitals" : false
                }
            });
        }
        else{

            for (var i = 0; i < this.state.markerList.length; i++) {
                this.state.markerList[i].setMap(null);
            }
            this.setState({hospitals : true})

        }
    }
  render() {
    return (
      <div style={{ height: '50vh', width: '50%' }}>
        <div id="map"></div>
        <Button appearance="primary" onClick={() => this.addMarker()} active>Toggle Hospitals</Button>
      </div>
    )
  }
}

export default MapContainer