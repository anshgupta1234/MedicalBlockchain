import React, { Component } from 'react'
import Hos from '../data/hospitals.json'
import { Button } from 'rsuite';
import Icon from '../marker.png'

const google = window.google
class MapContainer extends Component {
    constructor(){
        super()
        this.state = { 
            "hospitals" : true,
            "facemasks" : true
        }
    }
    componentDidMount(){

        var heatmapData = []

        Hos.features.map((value, index) => {
          var weight = Math.floor(Math.random() * 10)
          heatmapData.push({location: new google.maps.LatLng( value.attributes.LATITUDE, value.attributes.LONGITUDE), weight: weight * Math.floor(Math.random() * 1000)})
          //heatmapData[heatmapData.length - 1].setMap(map)

        })

        // Hos.features.map((value, index) => {
        //   var weight = Math.floor(Math.random() * 10)
        //   heatmapData.push({location: new google.maps.LatLng( value.attributes.LATITUDE + Math.random(), value.attributes.LONGITUDE + Math.random()), weight: weight * Math.floor(Math.random() * 100)})
        //   //heatmapData[heatmapData.length - 1].setMap(map)

        // })

        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 40.7099, lng: -74.0048},
            zoom: 11
        });


        var heatmap = new google.maps.visualization.HeatmapLayer({
            data: heatmapData,
            radius : 30
        });


        //heatmap.setMap(map);

        this.setState({map : map})


    }

    facemask(){
        if (this.state.facemasks === true){
            var heatmapData = []

            Hos.features.map((value, index) => {
              var weight = Math.floor(Math.random() * 10)
              heatmapData.push({location: new google.maps.LatLng( value.attributes.LATITUDE, value.attributes.LONGITUDE), weight: weight * Math.floor(Math.random() * 500)})
              //heatmapData[heatmapData.length - 1].setMap(map)
    
            })
    
            var heatmapf = new google.maps.visualization.HeatmapLayer({
                data: heatmapData,
                radius : 20
            });
            heatmapf.setMap(this.state.map);
    
            this.setState(() => {
                return {
                    "heatmapf" : heatmapf,
                    "facemasks" : false
                }
            });
        }else{
            console.log("hi")
            
            this.state.heatmapf.setMap(null);
            
            this.setState({facemasks : true})
        }
       
    }



    addMarker(){
        if (this.state.hospitals == true){
            console.log(this.state.hospitals)
            var markerList = []

            var icon = {
              url: Icon, // url
              scaledSize: new google.maps.Size(12, 12), // scaled size
              origin: new google.maps.Point(0,0), // origin
              anchor: new google.maps.Point(0, 0) // anchor
          };

            Hos.features.map((value, index) => {
                markerList.push(new google.maps.Marker({
                    position: {lat: value.attributes.LATITUDE, lng: value.attributes.LONGITUDE},
                    map: this.state.map,
                    icon : icon
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
        else {

            for (var i = 0; i < this.state.markerList.length; i++) {
                this.state.markerList[i].setMap(null);
            }
            this.setState({hospitals : true})

        }
    }
  render() {
    return (
      <div style={{ height: '100%', width: '100%', display: "flex", flexDirection: "column" }}>
        <div id="map" style={{height: "90%"}}></div>
        <div style={{width : "100%", height: "10%", display: "flex", justifyContent : "center", alignItems : "center"}}> 
            <Button appearance="primary" onClick={() => this.addMarker()} active style={{margin: "20px"}}>Hospitals</Button>
            <Button appearance="primary" onClick={() => this.facemask()} active style={{margin: "20px"}}>Facemasks</Button>
            <Button appearance="primary" onClick={() => this.addMarker()} active style={{margin: "20px"}}>Ventilators</Button>
            <Button appearance="primary" onClick={() => this.addMarker()} active style={{margin: "20px"}}>Gloves</Button>
        </div>
      </div>
    )
  }
}

export default MapContainer