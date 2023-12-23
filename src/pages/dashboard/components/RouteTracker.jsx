import React from 'react'
import { mappls, mappls_plugin } from  'mappls-web-maps'
import { useState } from 'react';
import axios from 'axios';
import { Typography, Button} from '@material-tailwind/react';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const RouteTracker = () => {
  const [starttime, setStarttime] = useState("");
  const [endtime, setEndtime] = useState("");
  const [locationdata, setLocationdata] = useState("");
  const [mapdata, setMapdata] = useState("");
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState();
  const styleMap = {
    width: "99%",
    height: "30rem",
    display: "inline-block",
  };
  let arr = [];
  let num1, num2;
  /*const mapProps = {
    center: locationdata
      ? locationdata[0]
        ? [locationdata[0].latitude, locationdata[0].longitude]
        : [12.9102775, 77.56497283333333]
      : [12.9102775, 77.56497283333333],
    traffic: false,
    zoom: 15,
    clickableIcons: false,
    geolocation: true,
  };*/

  const generatemapview = async () => {
    /*console.log(endtime, starttime);
    await axios
      .post("https://backend-for-sih.onrender.com/get_locations_between", {
        startTime: starttime,
        endTime: endtime,
      })
      .then((res) => {
        // console.log(res.data);
        setLocationdata(res.data);
      });

    let dataobject = [];
    locationdata.forEach((element) => {
      dataobject.push({ lat: element.latitude, lng: element.longitude });
    });
    setMapdata(dataobject);*/
    // console.log("dataobject", dataobject);
    try {
      const response = await axios.post("https://tcu-backend-69pu.onrender.com/get_tempfrom_ubi");
      
      const ans = response.data;
      console.log(ans)

     // console.log("Temp Raw Data:", ans);
      const prep = Array.from(ans);
     // console.log(typeof(prep))
      const lat = prep.slice(-10).map(entry => parseFloat(entry.latitude));
      console.log(typeof(lat));
      setLatitude(lat);

      const lng = prep.slice(-10).map(entry => parseFloat(entry.longitude));
      console.log("long data:", lng);
      setLongitude(lng);
      arr = [lat[5],lng[5]];
      //console.log(typeof(arr))
      num1 = parseFloat(lat[0]);
      num2 = parseFloat(lng[0]);
      const dataobject = lat.map((name, index) => ({
        x: lat[index],
        y: lng[index],
     
      }));
      const arrayOfObj = Object.entries(dataobject).map((e) => ( { [e[0]]: e[1] } ));
      
      console.log(arrayOfObj)
      console.log(typeof(arrayOfObj))
    
    let mapObject;
    let mapplsClassObject = new mappls();
    const  mapProps  = {center: arr, traffic:  false, zoom: 15, geolocation:  false, clickableIcons:  false }
    mapplsClassObject.initialize("96233e993b889a2ca1bf4520451c693c", () => {
      mapObject = mapplsClassObject.Map({
        id: "map2",
        properties: mapProps,
      });
      //load map layers/components after map load, inside this callback (Recommended)
      mapObject.on("load", () => {
        // Activites after mapload
        polylineObject = mapplsClassObject.Polyline({
          map: mapObject,
          strokeColor: "#333", // polyline color
          strokeWeight: 2, // stroke/ width of polyline
          path: [
                {
                  lat: 12.28,
                  lng: 76.641,
                },
                {
                  lat: 12.28,
                  lng: 77.642,
                },
                {
                  lat: 12.28,
                  lng: 77.643,
                },
                {
                  lat: 12.28,
                  lng: 77.644,
                },
                {
                  lat: 12.28,
                  lng: 77.645,
                },
              ],
        });
      });
    
    })} catch (error) {
      console.error("Error fetching or processing speed data:", error);
    }
  };

  const setstarttime = (e) => {
    console.log(e);
    const date = String(e.$d);
    console.log(date);
    const monthdict = {
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      May: "05",
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12",
    };
    let newdata =
      e.$y +
      "-" +
      monthdict[date.substring(4, 7)] +
      "-" +
      e.$D +
      "T" +
      date.substring(16, 24) +
      "+05:30";
    setStarttime(newdata);
  };

  const setendtime = (e) => {
    console.log(e);
    const date = String(e.$d);
    console.log(date);
    const monthdict = {
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      May: "05",
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12",
    };
    let newdata =
      e.$y +
      "-" +
      monthdict[date.substring(4, 7)] +
      "-" +
      e.$D +
      "T" +
      date.substring(16, 24) +
      "+05:30";
    setEndtime(newdata);
  };



    
  return (
    <div>
      <div className=" container flex flex-col justify-evenly">
        <div className="flex flex-row">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className=" mx-4 flex flex-row items-center justify-center">
              <div className="mx-4 font-bold">Starting Time</div>
                <DateTimePicker onChange={setstarttime} />
              </div>
              <div className="mx-4 flex flex-row items-center justify-center">
                <div className="mx-4 font-bold">End Time</div>
                  <DateTimePicker onChange={setendtime} />
              </div>
              <div className="mx-4 flex items-center">
                <Button
                variant="gradient" color="blue-gray" className="ml-8 p-2" fullWidth onClick={() =>generatemapview()}>
                  <Typography
                    color="inherit"
                    className="font-medium capitalize"
                  >
                    Generate Route Map
                  </Typography>
                </Button>
            </div>
          </LocalizationProvider>
        </div>
        <div className="py-4">
          <div
            id="map2"
            style={styleMap}
            className="rounded py-4"
          ></div>
        </div>
      </div>
    </div>    

  )
}

export default RouteTracker