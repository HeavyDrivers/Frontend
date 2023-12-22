import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart } from "@mui/x-charts";

const TempData = () => {
    const [tempData, setTempData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://tcu-backend-69pu.onrender.com/get_temperature");
                const ans = response.data;
                console.log("Temp Raw Data:", ans);

                const prep = Array.from(ans);
                const arr = prep.slice(-10).map(entry => parseInt(entry.value));
                console.log("Temp Data:", arr);

                setTempData(arr);
            } catch (error) {
                console.error("Error fetching or processing speed data:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    return (
        <div className="bg-purple-500 rounded-xl">
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
    );
};

export default TempData;