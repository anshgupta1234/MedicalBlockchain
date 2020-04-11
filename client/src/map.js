import React, { Component } from 'react'
//import Hos from './data/hospitals.json'


const google = window.google
class MapContainer extends Component {
    constructor(){
        super()
        this.state = { "hospitals" : true}
    }
    componentDidMount(){

        var heatmapData = [
            new google.maps.LatLng(37.782, -122.447),
            new google.maps.LatLng(37.782, -122.445),
            new google.maps.LatLng(37.782, -122.443),
            new google.maps.LatLng(37.782, -122.441),
            new google.maps.LatLng(37.782, -122.439),
            new google.maps.LatLng(37.782, -122.437),
            new google.maps.LatLng(37.782, -122.435),
            new google.maps.LatLng(37.785, -122.447),
            new google.maps.LatLng(37.785, -122.445),
            new google.maps.LatLng(37.785, -122.443),
            new google.maps.LatLng(37.785, -122.441),
            new google.maps.LatLng(37.785, -122.439),
            new google.maps.LatLng(37.785, -122.437),
            new google.maps.LatLng(37.785, -122.435)
        ];



        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 37.0902, lng: -95.7129},
            zoom: 4
        });

        var heatmap = new google.maps.visualization.HeatmapLayer({
            data: heatmapData
        });
        heatmap.setMap(map);

        this.setState({map : map})


    }
    // addMarker(){
    //     if (this.state.hospitals == true){
    //         console.log(this.state.hospitals)
    //         var markerList = []

    //         Hos.features.map((value, index) => {
    //             markerList.push(new google.maps.Marker({
    //                 position: {lat: value.attributes.LATITUDE, lng: value.attributes.LONGITUDE},
    //                 map: this.state.map,
    //             }))
    //             markerList[markerList.length - 1].setMap(this.state.map)
    //         })
    //         this.setState(() => {
    //             return {
    //                 "markerList" : markerList,
    //                 "hospitals" : false
    //             }
    //         });
    //     }
    //     else{

    //         for (var i = 0; i < this.state.markerList.length; i++) {
    //             this.state.markerList[i].setMap(null);
    //         }
    //         this.setState({hospitals : true})

    //     }
    // }
  render() {
    return (
      <div style={{ height: '50vh', width: '50%' }}>
        <div id="map"></div>
        <button onClick={() => null}>BUTTOn</button>
      </div>
    )
  }
}

export default MapContainer