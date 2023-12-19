// First four blocks of Data - Drivers, Fuel Efficiency, Distance covered, Speed

import {
  RocketLaunchIcon,
  TruckIcon, ChartBarIcon, UserGroupIcon
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "blue",
    icon: UserGroupIcon,
    title: "Driver Status",
    value: "Idle",
    footer: {
      color: "text-red-500",
      value: "",
      label: "",
    }, 
  },
  {
    color: "orange",
    icon: TruckIcon,
    title: "Load",
    value: "800kg",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
  {
    color: "blue",
    icon: RocketLaunchIcon,
    title: "Speed",
    value: "40 Km/h",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than average",
    },
  },
  {
    color: "blue",
    icon: ChartBarIcon,
    title: "Fuel Efficiency",
    value: "80%",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than ideal",
    },
  },
];

export default statisticsCardsData;