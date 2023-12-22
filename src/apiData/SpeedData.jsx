import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart } from "@mui/x-charts";
import { ChartContainer } from '@mui/x-charts';

const SpeedData = () => {
    const [speedData, setSpeedData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://tcu-backend-69pu.onrender.com/get_speed");
                const ans = response.data;
                console.log("Raw Data:", ans);

                const prep = Array.from(ans);
                const arr = prep.slice(0, 10).map(entry => parseInt(entry.value));
                console.log("Processed Data:", arr);

                setSpeedData(arr);
            } catch (error) {
                console.error("Error fetching or processing speed data:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    return (
        <div className="bg-pink-300 rounded-xl ">
            <LineChart
                xAxis={[{ data: Array.from({ length: speedData.length }, (_, i) => i + 1) }]}
                series={[
                    {
                        data: speedData, color: '#000000'
                    },
                
                ]}
                width={500}
                height={300}
            />
        </div>
    );
};

export default SpeedData;



// import React from 'react'
// import axios from 'axios'
// import { useState } from 'react'
// import { LineChart } from "@mui/x-charts";
// const SpeedData = () => {

//     const [speedData, setSpeedData] = useState([]);
//     const [keysData, setKeysData] = useState([]);
//     const generateSpeed = async () => {
//         await axios
//           .get("https://tcu-backend-69pu.onrender.com/get_speed")
//           .then((res) => {
          
//        //   const prep = res.data;
          
//     //      console.log(prep);
//           const ans = res.data;
//           console.log(res.data);
//           const prep = Array.from(ans);
        
//           console.log(prep);
//           const arr = [];
          
//           for (let i = 0; i < 10; i++) {
//             const pre = Object.values(prep[i]);
//             arr.push(pre);

//           }
//           console.log(arr);
//           console.log()
//           setSpeedData(arr);
          
          
          

          
//         });
        
//     }
//     generateSpeed();
    
    
//   return (
//     <div className="bg-pink-500 rounded-xl">
//         <LineChart
//           xAxis={[{ data: [1, 2, 3, 4, 5 ,6 ,7 ,8, 9, 0] }]}
//           series={[
//             {
//               data: speedData,
//             },
//           ]}
//           width={500}
//           height={300}
//         />
//     </div>
//   )
// }

// export default SpeedData;
