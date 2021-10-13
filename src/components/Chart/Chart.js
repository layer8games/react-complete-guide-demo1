import React from "react";

import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
    const itemValues = props.data.map(item => item.value);
    const max = Math.max(...itemValues);

    return (
    <div className="chart">
      {props.data.map((item) => (
        <ChartBar
          key={item.key}
          label={item.label}
          value={item.value}
          maxValue={max}
        />
      ))}
    </div>
  );
};

export default Chart;
