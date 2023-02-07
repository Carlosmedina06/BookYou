import react from "react";
import style from './UserAccountChangedDataCard.module.css'

import { Link } from "react-router-dom";



 const UserAccountChangedDataCard  = ({nombre,name,text,label,inputName,placeholder,inputType,inputValue,onChange,type,onSubmit}) =>{

return(
<div className={style.changeDataContainer} >
  
  
    <div className={style.formTitle}>
               {nombre}
              </div>
              <div className={style.changeDataContainerText}>
               {text}

              </div>
   
      <form className={style.accountChangeCardForm} onSubmit={onSubmit}>
      <div className={style.formInputBox}>
              <label>{label}</label>
              <input name={inputName} value={inputValue} placeholder={placeholder} type={type} onChange={onChange} />
              <div className={style.buttonRegistrerChangeCard}>
                    <button type= "submit">Guardar</button>
                </div>
                </div>
              </form>
            
            


</div>
)}

export default UserAccountChangedDataCard