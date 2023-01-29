import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

import style from './CommentGraph.module.css'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top', //as const,
    },
    title: {
      display: true,
      text: 'Number of Comments',
    },
  },
}

const labels = ['December', 'January', 'February']

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [8, 43, 137],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    // {
    //   label: 'Dataset 2',
    //   borderColor: 'rgb(53, 162, 235)',
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
}

export function GraphicCommentsQuantity() {
  return (
    <div className={style.container}>
      <Line data={data} options={options} />;
    </div>
  )
}
