import { useState } from 'react'
import { useEffect } from 'react'

import api from '../../../utils/axios/axios'

import style from './MoneyHandled.module.css'

export const MoneyHandled = () => {
  const [allUsersInDb, setAllUsersInDb] = useState()
  const [moneyThisMonth, setMoneyThisMonth] = useState()

  useEffect(() => {
    async function getInfo() {
      const info = await api('/user')
      const response = info.data

      const subscribedUsers = response.filter((el) => {
        return el.subscription === 'premium'
      })

      const money = subscribedUsers.length * 385

      setMoneyThisMonth(money)
      setAllUsersInDb(response)
    }
    getInfo()
  }, [])

  //   const subscribedUsers = allUsersInDb.filter((el) => {
  //     return el.subscription === "premium";
  //   });
  //   console.log(subscribedUsers);
  //   const moneyThisMonth = subscribedUsers.length * 385;

  return (
    <div className={style.container}>
      <h1 className={style.content}>$ {moneyThisMonth} </h1>
      <br />
      <div className={style.title}>Ingresos mensuales</div>
    </div>
  )
}
