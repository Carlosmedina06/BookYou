import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useState } from 'react'
import { useEffect } from 'react'

import {
  quantityOFPayBooks,
  quantityOfFreeBooks,
  quantityOfBooks,
} from '../../../utils/Hooks/dashFunctions/bookFunctions'

import style from './BookGraph.module.css'
ChartJS.register(ArcElement, Tooltip, Legend)

export const data = {
  labels: ['Subscription', 'Free'],
  datasets: [
    {
      label: 'Books',
      data: [2, 8],
      backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],

      borderWidth: 1,
    },
  ],
}
export const options = {
  cutout: '75%',
  borderRadius: 2,
}
export const textCenter = {
  id: 'textCenter',
  beforeDatasetsDraw(chart, args, pluginOptions) {
    const { ctx, data } = chart

    ctx.save()
    ctx.font = 'bolder 24px sans serif'
    ctx.fillStyle = 'orange'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('Books', chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
  },
}
export function GraphicBooksFreeToSubs() {
  const booksSubs = quantityOFPayBooks()
  const booksFree = quantityOfFreeBooks()
  const allBooks = quantityOfBooks()
  const [data, setData] = useState({
    datasets: [
      {
        label: 'Books',
        data: [2, 8],
        backgroundColor: ['#BC2EF2', '#2EF29D'],
        borderColor: ['#BC2EF2', '#2EF29D'],

        borderWidth: 1,
      },
    ],
    labels: ['Subscription', 'Free'],
  })
  const [textCenter, setTextCenter] = useState({
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart

      ctx.save()
      ctx.font = 'bolder 24px sans serif'
      ctx.fillStyle = 'orange'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(
        allBooks + ' Books',
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y,
      )
    },
  })

  useEffect(() => {
    setData({
      datasets: [
        {
          label: 'Books',
          data: [booksSubs, booksFree],
          backgroundColor: ['#BC2EF2', '#2EF29D'],
          borderColor: ['#BC2EF2', '#2EF29D'],

          borderWidth: 1,
        },
      ],
      labels: ['Subscription', 'Free'],
    })
    setTextCenter({
      id: 'textCenter',
      beforeDatasetsDraw(chart, args, pluginOptions) {
        const { ctx, data } = chart

        ctx.save()
        ctx.font = 'bolder 30px sans serif'
        ctx.fillStyle = 'orange'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(
          'Books 4' + allBooks,
          chart.getDatasetMeta(0).data[0].x,
          chart.getDatasetMeta(0).data[0].y,
        )
      },
    })
  }, [])

  return (
    <div className={style.graph}>
      <Doughnut data={data} options={options} plugins={[textCenter]} />
    </div>
  )
}
