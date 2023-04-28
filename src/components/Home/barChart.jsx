import { Bar } from "react-chartjs-2";
import {
    CategoryScale} from 'chart.js'; 

import Chart from 'chart.js/auto';

import React from 'react'
Chart.register(CategoryScale);


const BarChart = ({aggregatedLogs, logs}) => {
    const ips = aggregatedLogs[0]?.mostActiveIp.map(id => id._id)
    const counts = aggregatedLogs[0]?.mostActiveIp.map(id => id.count)

    const allIps = logs.map(d => d.ip)
    const timeStamps = logs.map(d=> d.timestamp)

  const option = {
    responsive: true,
    plugins: {
      legend: { position: "chartArea" },
      title: {
        display: true,
        text: "Chart with most IP address",
      },
    },
  };
  
  
  const dataForCounts = {
    labels:ips,
    datasets: [
      {
        label: "Counts of Ip address",
        data: counts,
        backgroundColor: "green",
      },
    ],
  
  };

  const dataForTimeAndIp = {
    labels:allIps,
    datasets: [
      {
        label: "Counts of Ip address",
        data: timeStamps,
        backgroundColor: "green",
      },
    ],
  
  };
  
  return (
    <div className="Apap">
      <Bar options={option} data={dataForCounts} />
      <Bar options={option} data={dataForTimeAndIp} />
      
    </div>
  );
}


export default BarChart