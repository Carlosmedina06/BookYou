import react from "react";
import style from './BookEditInputBox.module.css'

import { Link } from "react-router-dom";



 const BookUpdateEditInputBox  = ({name,label,value,placeholder,onChange,type}) =>{

return(

      <div className={style.formInputBox}>
              <label>{label}</label>
              <input name={name} value={value} placeholder={placeholder} type={type} onChange={onChange} />
                </div>

)}

export default BookUpdateEditInputBox