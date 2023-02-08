import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import jwtDecode from 'jwt-decode'
import { useEffect } from 'react'
import axios from 'axios'

import { getOneUser } from '../../redux/actions'
import NavBar from '../NavBar/NavBar'
import UserAccountRow from '../userAccount/userAccountRow'

import style from './UserAccount.module.css'
import UserAccountChangedDataCard from './UserAccountChangedDataCard'
const UserAccount = () => {
  const dispatch = useDispatch()

  var decoded = jwtDecode(window.localStorage.getItem('token'))

  useEffect(() => {
    dispatch(getOneUser(decoded.id))
  }, [dispatch])

  const infoUser = useSelector((state) => state.oneUser)

  const [display, setDisplay] = useState({
    main: true,
    nameEdit: false,
    emailEdit: false,
    usernameEdit: false,
    suscripcionEdit: false,
    accountDeleteEdit: false,
  })
  // codigo de la edicion de usuarios

  const users = useSelector((state) => state.users)

  const [rata, setRata] = useState(true)
  const navigate = useNavigate()

  const [input, setInput] = useState({
    search: '',
    select: '',
  })

  const handleDisplaySelect = (e) => {
    let newValue

    if (e.target.value === 'false') {
      newValue = false
    }
    if (e.target.value === 'true') {
      newValue = true
    }
    setDisplay({ ...display, [e.target.name]: newValue })

    setEditedUser({
      name: infoUser.name,
      username: infoUser.username,
      email: infoUser.email,
      subscription: infoUser.subscription,
      role: infoUser.role,
      id: infoUser.id,
    })
  }
  const [editedUser, setEditedUser] = useState({
    name: '',
    username: '',
    email: '',
    subscription: '',
    role: '',
    id: '',
  })
  const handleUserSelect = (e) => {
    setInput({
      search: '',
      select: e.target.value,
    })

    // const user = users.filter((elem) => {
    //   return elem.name === e.target.value
    //   //return elem.name.toLowerCase().trim() === e.target.value.toLocaleLowerCase().trim()
    // })

    setEditedUser({
      name: infoUser.name,
      username: infoUser.username,
      email: infoUser.email,
      subscription: infoUser.subscription,
      role: infoUser.role,
      id: infoUser.id,
    })
  }

  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()

    formData.append('name', editedUser.name)
    formData.append('username', editedUser.username)
    formData.append('email', editedUser.email)
    formData.append('subscription', editedUser.subscription)
    formData.append('role', editedUser.role)
    formData.append('id', editedUser.id)

    const info = await axios.put('https://server-bookyou.onrender.com/user/update', editedUser, {
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`,
      },
    })

    const res = info.data

    setRata(!rata)
  }

  const handleDelete = async () => {
    const info = await axios.delete(
      'https://server-bookyou.onrender.com/user/delete/' + editedUser.id,
      {
        headers: {
          authorization: `bearer ${localStorage.getItem('token')}`,
        },
      },
    )

    setEditedUser({
      name: '',
      username: '',
      email: '',
      subscription: '',
      role: '',
      id: '',
      username: '',
      email: '',
      subscription: '',
      role: '',
      id: '',
    })
    setInput({
      search: '',
      select: '',
      search: '',
      select: '',
    })
    const response = info.data

    setRata(!rata)
    navigate('/')

    return response
  }

  return (
    <div className={style.mainContainer}>
      <div style={{ position: 'absolute', top: '0px', left: '0px' }}>
        <NavBar />
      </div>
      <div className={style.cardContainer}>
        <div>
          {display.main &&
            !display.nameEdit &&
            !display.emailEdit &&
            !display.usernameEdit &&
            !display.suscripcionEdit &&
            !display.accountDeleteEdit && (
              <div className={style.contentformCard}>
                <div className={style.formTitle}>
                  <p>Informacion de cuenta </p>
                </div>
                {/* <button  name="nameEdit"  value="true" onClick={handleDisplaySelect}>w */}
                <UserAccountRow
                  data={infoUser.name}
                  label={'Nombre'}
                  name={'nameEdit'}
                  sign={'arc'}
                  value={true}
                  onClick={handleDisplaySelect}
                />
                {/* </button> */}
                <UserAccountRow
                  data={infoUser.email}
                  label={'Email'}
                  name={'emailEdit'}
                  sign={'arc'}
                  value={'true'}
                  onClick={handleDisplaySelect}
                />
                <UserAccountRow
                  data={infoUser.username}
                  label={'Usuario'}
                  name={'usernameEdit'}
                  sign={'arc'}
                  value={'true'}
                  onClick={handleDisplaySelect}
                />
                <UserAccountRow
                  data={infoUser.subscription}
                  label={'Suscripcion'}
                  name={'suscripcionEdit'}
                  sign={'arc'}
                  value={'true'}
                  onClick={handleDisplaySelect}
                />
                <UserAccountRow
                  label={'Borrar cuenta'}
                  name={'accountDeleteEdit'}
                  sign={'delete'}
                  value={'true'}
                  onClick={handleDisplaySelect}
                />
              </div>
            )}
          {display.nameEdit && (
            <div className={style.contentformCard}>
              <div className={style.BackButtonUserAccountContainer}>
                <button
                  className={style.BackButtonUserAccountChangedCard}
                  name="nameEdit"
                  value={false}
                  onClick={handleDisplaySelect}
                >
                  <BiArrowBack
                    className={style.BackButtonUserAccountChangedCardSign}
                    onClick={handleDisplaySelect}
                  />
                  Atras
                </button>
              </div>
              <UserAccountChangedDataCard
                inputName={'name'}
                inputValue={editedUser.name}
                label={'Nombre'}
                nombre={'Nombre'}
                placeholder={'nombre'}
                text={'Actualiza su nombre en la plataforma: incluye nombre y apellidos completos'}
                type={'text'}
                value={editedUser.name}
                onChange={(e) => handleChange(e)}
                onSubmit={handleSubmit}
              />

              {/* <div className={style.buttonContainer}>
                    <button type= "submit" className={style.buttonRegistrer}>Guardar</button>
                </div> */}
            </div>
          )}
          {display.emailEdit && (
            <div className={style.contentformCard}>
              <div className={style.BackButtonUserAccountContainer}>
                <button
                  className={style.BackButtonUserAccountChangedCard}
                  name="emailEdit"
                  value={false}
                  onClick={handleDisplaySelect}
                >
                  <BiArrowBack
                    className={style.BackButtonUserAccountChangedCardSign}
                    onClick={handleDisplaySelect}
                  />
                  Atras
                </button>
              </div>

              <UserAccountChangedDataCard
                inputName={'email'}
                inputType={'email'}
                inputValue={editedUser.email}
                label={'Email'}
                nombre={'Email'}
                placeholder={'email'}
                text={'Actualiza su correo electronico y pulse en guardar'}
              />

              {/* <div className={style.buttonContainer}>
                            <button className={style.buttonRegistrer}>Guardar</button>
                        </div> */}
            </div>
          )}
          {display.usernameEdit && (
            <div className={style.contentformCard}>
              <div className={style.BackButtonUserAccountContainer}>
                <button
                  className={style.BackButtonUserAccountChangedCard}
                  name="usernameEdit"
                  value={false}
                  onClick={handleDisplaySelect}
                >
                  <BiArrowBack
                    className={style.BackButtonUserAccountChangedCardSign}
                    onClick={handleDisplaySelect}
                  />
                  Atras
                </button>
              </div>

              <UserAccountChangedDataCard
                inputName={'username'}
                inputType={'email'}
                inputValue={editedUser.username}
                label={'Nombre de usuario'}
                nombre={'Nombre de Usuario'}
                placeholder={'Nombre de usuario'}
                text={'Actualiza su nombre de usuario y pulse en guardar'}
              />
              {/* <div className={style.buttonContainer}>
                  <button className={style.buttonRegistrer}>Guardar</button>
              </div> */}
            </div>
          )}
          {display.suscripcionEdit && (
            <div className={style.contentformCard}>
              <div className={style.BackButtonUserAccountContainer}>
                <button
                  className={style.BackButtonUserAccountChangedCard}
                  name="suscripcionEdit"
                  value={false}
                  onClick={handleDisplaySelect}
                >
                  <BiArrowBack
                    className={style.BackButtonUserAccountChangedCardSign}
                    onClick={handleDisplaySelect}
                  />
                  Atras
                </button>
              </div>

              {infoUser.subscription === 'free' && (
                <div className={style.changeDataContainer}>
                  <div className={style.formTitle}>Suscripcion</div>
                  <div className={style.changeDataContainerText}>
                    Estas suscrito al plan Free de BOOKYOU, le invitamos a suscribirse a BOOKYOU
                    Premium
                  </div>
                  <div className={style.buttonContainer}>
                    <Link to="/suscripcion">
                      <button className={style.buttonRegistrer}>Suscribirse</button>
                    </Link>
                  </div>
                </div>
              )}
              {infoUser.subscription === 'premium' && (
                <div className={style.changeDataContainer}>
                  <div className={style.formTitle}>Suscripcion</div>
                  <div className={style.changeDataContainerText}>
                    En este momento esta suscrito al plan premium de BOOKYOU Desea Cancelar su
                    suscripcion?
                  </div>
                  <div className={style.buttonContainer}>
                    <button className={style.buttonRegistrer}>Cancelar Suscripcion</button>
                  </div>
                </div>
              )}
            </div>
          )}
          {display.accountDeleteEdit && (
            <div className={style.changeDataContainer}>
              <div className={style.BackButtonUserAccountContainer}>
                <button
                  className={style.BackButtonUserAccountChangedCard}
                  name="accountDeleteEdit"
                  value={false}
                  onClick={handleDisplaySelect}
                >
                  <BiArrowBack
                    className={style.BackButtonUserAccountChangedCardSign}
                    onClick={handleDisplaySelect}
                  />
                  Atras
                </button>
              </div>
              <div className={style.formTitle}>Borrar Cuenta</div>
              <div className={style.changeDataContainerText}>
                Al eliminar su cuenta, sus datos seran borrados y no podra acceder a BOOKYOU.
              </div>
              <div className={style.buttonContainer}>
                <button className={style.buttonRegistrer} onClick={handleDelete}>
                  Borrar Cuenta
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default UserAccount
