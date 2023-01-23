import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell,faStar} from '@fortawesome/free-solid-svg-icons'
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
    <div className="grid w-48 py-15 px-25   place-content-center">
    <div className="grid grid-cols-5  content-center  w-32 flex-row my-2.5 py-15 px-25 star-wdiget">
        <div className="inputField" style={{color:"yellow"}}>
        <FontAwesomeIcon icon={faStar} />
        <input  onClick={handleReview} type="radio" name="rate" value="5" id="rate-5" className="input-star"/>
        <label htmlFor="rate-5"></label>
        </div>
        <div className="inputField" style={{color:"yellow"}}>
        <FontAwesomeIcon icon={faStar} />
        <input type="radio" name="rate" value="4" id="rate-4" className="input-star"/>
        <label htmlFor="rate-4"></label>
        </div>
        <div className="inputField" style={{color:"yellow"}}>
        <FontAwesomeIcon icon={faStar} />
        <input type="radio" name="rate" value="3" id="rate-3" className="input-star"/>
        <label htmlFor="rate-3"></label>
        </div>
        <div className="inputField" style={{color:"yellow"}}>
        <FontAwesomeIcon icon={faStar} />
        <input type="radio" name="rate" value="2" id="rate-2" className="input-star"/>
        <label htmlFor="rate-2"></label>
        </div>
        <div className="inputField" style={{color:"yellow"}}>
        <FontAwesomeIcon icon={faStar} />
        <input type="radio" name="rate" value="1" id="rate-1" className="input-star"/>
        <label htmlFor="rate-1"></label>
        </div>
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