// First four blocks of Data - Drivers, Fuel Efficiency, Distance covered, Speed

import {
  RocketLaunchIcon,
  TruckIcon,
  ChartBarIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "blue",
    icon: UserGroupIcon,
    title: "Vehicle's Online",
    value: "104",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than average",
    },
  },
  {
    color: "orange",
    icon: WrenchScrewdriverIcon,
    title: "Vehicle's Under Maintaince",
    value: "8",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
];

export default statisticsCardsData;
