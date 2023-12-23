import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Select,
  Typography,
  Option,
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
  Input,
  Button,
} from "@material-tailwind/react";

import {
  ClockIcon,
  CheckIcon,
  EllipsisVerticalIcon,
  ArrowUpIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "@/data";
import SpeedData from "@/apiData/SpeedData";
import CoolantData from "@/apiData/CoolantData";
import RpmData from "@/apiData/RpmData";
import TempData from "@/apiData/TempData";
import Temperature from "@/apiData/Temperature";
import ChartComponent from "@/apiData/ChartComponent";
import CardsComponent from "@/apiData/CardsComponent";
import model from "@/ml/MlModel";
import MlModel from "@/ml/MlModel";

export function Home() {
  const [selectedOption, setSelectedOption] = useState("");
  const [showItems, setShowItems] = useState(false);

  const options = [
    {
      value: "CAT 777D-12512",
      image: "/public/img/v1.png",
      value: "CAT 777D-42414",
      image: "/public/img/v3.png",
      Vehicle_Model: " XGFUADJ",
      Year_of_Purchase: "2012",
      Engine_Health_Status: "OK",
      Battery_Health_Status: "OK",
      Fuel_Level: "60%",
      Last_Active: "1 min ago",
      Last_Maintenance: "15 days ago",
    },
    {
      value: "CAT 335FL_CR-14112",
      image: "/public/img/v2.png",
      text: {},
      Vehicle_Model: " XGFUADJ",
      Year_of_Purchase: "2012",
      Engine_Health_Status: "OK",
      Battery_Health_Status: "OK",
      Fuel_Level: "60%",
      Last_Active: "1 min ago",
      Last_Maintenance: "15 days ago",
    },
    {
      value: "CAT 777D-42414",
      image: "/public/img/v3.png",
      Vehicle_Model: " XGFUADJ",
      Year_of_Purchase: "2012",
      Engine_Health_Status: "OK",
      Battery_Health_Status: "OK",
      Fuel_Level: "60%",
      Last_Active: "1 min ago",
      Last_Maintenance: "15 days ago",
    },
  ];

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setShowItems(true);
  };

  return (
    <div className="">
      <div className="text-[2.5rem] font-bold text-[#1e96fc]  ">
        Welcome to Telemetry Portal!
      </div>
      <div className="pb-5 font-light text-[#ffffff]">
        Your Mine's GPS to Profits. Track every haul, optimize routes, and boost
        safety. Real-time data, actionable insights. Take control, maximize
        profits.
      </div>

      <div className="text-[2rem] font-bold text-[#1e96fc]">
        Dashboard Status Check
      </div>

      <div className="mb-12 grid gap-y-10 gap-x-6 px-20 pt-10 md:grid-cols-3 xl:grid-cols-3">
        {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
            footer={
              <Typography className="font-normal text-blue-gray-600">
                <strong className={footer.color}>{footer.value}</strong>
                &nbsp;{footer.label}
              </Typography>
            }
          />
        ))}
      </div>
      <div className="w-100 flex flex-row items-center gap-3">
        <div className="w-full">
          <select
            value={selectedOption}
            onChange={handleChange}
            id="mainpageselect"
          >
            <option value="">Select Vehicle</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>

          {selectedOption && (
            <div className="flex flex-col">
              <div className=" py-6 text-5xl font-bold text-[#ffffff] ">
                {options.find((o) => o.value === selectedOption).value}
              </div>
              <div className="color flex flex-row justify-between">
                <div className="flex flex-col ">
                  <p className="my-2">
                    Vehicle id:{" "}
                    {
                      options.find((o) => o.value === selectedOption)
                        .Vehicle_Model
                    }
                  </p>
                  <p className="datav my-2">
                    Year of Purchase:{" "}
                    {
                      options.find((o) => o.value === selectedOption)
                        .Year_of_Purchase
                    }
                  </p>
                  <p className="datav my-2">
                    Engine Health Status:{" "}
                    {
                      options.find((o) => o.value === selectedOption)
                        .Engine_Health_Status
                    }
                  </p>
                  <p className="datav my-2">
                    Battery Health Status:{" "}
                    {
                      options.find((o) => o.value === selectedOption)
                        .Battery_Health_Status
                    }
                  </p>
                  <p className="datav my-2">
                    Last Active:{" "}
                    {
                      options.find((o) => o.value === selectedOption)
                        .Last_Active
                    }
                  </p>
                  <p className="datav my-2">
                    Last Maintenance:{" "}
                    {
                      options.find((o) => o.value === selectedOption)
                        .Battery_Health_Status
                    }
                  </p>
                </div>
                <img
                  src={options.find((o) => o.value === selectedOption).image}
                  alt={selectedOption}
                  className="mr-40 h-80"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {showItems && (
        <div>
          <div className="">
            <div className="text-[2rem] font-bold text-[#1e96fc]">
              Average Vehicle Metrics
            </div>
            <CardsComponent />
            <div className="text-[2rem] font-bold text-[#1e96fc]">
              Data Analytics
            </div>
            <ChartComponent />
          </div>
          <div className="">
            <Typography variant="h2" color="blue-gray" className="mb-10">
              Data Prediction
            </Typography>
            <MlModel />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
