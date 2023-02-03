import style from '../Home/home.module.css'

function ButtonClear({ setBookInput }) {
  return (
    <>
      <div>
        <div style={{ position: 'absolute', top: '90px', right: '45px' }}>
          <button className={style.boton} onClick={clearStates}>
            Lmpiar
          </button>
        </div>
      </div>
    </>
  )
}

export default ButtonClear
