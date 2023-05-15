import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
  } from "recharts";
  import { curveCardinal } from "d3-shape";


const Marks = () => {
  const data = [
    {
      name: "Assignment1",
      mark: 48,
    },
    {
      name: "Assignment2",
      mark: 29,
    },
    {
      name: "Assignment3",
      mark: 30,
    },
    {
      name: "Assignment4",
      mark: 29,
    },
    {
      name: "Assignment5",
      mark: 27,
    },
    {
      name: "Assignment6",
      mark: 34,
    },
    {
      name: "Assignment7",
      mark: 30,
    },
    {
      name: "Assignment8",
      mark: 30,
    },
  ];
  const cardinal = curveCardinal.tension(0.2);
  return (
    <div className=" flex justify-center ">
       <AreaChart
        width={1000}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type={cardinal}
          dataKey="mark"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.3}
        />
      </AreaChart>
     
    </div>
  );
};

export default Marks;
