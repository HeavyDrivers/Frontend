import React from 'react'
import { mappls, mappls_plugin } from  'mappls-web-maps'

const RouteTracker = () => {
    const styleMap  = {width:  '1300px', height:  '700px', display:'inline-block'}

    const generatemapview = async () => {
  
      const  mapProps  = { center: [12.910016, 77.546868], traffic:  false, zoom: 15, geolocation:  false, clickableIcons:  false }
      var mapObject, polylineObject ;
      
      var mapplsClassObject=  new  mappls();
      var mapplsPluginObject =  new  mappls_plugin();
      
  
        mapplsClassObject.initialize("96233e993b889a2ca1bf4520451c693c",()=>{
            mapObject = mapplsClassObject.Map({id:  "map2", properties: mapProps});
            const generateRoute=() =>{
            polylineObject = mapplsClassObject.Polyline(
                {
                map: mapObject,
                path:[
                    {
                    lat:28.55108, 
                    lng:77.26913
                    },
                    {
                    lat:28.55185, 
                    lng:77.2675
                    },
                    {
                    lat:28.5519, 
                    lng:77.2675
                    },
                    {
                    lat:28.55193, 
                    lng:77.2675
                    },
                    {
                    lat:28.55195, 
                    lng:77.26752
                    }],
                }
            );
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
            <div id="map2" style={styleMap}></div>
        </div>        
    </div>
  )
}

export default RouteTracker