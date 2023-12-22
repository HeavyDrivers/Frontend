import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart } from "@mui/x-charts";
import {
    Typography
  } from "@material-tailwind/react";

const ChartComponent = () => {
    const [tempData, setTempData] = useState([]);
    const [rpmData, setRpmData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post("https://tcu-backend-69pu.onrender.com/get_tempfrom_ubi");
                const ans = response.data;
                
                
                const prep = Array.from(ans);
                const temp = prep.slice(90, 100).map(entry => parseInt(entry.temperature));
                const rpm = prep.slice(90, 100).map(entry => parseInt(entry.rpm));
                
                setTempData(temp)
                setRpmData(rpm)
            } catch (error) {
                console.error("Error fetching or processing speed data:", error);
            }
        };

        fetchData();
    }, [tempData, rpmData]); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className='mb-6 grid grid-cols-1 gap-y-12 gap-x-10 md:grid-cols-2 xl:grid-cols-3 '>
        <div className='flex flex-col gap-4 items-center'>
            <Typography className="font-bold text-black text-2xl" >Temperature</Typography>
            <div className="bg-red-500 rounded-xl ">
                
                <LineChart
                    xAxis={[{ data: Array.from({ length: tempData.length }, (_, i) => i + 1) }]}
                    series={[
                        {
                            data: tempData,  color: '#000000'
                        },
                    ]}
                    width={500}
                    height={300}
                />
        </div>

        </div>
        <div className='flex flex-col gap-4 items-center'>
            <Typography className="font-bold text-black text-2xl" >RPM Data</Typography>
            <div className="bg-purple-500 rounded-xl items-center">
                
                <LineChart
                    xAxis={[{ data: Array.from({ length: rpmData.length }, (_, i) => i + 1) }]}
                    series={[
                        {
                            data: rpmData,  color: '#000000'
                        },
                    ]}
                    width={500}
                    height={300}
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