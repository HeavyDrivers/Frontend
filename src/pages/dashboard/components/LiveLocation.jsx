import React from 'react'
import { mappls, mappls_plugin } from  'mappls-web-maps'
import { useState } from 'react';
import axios from 'axios';

const LiveLocation = () => {
  const [locationdata, setLocationdata] = useState([]);
  const [latitude, setLatitude] = useState(12.9102775);
  const [longitude, setLongitude] = useState( 77.56497283333333)
  const styleMap  = {width:  '1300px', height:  '700px', display:'inline-block'}
  
  const generatemapview = async () => {
    await axios
      .get("https://backend-for-sih.onrender.com/get_locations")
      .then((res) => {
      console.log(res.data);
      setLocationdata(res.data);

      let currentLocation = locationdata[locationdata.length - 1]
      setLatitude(currentLocation.latitude)
      setLongitude(currentLocation.longitude)
      
    });

      let mapObject;
      
      let mapplsClassObject=  new  mappls();
      const  mapProps  = {center: [latitude, longitude], traffic:  false, zoom: 15, geolocation:  false, clickableIcons:  false }
  
        mapplsClassObject.initialize("96233e993b889a2ca1bf4520451c693c",()=>{
          mapObject = mapplsClassObject.Map({id:  "map1", properties: mapProps});
   
          mapObject.on("load", ()=>{
            markerObject = mapplsClassObject.Marker({
              map:  mapObject,
              position:{lat:latitude, lng:longitude},
            });            
          })  
        });
    }
   // useEffect(() => { 
     // generatemapview(); //used inside useEffect 
     //  }, [generatemapview]); 
  return (
    <div>
         <div className="overflow-hidden flex flex-col">
            <button onClick={() =>generatemapview()}>Get Route</button>
            <div id="map1" style={styleMap}></div>
        </div>        
    </div>
  )
}

export default LiveLocation