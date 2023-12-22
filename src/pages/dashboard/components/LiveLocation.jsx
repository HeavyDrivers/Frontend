import React from 'react'
import { mappls, mappls_plugin } from  'mappls-web-maps'
import { useState } from 'react';
import axios from 'axios';
import { Button, colors } from '@mui/material';

const LiveLocation = () => {

  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState();

  const styleMap  = {width:  '1300px', height:  '700px', display:'inline-block'}
  let arr = [];
  let num1, num2;
  const generatemapview = async () => {
    try {
      const response = await axios.post("https://tcu-backend-69pu.onrender.com/get_tempfrom_ubi");
      
      const ans = response.data;
      console.log(ans)

     // console.log("Temp Raw Data:", ans);
      const prep = Array.from(ans);
     // console.log(typeof(prep))
      const lat = prep.slice(-10).map(entry => parseFloat(entry.latitude));
     // console.log(typeof(lat));
      setLatitude(lat);

      const lon = prep.slice(-10).map(entry => parseFloat(entry.longitude));
      console.log("long data:", lon);
      setLongitude(lon);
      arr = [lat[5],lon[5]];
      //console.log(typeof(arr))
      num1 = parseFloat(lat[0]);
      num2 = parseFloat(lon[0]);
    } catch (error) {
      console.error("Error fetching or processing speed data:", error);
    }
      //console.log(latitude);
      let mapObject;
      
      let mapplsClassObject=  new  mappls();
      const  mapProps  = {center: arr, traffic:  false, zoom: 15, geolocation:  false, clickableIcons:  false }
  
        mapplsClassObject.initialize("96233e993b889a2ca1bf4520451c693c",()=>{
          mapObject = mapplsClassObject.Map({id:  "map1", properties: mapProps});
   
          mapObject.on("load", ()=>{
            markerObject = mapplsClassObject.Marker({
              map:  mapObject,
              position:{lat:num1 , lng:num2},
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
            <Button onClick={() =>generatemapview()}>Get Current Location</Button>
            <div id="map1" style={styleMap}></div>
        </div>        
    </div>
  )
}

export default LiveLocation