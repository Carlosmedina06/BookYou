import { GraphicBooksFreeToSubs } from '../BookGraph/BookGraph'
import { GraphicCommentsQuantity } from '../CommentGraph/CommentGraph'
import { GraphicUsersFreeToSubs } from '../UserGraph/UserGraph'
import style from './Statistics.module.css'

export const Statistics = () =>{


    return(
        <div className={style.container}>
            <div>
                <GraphicUsersFreeToSubs/>
            {/* </div>
            <div> */}
                <GraphicCommentsQuantity/>
            {/* </div>
            <div> */}
                <GraphicBooksFreeToSubs/>
            </div>
        </div>
    )
}