import { useState, useRef } from "react";
import { Line, Bar } from "react-chartjs-2";
import "chart.js/auto"; // ADD THIS

export const ChartLine = (): JSX.Element => {
	const ref = useRef();

	const data = {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
		datasets: [
			{
				label: "First dataset",
				data: [33, 53, 85, 41, 44, 65],
				fill: true,
				backgroundColor: "rgba(75,192,192,0.2)",
				borderColor: "rgba(75,192,192,1)",
			},
			{
				label: "Second dataset",
				data: [33, 25, 35, 51, 54, 76],
				fill: false,
				borderColor: "#742774",
			},
		],
	};

	return <Bar ref={ref} data={data} />;
};
