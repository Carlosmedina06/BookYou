import { GraphicBooksFreeToSubs } from '../BookGraph/BookGraph'
import { GraphicCommentsQuantity } from '../CommentGraph/CommentGraph'
import { MoneyHandled } from '../MoneyHandled/MoneyHandled'
import { GraphicUsersFreeToSubs } from '../UserGraph/UserGraph'

import style from './Statistics.module.css'

export const Statistics = () => {
  return (
    <div className={style.container}>
      <div className={style.comment}>
        <GraphicCommentsQuantity />
      </div>
      <div className={style.users}>
        <GraphicUsersFreeToSubs />
      </div>
      <div className={style.books}>
        <GraphicBooksFreeToSubs />
      </div>
      
    </div>
  )
}
