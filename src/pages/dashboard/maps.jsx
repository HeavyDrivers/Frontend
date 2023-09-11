import React, { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { mappls, mappls_plugin } from  'mappls-web-maps'
import axios from "axios";

const Maps = () => {
  const styleMap  = {width:  '1300px', height:  '700px', display:'inline-block'}

  const generatemapview = async () => {

    const  mapProps  = { center: [12.910016, 77.546868], traffic:  false, zoom: 15, geolocation:  false, clickableIcons:  false }
    var mapObject, markerObject, polylineObject ;
    
    var mapplsClassObject=  new  mappls();
    var mapplsPluginObject =  new  mappls_plugin();
    

	  mapplsClassObject.initialize("96233e993b889a2ca1bf4520451c693c",()=>{
		  mapObject = mapplsClassObject.Map({id:  "map", properties: mapProps});
      const getmarker = () =>{
        markerObject = mapplsClassObject.marker({
          map:  mapObject,
          position:{lat:28.5512908, lng:77.26809282},
        });

      }
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
    <>
      <div className="mx-auto my-10 flex  flex-col gap-8">
        <Card>
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="m-0 p-4"
          >
            <Typography variant="h5" color="blue-gray">
              Fleet Management
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4 p-4">
            <Tabs value="html">
              <TabsHeader>
                <Tab value={"location"}>Location Tracking</Tab>
                <Tab value={"realtime"}>Route Tracking</Tab>
                <Tab value={"speed"}>Speed Tracking</Tab>
                <Tab value={"Idling"}>Idling Time</Tab>
                <Tab value={"load"}>Load Tracking</Tab>
              </TabsHeader>
              <TabsBody className="overflow-hidden">
                <TabPanel value={"location"} className="overflow-hidden flex flex-col">
                  <button> Get Map </button>
                  <div></div>
                

                </TabPanel>
                <TabPanel value={"realtime"} className="overflow-hidden flex flex-col">
                  <button onClick={() =>generatemapview()}>Get Route</button>
                  <div id="map" style={styleMap}></div>
                </TabPanel>
              </TabsBody>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </>
  );
}


export default Maps
