import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell,faStar} from '@fortawesome/free-solid-svg-icons';
import style from "../Bookdetail/Reviews.module.css"
import GetRateStars from "../GetRateStars/GetRateStars";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
let bookComments = [
    {
        rate:'4',
         comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    
        },
        {
            rate:'3',
             comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        
            },
            {
                rate:'5',
                 comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            
                },


]
const Reviews = () =>{
     
    let userlogged = true
    const dispatch = useDispatch()
    
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


 const handlePostReview = (e) => {
    e.preventDefault()
//  dispatch(postBookReview(e))
    

}
const handleSubmitReview = (e) =>{
   
e.preventDefault()
console.log(Review)
bookComments.push(Review)
console.log("soy bookcomments")
console.log(bookComments)
setReview(initialState)
}


if(!userlogged) {
 return <div className={style.textLoginBanner}>
          <div > 
            <p>Deseas agregar un comentario?</p> 
            <p>ingresa a tu cuenta <Link to="/404"><button className={style.readBookButton}>Log In</button></Link></p>
        </div>
        </div>

}




return(
<div className={style.commentsContainer}>
    <div>Califica este libro</div> 
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
                           
                            <form className={style.addReviewForm} onSubmit={handleSubmitReview}> 
                             
                            <textarea onChange={handleReview}  name="comment" value={Review.comment} placeholder="Agregar comentario"className="border border-black" rows="3" cols="50" />
                            <button className={style.postReviewButton} type="submit" value="Enviar">Enviar</button>
                            {/* <button onClick={handlePostReview} className={style.postReviewButton} type="submit" value="Enviar">Enviar db</button> */}
                            </form>

                     </div>
    }
    
    {
     !bookComments.length ? <div>Aun no hay Comentarios para este libro</div> : 
     bookComments?.map(item => 
         <div className={style.postedCommentsBox}>
              <div className={style.postedCommentsImg}>
                  <img src="https://res.cloudinary.com/dn8jxsqka/image/upload/v1674671180/user_icon_riocsx.png" alt="" />
              </div>
              <div>
                 <div>{item.comment}</div>
                <div> Usarname </div>
             <GetRateStars rate={item.rate}/>
           </div>
        </div>)
    

    }

</div>
)}

export default Reviews