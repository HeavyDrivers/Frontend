import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, BarChart } from "@mui/x-charts";
import {
    Typography
  } from "@material-tailwind/react";

const ChartComponent = () => {
    const [tempData, setTempData] = useState([]);
    const [rpmData, setRpmData] = useState([]);
    const [gyroxData, setGyroxData] = useState([]);
    const [gyroyData, setGyroyData] = useState([]);
    const [AccXData, setAccXData] = useState([]);
    const [AccYData, setAccYData] = useState([]);
    const [AccZData, setAccZData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post("https://tcu-backend-69pu.onrender.com/get_tempfrom_ubi");
                const ans = response.data;
                
                
                const prep = Array.from(ans);
                const temp = prep.map(entry => parseInt(entry.temperature));
                const rpm = prep.map(entry => parseInt(entry.rpm));
                const gyrox = prep.map(entry => parseFloat(entry.maxGyroX));
                const gyroy = prep.map(entry => parseFloat(entry.maxGyroY));
                const AccelX =prep.map(entry => parseFloat(entry.maxAccelX));
                const AccelY =prep.map(entry => parseFloat(entry.maxAccelY));
                const AccelZ =prep.map(entry => parseFloat(entry.maxAccelZ ));

                
                setTempData(temp)
                setRpmData(rpm)
                setGyroxData(gyrox)
                setGyroyData(gyroy)
                setAccXData(AccelX)
                setAccYData(AccelY)
                setAccZData(AccelZ)
            } catch (error) {
                console.error("Error fetching or processing speed data:", error);
            }
        };

        fetchData();
    }, [tempData, rpmData]); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className='mb-6 grid grid-cols-1 gap-y-12 gap-x-10 md:grid-cols-1 xl:grid-cols-1 '>
        <div className='flex flex-col gap-4 items-center'>
            <Typography className="font-bold text-black text-2xl" >Temperature</Typography>
            <div className="bg-[#242424] rounded-xl items-center shadow-xl">
                
                <LineChart
                    xAxis={[{ data: Array.from({ length: tempData.length }, (_, i) => i + 1) }]}
                    series={[
                        {
                            data: tempData,  color: '#55B475',                            
                        },
                    ]}
                    sx={{
                        //change left yAxis label styles
                       "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel":{
                        strokeWidth:"0.4",
                        fill:"#ffffff"
                       },
                       
                        // change bottom label styles
                        "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel":{
                            strokeWidth:"0.5",
                            fill:"#ffffff"
                         },
                          // bottomAxis Line Styles
                         "& .MuiChartsAxis-bottom .MuiChartsAxis-line":{
                          stroke:"#ffffff",
                          strokeWidth:0.4,
                        
                         },
                         // leftAxis Line Styles
                         "& .MuiChartsAxis-left .MuiChartsAxis-line":{
                          stroke:"#ffffff",
                          strokeWidth:0.4
                         }
                      }}
                    width={1000}
                    height={500}

                />
                </div>

        </div>
        <div className='flex flex-col gap-4 items-center'>
            <Typography className="font-bold text-black text-2xl" >RPM Data</Typography>
            <div className="bg-[#242424] rounded-xl items-center shadow-xl">
                
                <LineChart
                    xAxis={[{ data: Array.from({ length: rpmData.length }, (_, i) => i + 1),label:"time", color: '#ffffff' }] }
                    series={[
                        {
                            data: rpmData,  color: '#000000'
                        },
                    ]}
                    sx={{
                        //change left yAxis label styles
                       "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel":{
                        strokeWidth:"0.4",
                        fill:"#ffffff"
                       },
                       
                        // change bottom label styles
                        "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel":{
                            strokeWidth:"0.5",
                            fill:"#ffffff"
                         },
                          // bottomAxis Line Styles
                         "& .MuiChartsAxis-bottom .MuiChartsAxis-line":{
                          stroke:"#ffffff",
                          strokeWidth:0.4,
                        
                         },
                         // leftAxis Line Styles
                         "& .MuiChartsAxis-left .MuiChartsAxis-line":{
                          stroke:"#ffffff",
                          strokeWidth:0.4
                         }
                      }}
                    yAxis={[{color: '#ffffff'}]}
                    width={1000}
                    height={500}
                />
           </div>

        </div>
        <div className='flex flex-col gap-4 items-center'>
            <Typography className="font-bold text-black text-2xl" >Gyro Data</Typography>
            <div className="bg-[#242424] rounded-xl items-center shadow-xl">
                
                <LineChart
                    xAxis={[{ data: Array.from({ length: rpmData.length }, (_, i) => i + 1) }]}
                    series={[
                        {
                            curve: "catmullRom",data: gyroxData,  color: '#00FF31'
                        },
                        { curve: "catmullRom", data: gyroyData, color: '#0D00FF'
                        }
                        
                    ]}
                    sx={{
                        //change left yAxis label styles
                       "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel":{
                        strokeWidth:"0.4",
                        fill:"#ffffff"
                       },
                       
                        // change bottom label styles
                        "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel":{
                            strokeWidth:"0.5",
                            fill:"#ffffff"
                         },
                          // bottomAxis Line Styles
                         "& .MuiChartsAxis-bottom .MuiChartsAxis-line":{
                          stroke:"#ffffff",
                          strokeWidth:0.4,
                        
                         },
                         // leftAxis Line Styles
                         "& .MuiChartsAxis-left .MuiChartsAxis-line":{
                          stroke:"#ffffff",
                          strokeWidth:0.4
                         }
                      }}
                    width={1000}
                    height={500}
                />
           </div>

        </div>
        <div className='flex flex-col gap-4 items-center'>
            <Typography className="font-bold text-black text-2xl" >Acceleration</Typography>
            <div className=" bg-[#242424] rounded-xl items-center shadow-xl">
                
                <LineChart
            
                    xAxis={[{  scaleType: 'point', data: Array.from({ length: rpmData.length }, (_, i) => i + 1) }]}
                    series={[
                        {
                            data: AccXData,  area: true, stack: 'total', showMark: false,color:"#FFFF00" 
                        },
                        {
                            data: AccYData,  area: true, stack: 'total', showMark: false, color:"#FF7600"
                        },
                        {
                            data: AccZData,  area: true, stack: 'total', showMark: false, color: "#f51e1e"
                        },
                    ]}
                    sx={{
                        '.MuiLineElement-root': {
                            display: 'none',
                          },
                        //change left yAxis label styles
                       "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel":{
                        strokeWidth:"0.4",
                        fill:"#ffffff"
                       },
                       
                        // change bottom label styles
                        "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel":{
                            strokeWidth:"0.5",
                            fill:"#ffffff"
                         },
                          // bottomAxis Line Styles
                         "& .MuiChartsAxis-bottom .MuiChartsAxis-line":{
                          stroke:"#ffffff",
                          strokeWidth:0.4,
                        
                         },
                         // leftAxis Line Styles
                         "& .MuiChartsAxis-left .MuiChartsAxis-line":{
                          stroke:"#ffffff",
                          strokeWidth:0.4
                         }
                      }}
                    width={1000}
                    height={500}
                />
                
           </div>

        </div>
        
         {/*
        <div className="bg-red-500 rounded-xl">
            <LineChart
                xAxis={[{ data: Array.from({ length: temperData.length }, (_, i) => i + 1) }]}
                series={[
                    {
                        data: temperData,  color: '#000000'
                    },
                ]}
                width={500}
                height={300}
            />
        </div>
        <div className="bg-red-500 rounded-xl">
            <LineChart
                xAxis={[{ data: Array.from({ length: temperData.length }, (_, i) => i + 1) }]}
                series={[
                    {
                        data: temperData,  color: '#000000'
                    },
                ]}
                width={500}
                height={300}
            />
            </div>*/}
    
    </div>
  )
}

export default ChartComponent