import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell,faStar} from '@fortawesome/free-solid-svg-icons';
import style from "../Bookdetail/Reviews.module.css"
let bookComments = []
const Reviews = () =>{

    

    const initialState = {
    rate:'',
     comment:''

    }
const[Review, setReview] = useState(initialState)


const handleReview = (e) =>{
    console.log(e.target.name)
    console.log(e.target.value)
setReview({
...Review,
[e.target.name]:e.target.value

})
console.log(Review)
}

const handleSubmitReview = (e) =>{
e.preventDefault()
console.log(Review)
bookComments.push(Review)
console.log("soy bookcomments")
console.log(bookComments)
setReview(initialState)
}
// if(Review.rate){
//     console.log(Review)
// return(
// <div>
// <form onSubmit={handleSubmitReview}>
// <textarea onChange={handleReview}  name="comment" value={Review.comment} className="border border-black" rows="5" cols="40" />
// <button className="border border-black rounded" type="submit" value="Enviar">Enviar</button>
// </form>
// </div>


// )

// }

return(
<div>
    <div className={style.StarContainer}>
    <div className={style.starWidget}>
        <input onClick={handleReview} type="radio" name="rate" id="rate-5" name="rate" value="5"/>
        <label for="rate-5" className="fas fa-star"><FontAwesomeIcon icon={faStar} /></label>
        <input onClick={handleReview} type="radio" name="rate" id="rate-4" name="rate" value="4"/>
        <label for="rate-4" className={faStar}><FontAwesomeIcon icon={faStar} /></label>
        <input onClick={handleReview} type="radio" name="rate" id="rate-3" name="rate" value="3"/>
        <label for="rate-3" className={faStar}><FontAwesomeIcon icon={faStar} /></label>
        <input onClick={handleReview} type="radio" name="rate" id="rate-2" name="rate" value="2"/>
        <label for="rate-2" className={faStar}><FontAwesomeIcon icon={faStar} /></label>
        <input onClick={handleReview} type="radio" name="rate" id="rate-1" name="rate" value="1"/>
        <label for="rate-1" className={faStar}><FontAwesomeIcon icon={faStar} /></label>
    </div>
    </div>
    {

        Review.rate&&<div>
                       
                            <form onSubmit={handleSubmitReview}>
                            <textarea onChange={handleReview}  name="comment" value={Review.comment} className="border border-black" rows="5" cols="40" />
                            <button className="border border-black rounded" type="submit" value="Enviar">Enviar</button>
                            </form>

                     </div>
    }
    
    {
     !bookComments.length ? <div>Aun no hay Comentarios para este libro</div> : 
     bookComments?.map(item =>  <div>{item.comment}</div>)
    

    }

</div>
)}

export default Reviews