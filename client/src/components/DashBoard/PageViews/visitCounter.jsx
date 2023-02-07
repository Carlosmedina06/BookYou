import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyledEngineProvider } from '@mui/material'

import { getPageViews } from '../../../redux/actions'

import style from './visitCounter.module.css'

const PageViews = () => {
  const dispatch = useDispatch()
  const googleAnalyticsPageViews = useSelector((state) => state.pageviews)

  useEffect(() => {
    dispatch(getPageViews())
  }, [dispatch])

  return (
    <div className={style.PageViewsCardContainer}>
      <div className={style.PageViewsNumber}>
        <p>{Object.values(googleAnalyticsPageViews)}</p>
      </div>
      <div className={style.PageViewsCardTitle}>VISITAS</div>
      <div className={style.PageViewsCardSubtitle}>Uiltimos mes</div>
    </div>
  )
}

export default PageViews
