import react from "react";
import style from './BookEditInputBox.module.css'

import { Link } from "react-router-dom";



 const BookUpdateEditInputSelect  = ({nombre,propToMap,name,text,label,inputName,placeholder,inputType,inputValue,onChange,type,onSubmit}) =>{

return(
    <div className={style.formInputBox}>
    <label htmlFor="category">{label}</label>
    <select
      className={style.formSelect}
      name={name}
      value={value}
      onBlur={handleBlur}
      onChange={onChange}
    >
      {{propToMap}?.map((element) => {
        return (
          <option key={element.id} value={element.category}>
            {element.category}
          </option>
        )
      })}
    </select>
  </div>
)}

export default BookUpdateEditInputSelect 