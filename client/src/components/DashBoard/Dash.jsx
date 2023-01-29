import { useSelector } from 'react-redux'

import {
  quantityOfFreeBooks,
  quantityOFPayBooks,
} from '../../utils/Hooks/dashFunctions/bookFunctions'

import { GraphicBooksFreeToSubs } from './BookGraph/BookGraph'
import { GraphicUsersFreeToSubs } from './UserGraph/UserGraph'
import style from './Dash.module.css'
import { BookEdit } from './BookEdit/BookEdit'
import { UserEdit } from './UserEdit/UserEdit'
import { CommentEdit } from './CommentEdit/CommentEdit'
import { GraphicCommentsQuantity } from './CommentGraph/CommentGraph'
import { DashNav } from './DashNav/DashNav'

export const Dash = () => {
  const booksSubs = quantityOFPayBooks()
  const booksFree = quantityOfFreeBooks()

  console.log(booksSubs, booksFree)

  return (
    <div className={style.container}>
      <DashNav />
      {/* <div className={style.graph}>
        <GraphicBooksFreeToSubs />
      </div>
      <div className={style.graph}>
        <GraphicUsersFreeToSubs />
      </div>
      <br/>
      <div className={style.form}>
        <BookEdit />
      </div>
      <div className={style.form}>
        <UserEdit />
      </div>
      <div>
        <CommentEdit/>
      </div>
      <div>
        <GraphicCommentsQuantity/>
      </div> */}
    </div>
  )
}
