import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useState, useEffect } from 'react'

import {
  quantityOFFreeUsers,
  quantityOfSubsUsers,
  quantityOfUsers,
} from '../../../utils/Hooks/dashFunctions/userFunctions'

import style from './UserGraph.module.css'

ChartJS.register(ArcElement, Tooltip, Legend)

export const data = {
  labels: ['Subscription', 'Free'],
  datasets: [
    {
      label: 'Users',
      data: [7, 20],
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
    ctx.font = 'bolder 30px sans serif'
    ctx.fillStyle = 'orange'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('Users', chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
  },
}
export function GraphicUsersFreeToSubs() {
  const allUsers = quantityOfUsers()
  // const allUsers = useSelector(state=>state.users)
  const usersFree = quantityOFFreeUsers()
  const usersPremium = quantityOfSubsUsers()

  const [data, setData] = useState({
    datasets: [
      {
        label: 'Users',
        data: [2, 8],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],

        borderWidth: 1,
      },
    ],
    labels: ['Premium', 'Free'],
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
        allUsers + ' Users',
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y,
      )
    },
  })

  useEffect(() => {
    setData({
      datasets: [
        {
          label: 'Users',
          data: [usersPremium, usersFree],
          backgroundColor: ['#BC2EF2', '#2EF29D'],
          borderColor: ['#BC2EF2', '#2EF29D'],

          borderWidth: 1,
        },
      ],
      labels: ['Premium', 'Free'],
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
          allUsers + ' Users',
          chart.getDatasetMeta(0).data[0].x,
          chart.getDatasetMeta(0).data[0].y,
        )
      },
    })
  }, [])

  return (
    <div className={style.graph}>
      <Doughnut className={style.doughnut} data={data} options={options} plugins={[textCenter]} />
    </div>
  )
}
