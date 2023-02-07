import style from './UserAccountChangedDataCard.module.css'

const UserAccountChangedDataCard = ({
  nombre,
  name,
  text,
  label,
  inputName,
  placeholder,
  inputType,
  inputValue,
  onChange,
  type,
  onSubmit,
}) => {
  return (
    <div className={style.changeDataContainer}>
      <div className={style.formTitle}>{nombre}</div>
      <div className={style.changeDataContainerText}>{text}</div>

      <form className={style.accountChangeCardForm} onSubmit={onSubmit}>
        <div className={style.formInputBox}>
          <label>{label}</label>
          <input
            name={inputName}
            placeholder={placeholder}
            type={type}
            value={inputValue}
            onChange={onChange}
          />
          <div className={style.buttonRegistrerChangeCard}>
            <button type="submit">Guardar</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UserAccountChangedDataCard
