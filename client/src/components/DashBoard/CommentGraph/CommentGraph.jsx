import React, { useEffect } from 'react'
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
import { useState } from 'react'

import api from '../../../utils/axios/axios'

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
      text: 'Cantidad de Comentarios',
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
  const [today, setToday] = useState()
  const [allComments, setAllComments] = useState([])
  const [zero, setZero] = useState()
  const [month, setMonth] = useState()
  const [monthForGraphicData, setMonthForGraphicData] = useState()
  const [monthDisplayGraph, setMonthDisplayGraph] = useState()
  const [monthStatusFalse, setMonthStatusFalse] = useState()
  const [rata, setRata] = useState(true)
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Dataset 1',
        data: [8, 43, 137],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  })
  const [options, setOptions] = useState({
    responsive: true,
    plugins: {
      legend: {
        position: 'top', //as const,
      },
      title: {
        display: true,
        text: 'Cantidad de Comentarios',
      },
    },
  })

  let monthForCalculate = []
  let monthDisplay = []

  function loadComments() {
    setRata(!rata)
    const today = new Date().getMonth()

    const monthsOfTheYear = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ]

    for (let i = 2; i >= 0; i--) {
      let actualMonth = today - i

      if (actualMonth === -2 || actualMonth === 10) {
        monthDisplay.push(monthsOfTheYear[10])

        monthForCalculate.push('11')
      } else if (actualMonth === -1 || actualMonth === 11) {
        monthDisplay.push(monthsOfTheYear[11])

        monthForCalculate.push('12')
      } else if (actualMonth === 9) {
        monthDisplay.push(monthsOfTheYear[9])

        monthForCalculate.push('10')
      } else {
        monthDisplay.push(monthsOfTheYear[actualMonth])

        monthForCalculate.push('0' + (actualMonth + 1))
      }
      setMonth([monthForCalculate])
      setMonthDisplayGraph(monthDisplay)
    }
  }

  useEffect(() => {
    async function load() {
      const info = await api.get('/comment/0')
      const response = info.data

      setAllComments(response)
    }
    load()
    loadComments()
  }, [allComments]) //ACA VA allComments COMO DEPENDENCIA

  useEffect(() => {
    const month1 = allComments.filter((el) => {
      if (el.available === true) {
        return el.createdAt.substring(5, 7) === month[0][0]
      }
    }).length
    const month2 = allComments.filter((el) => {
      return el.available === true && el.createdAt.substring(5, 7) === month[0][1]
    }).length
    const month3 = allComments.filter((el) => {
      if (el.available === true) {
        return el.createdAt.substring(5, 7) === month[0][2]
      }
    }).length

    setMonthForGraphicData([month1, month2, month3])
  }, [rata])

  useEffect(() => {
    const month1StateFalse = allComments.filter((el) => {
      if (el.available === false) {
        return el.createdAt.substring(5, 7) === month[0][0]
      }
    }).length
    const month2StateFalse = allComments.filter((el) => {
      if (el.available === false) {
        return el.createdAt.substring(5, 7) === month[0][1]
      }
    }).length
    const month3StateFalse = allComments.filter((el) => {
      if (el.available === false) {
        return el.createdAt.substring(5, 7) === month[0][2]
      }
    }).length

    setMonthStatusFalse([month1StateFalse, month2StateFalse, month3StateFalse])
  }, [rata])

  useEffect(() => {
    setData({
      labels: monthDisplayGraph,

      datasets: [
        {
          label: 'Válidos',
          data: monthForGraphicData,

          borderColor: 'orange',
          backgroundColor: 'orange',
        },
        {
          label: 'No válidos',
          data: monthStatusFalse,
          borderColor: '#010326',
          backgroundColor: '#010326',
        },
      ],
    })
  }, [rata])

  return (
    <div className={style.container}>
      <Line data={data} options={options} />;
    </div>
  )
}
