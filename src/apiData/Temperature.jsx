import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart } from "@mui/x-charts";

const Temperature = () => {
    const [temperData, setTemperData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://industrial.api.ubidots.com/api/v1.6/devices/esp32/temperature/values", {
                    headers: {
                        'X-Auth-Token': 'BBUS-YnU2MPt4wREZM7PDROprW2xw05A8Zr',
                    }
                });
                const ans = response.data;
                console.log("Raw Data:", ans);

                const prep = Array.from(ans);
                const arr = prep.slice(-10).map(entry => parseInt(entry.value));
                console.log("Processed Data:", arr);

                setTemperData(arr);
            } catch (error) {
                console.error("Error fetching or processing speed data:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    return (
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
    );
};

export default Temperature;