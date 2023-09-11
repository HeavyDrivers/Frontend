import React from 'react'
import { mappls, mappls_plugin } from  'mappls-web-maps'

const LiveLocation = () => {
    const styleMap  = {width:  '1300px', height:  '700px', display:'inline-block'}

    const generatemapview = async () => {
  
      const  mapProps  = { center: [12.910016, 77.546868], traffic:  false, zoom: 15, geolocation:  false, clickableIcons:  false }
      var mapObject, markerObject;
      
      var mapplsClassObject=  new  mappls();
      var mapplsPluginObject =  new  mappls_plugin();
      
  
        mapplsClassObject.initialize("96233e993b889a2ca1bf4520451c693c",()=>{
            mapObject = mapplsClassObject.Map({id:  "map1", properties: mapProps});
        const getmarker = () =>{
          markerObject = mapplsClassObject.marker({
            map:  mapObject,
            position:{lat:28.5512908, lng:77.26809282},
          });
  
        }  
        mapObject.on("load", ()=>{
          
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