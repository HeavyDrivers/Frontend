import React, { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Card,
  CardHeader,
  CardBody,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import LiveLocation from "./components/LiveLocation";
import RouteTracker from "./components/RouteTracker";
import SpeedIdle from "./components/SpeedIdle";


const Maps = () => {
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
                
              </TabsHeader>
              <TabsBody className="overflow-hidden">
                <TabPanel value={"location"} className="overflow-hidden flex flex-col">
                  <LiveLocation />               

                

                </TabPanel>
                <TabPanel value={"realtime"} className="overflow-hidden flex flex-col">
                  <RouteTracker/>

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
