import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell,faStar} from '@fortawesome/free-solid-svg-icons'
const Review = () =>{
return(
<div>
    <div className="grid w-48 py-15 px-25   place-content-center">
    <div className="grid grid-cols-5  content-center  w-32 flex-row my-2.5 py-15 px-25 star-wdiget">
    
    
        <div className="inputField" style={{color:"yellow"}}>
        <FontAwesomeIcon icon={faStar} />
        <input  type="radio" name="rate" value="5" id="rate-5" className="input-star"/>
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


</div>
)}

export default Review