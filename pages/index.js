import React from "react";
import Vertical_barChart from "../components/chart/Vertical_barChart";
import Horizontal_barChart from "../components/chart/Horizontal_barChart";
import AreaChart from "../components/chart/AreaChart";
import PieChart from "../components/chart/PieChart";
import DoughnutChart from "../components/chart/DoughnutChart";

const index = () => {
  return (
    <>
      <div>
        <Vertical_barChart />
      </div>
      <div>
        <Horizontal_barChart />
      </div>
      <div>
        <AreaChart />
      </div>
      <div>
        <PieChart />
      </div>
      <div>
        <DoughnutChart />
      </div>
    </>
  );
};

export default index;
