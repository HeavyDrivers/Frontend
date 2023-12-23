import React , {useState, useEffect}from "react";
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
  Button
} from "@material-tailwind/react";

import {
  ClockIcon,
  CheckIcon,
  EllipsisVerticalIcon,
  ArrowUpIcon, CreditCardIcon
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
import RpmData from "@/apiData/RpmData"
import TempData from "@/apiData/TempData";
import Temperature from "@/apiData/Temperature";
import ChartComponent from "@/apiData/ChartComponent";
import CardsComponent from "@/apiData/CardsComponent"
import model from "@/ml/MlModel";
import MlModel from "@/ml/MlModel";


export function Home() {
  const [selectedOption, setSelectedOption] = useState('');
  const [showItems, setShowItems] = useState(false);

  const options = [
    { value: 'option1', image: '/public/img/bruce-mars.jpeg', text: 'Information about option 1' },
    { value: 'option2', image: '/public/img/bruce-mars.jpeg', text: 'Details related to option 2' },
    { value: 'option3', image: '/public/img/bruce-mars.jpeg', text: 'Description of option 3' },
  ];

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setShowItems(true);
  };


  


  


  return (
    <div className="mt-12 ">
      <div className="text-[#1e96fc] text-[2.5rem] font-bold  ">
        Welcome to Telemetry Portal!
      </div>
      <div className="text-[#ffffff] font-light pb-5">Your Mine's GPS to Profits. Track every haul, optimize routes, and boost safety. Real-time data, actionable insights. Take control, maximize profits.</div>
      
      <div className="text-[#1e96fc] text-[2rem] font-bold">
        Dashboard Status Check
      </div>


      <div className="mb-12 px-20 pt-10 grid gap-y-10 gap-x-6 md:grid-cols-3 xl:grid-cols-3">


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
          <div className="flex flex-row gap-3">
        <div className="text-[#ffffff] text-xl font-bold ">
          Vehicle ID:
        </div>

        <div>
          <select value={selectedOption} onChange={handleChange}>
            <option value="">Select an option</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>

          {selectedOption && (
            <div>
              <img src={options.find((o) => o.value === selectedOption).image} alt={selectedOption} />
              <p>{options.find((o) => o.value === selectedOption).text}</p>
            </div>
          )}
        </div>
      </div>
      {showItems && ( 
        <div>
          <div className="">  
            <div className="text-[#1e96fc] text-[2rem] font-bold">
              Vehicle Metrics
            </div>
            <CardsComponent />
            <div className="text-[#1e96fc] text-[2rem] font-bold">
              Data Analytics
            </div>
            <ChartComponent />          
          </div>
          <div className="">
            <Typography variant="h2" color="blue-gray" className="mb-10">
              Data Prediction
            </Typography>
            <MlModel/>
          </div>
        </div>
        )}
      
      

      
                
    </div>
  );
}

export default Home;
