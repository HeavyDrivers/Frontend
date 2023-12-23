import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { LineChart } from "@mui/x-charts";
import { Typography } from "@material-tailwind/react";
import GaugeComponent from "react-gauge-component";
const CardsComponent = () => {
  const [tempData, setTempData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://tcu-backend-69pu.onrender.com/get_tempfrom_ubi"
        );
        const ans = response.data;

        const prep = Array.from(ans);
        const temp = prep.slice(-1).map((entry) => parseInt(entry.temperature));
        console.log(temp);

        setTempData(parseInt(temp) + 70);
      } catch (error) {
        console.error("Error fetching or processing speed data:", error);
      }
    };

    fetchData();
  }, [tempData]); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className=" ">
      <div className=" mb-6 grid grid-cols-1 gap-y-12 gap-x-10 md:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-xl bg-[#242424]">
          <div className="flex flex-row justify-around">
            <div className="py-5 text-xl font-semibold text-white">
              Engine Temperature
            </div>
          </div>
          <div>
            <GaugeComponent
              type="semicircle"
              arc={{
                width: 0.2,
                padding: 0.005,
                cornerRadius: 1,
                // gradient: true,
                subArcs: [
                  {
                    limit: 80,
                    color: "#EA4228",
                    showTick: true,
                    tooltip: {
                      text: "Too low temperature!",
                    },
                    onClick: () => console.log(""),
                    onMouseMove: () => console.log(""),
                    onMouseLeave: () => console.log(""),
                  },
                  {
                    limit: 90,
                    color: "#F5CD19",
                    showTick: true,
                    tooltip: {
                      text: "Low temperature!",
                    },
                  },
                  {
                    limit: 100,
                    color: "#5BE12C",
                    showTick: true,
                    tooltip: {
                      text: "OK temperature!",
                    },
                  },
                  {
                    limit: 110,
                    color: "#F5CD19",
                    showTick: true,
                    tooltip: {
                      text: "High temperature!",
                    },
                  },
                  {
                    color: "#EA4228",
                    tooltip: {
                      text: "Too high temperature!",
                    },
                  },
                ],
              }}
              pointer={{
                color: "#808080",
                length: 0.8,
                width: 15,
                // elastic: true,
              }}
              labels={{
                valueLabel: {
                  formatTextValue: (value) => value + "ºC",
                  color: "#000000",
                },
                tickLabels: {
                  type: "outer",
                  valueConfig: {
                    formatTextValue: (value) => value + "ºC",
                    fontSize: 10,
                  },
                },
              }}
              value={tempData}
              minValue={65}
              maxValue={135}
            />
          </div>
        </div>
        <div className="rounded-xl bg-[#242424]">
          <div>
            <div className="flex flex-row justify-around">
              <div className="py-5 text-xl font-semibold text-white">
                Coolant Temperature
              </div>
            </div>
          </div>

          <div>
            <GaugeComponent
              type="semicircle"
              arc={{
                width: 0.2,
                padding: 0.005,
                cornerRadius: 1,
                // gradient: true,
                subArcs: [
                  {
                    limit: 60,
                    color: "#EA4228",
                    showTick: true,
                    tooltip: {
                      text: "Too low temperature!",
                    },
                    onClick: () => console.log(""),
                    onMouseMove: () => console.log(""),
                    onMouseLeave: () => console.log(""),
                  },
                  {
                    limit: 80,
                    color: "#F5CD19",
                    showTick: true,
                    tooltip: {
                      text: "Low temperature!",
                    },
                  },
                  {
                    limit: 95,
                    color: "#5BE12C",
                    showTick: true,
                    tooltip: {
                      text: "OK temperature!",
                    },
                  },
                  {
                    limit: 110,
                    color: "#F5CD19",
                    showTick: true,
                    tooltip: {
                      text: "High temperature!",
                    },
                  },
                  {
                    color: "#EA4228",
                    tooltip: {
                      text: "Too high temperature!",
                    },
                  },
                ],
              }}
              pointer={{
                color: "#808080",
                length: 0.8,
                width: 15,
                // elastic: true,
              }}
              labels={{
                valueLabel: {
                  formatTextValue: (value) => value + "ºC",
                  color: "#000000",
                },
                tickLabels: {
                  type: "outer",
                  valueConfig: {
                    formatTextValue: (value) => value + "ºC",
                    fontSize: 10,
                  },
                },
              }}
              value={tempData - 13}
              minValue={45}
              maxValue={155}
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CardsComponent;
