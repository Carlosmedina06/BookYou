import react, { useState } from "react";
import style from './UserAccount.module.css'
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineRight } from 'react-icons/ai';
import {BiArrowBack } from 'react-icons/bi';
import { TiDeleteOutline} from 'react-icons/ti';
import NavBar from "../NavBar/NavBar";
import { useDispatch, useSelector} from "react-redux";
import jwtDecode from 'jwt-decode'
import { useEffect } from "react";
import { getOneUser, suscription } from "../../redux/actions";
import UserAccountRow from "./components/userAccountRow";
import axios from "axios";
import UserAccountChangedDataCard from "./components/UserAccountChangedDataCard";
const UserAccount = () =>{
    let suscription= "free"
    const dispatch = useDispatch()
  

    var decoded = jwtDecode(window.localStorage.getItem('token'))
   

    useEffect(()=>{
     dispatch(getOneUser(decoded.id))
    },[dispatch])
     
    const infoUser = useSelector((state => state.oneUser))
    
    const[NameCard, showNameCard] = useState(true)
    const [display, setDisplay] = useState({
     main: true,
    nameEdit: false,
    emailEdit: false,
    usernameEdit: false,
    suscripcionEdit: false,
    accountDeleteEdit: false
    })
    // codigo de la edicion de usuarios

    const users = useSelector((state) => state.users)
   
    const [rata, setRata] = useState(true)
    const navigate = useNavigate()
  
    
    const [input, setInput] = useState({
      search: '',
      select: '',
    })

     const handleDisplaySelect = (e) =>{
        let newValue  
       if(e.target.value === "false"){ newValue = false}
       if(e.target.value === "true") { newValue = true}
  setDisplay({...display, [e.target.name]: newValue})
   
  setEditedUser({
    name:  infoUser.name,
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
        name:  infoUser.name,
        username: infoUser.username,
        email: infoUser.email,
        subscription: infoUser.subscription,
        role: infoUser.role,
        id: infoUser.id,
      })
    }
    // const handleClickSearch = () => {
    //   const user = users.filter((el) => {
    //     return el.name === input.search
    //     //return el.name.toLowerCase().trim() === input.search.toLowerCase().trim()
    //   })
  
    //   setEditedUser({
    //     name: user[0].name,
    //     username: user[0].username,
    //     email: user[0].email,
    //     subscription: user[0].subscription,
    //     role: user[0].role,
    //     id: user[0].id,
    //   })
    // }
  
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
  
    const handleDelete = async (e) => {
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
return(
    <div className={style.mainContainer}>
        <div style={{ position: 'absolute', top: '0px', left: '0px' }}>
          <NavBar />
        </div>
      <div className={style.cardContainer}>
    
        <div>
        
          { (display.main && !display.nameEdit && !display.emailEdit && !display.usernameEdit && !display.suscripcionEdit && !display.accountDeleteEdit) &&
              <div className={style.contentformCard}>
              <div className={style.formTitle}>
                <p>Informacion de cuenta </p>
              </div>
              {/* <button  name="nameEdit"  value="true" onClick={handleDisplaySelect}>w */}
                <UserAccountRow  
                   name={"nameEdit"}  
                   value={true} 
                   onClick={handleDisplaySelect} 
                   label={"Nombre"} 
                   data={infoUser.name} 
                   sign={"arc"}
                   />
              {/* </button> */}
              <UserAccountRow 
                  name={"emailEdit"}  
                  value={"true"} 
                  onClick={handleDisplaySelect} 
                  label={"Email"} 
                  data={infoUser.email}
                  sign={"arc"}
              />  
              <UserAccountRow 
                name={"usernameEdit"}  
                value={"true"} 
                onClick={handleDisplaySelect} 
                label={"Usuario"}
                data={infoUser.username}

                 sign={"arc"}
                 />   
              <UserAccountRow 
              name={"suscripcionEdit"}  
              value={"true"} 
              onClick={handleDisplaySelect} 
              label={"Suscripcion"} 
              data={infoUser.subscription} 
              sign={"arc"}/>  
              <UserAccountRow 
              name={"accountDeleteEdit"}  
              value={"true"} 
              onClick={handleDisplaySelect} 
              label={"Borrar cuenta"} 
              sign={"delete"}/>
              
              </div>
        }
        { display.nameEdit && 
            <div className={style.contentformCard}> 
              <div className={style.BackButtonUserAccountContainer}>
                <button 
                        name="nameEdit" 
                        className={style.BackButtonUserAccountChangedCard}  
                        value={false} onClick={handleDisplaySelect}>
                        <BiArrowBack onClick={handleDisplaySelect} 
                        className={style.BackButtonUserAccountChangedCardSign}/>
                        Atras
                  </button>
              </div>
              <UserAccountChangedDataCard 
                  nombre={"Nombre"} 
                  text={"Actualiza su nombre en la plataforma: incluye nombre y apellidos completos"}
                  label={"Nombre"}
                  inputName={"name"}
                  placeholder={"nombre"}
                  type={"text"}
                  inputValue={editedUser.name}
                  value={editedUser.name}
                  onChange={(e) => handleChange(e)}
                  onSubmit={handleSubmit}
              />
        
             {/* <div className={style.buttonContainer}>
                    <button type= "submit" className={style.buttonRegistrer}>Guardar</button>
                </div> */}
            </div>
        }
        {
          display.emailEdit && 
          <div className={style.contentformCard}> 
          
          <div className={style.BackButtonUserAccountContainer}>
                <button 
                        name="emailEdit" 
                        className={style.BackButtonUserAccountChangedCard}  
                        value={false} onClick={handleDisplaySelect}>
                        <BiArrowBack onClick={handleDisplaySelect} 
                        className={style.BackButtonUserAccountChangedCardSign}/>
                        Atras
                  </button>
              </div>
            
           <UserAccountChangedDataCard 
           nombre={"Email"} 
           text={"Actualiza su correo electronico y pulse en guardar"}
           label={"Email"}
           inputName={"email"}
           placeholder={"email"}
           inputValue={editedUser.email}
           inputType={"email"}/>
           
                    {/* <div className={style.buttonContainer}>
                            <button className={style.buttonRegistrer}>Guardar</button>
                        </div> */}
                    </div>

        }
        {
          display.usernameEdit && 
          <div className={style.contentformCard}> 
          
          <div className={style.BackButtonUserAccountContainer}>
                <button 
                        name="usernameEdit" 
                        className={style.BackButtonUserAccountChangedCard}  
                        value={false} onClick={handleDisplaySelect}>
                        <BiArrowBack onClick={handleDisplaySelect} 
                        className={style.BackButtonUserAccountChangedCardSign}/>
                        Atras
                  </button>
              </div>
            
            <UserAccountChangedDataCard 
           nombre={"Nombre de Usuario"} 
           text={"Actualiza su nombre de usuario y pulse en guardar"}
           label={"Nombre de usuario"}
           inputName={"username"}
           placeholder={"Nombre de usuario"}
           inputValue={editedUser.username}
           inputType={"email"}/>
           {/* <div className={style.buttonContainer}>
                  <button className={style.buttonRegistrer}>Guardar</button>
              </div> */}
          </div>

        }
        {
          display.suscripcionEdit && 
          <div className={style.contentformCard}> 
          
          <div className={style.BackButtonUserAccountContainer}>
                <button 
                        name="suscripcionEdit" 
                        className={style.BackButtonUserAccountChangedCard}  
                        value={false} onClick={handleDisplaySelect}>
                        <BiArrowBack onClick={handleDisplaySelect} 
                        className={style.BackButtonUserAccountChangedCardSign}/>
                        Atras
                  </button>
              </div>
           
            { infoUser.subscription === "free" &&
            <div className={style.changeDataContainer} >
                  <div className={style.formTitle}>
                            Suscripcion
                            </div>
                            <div className={style.changeDataContainerText}>
                             Estas suscrito al plan Free de BOOKYOU,
                              le invitamos a suscribirse a BOOKYOU Premium
                            </div>
                            <div className={style.buttonContainer}>
                   <Link to="/suscripcion">
                  <button className={style.buttonRegistrer}>Suscribirse</button>
                   </Link>
              </div>
                          


             </div>
        }
           { infoUser.subscription === "premium" &&
            <div className={style.changeDataContainer} >
                  <div className={style.formTitle}>
                            Suscripcion
                            </div>
                            <div className={style.changeDataContainerText}>
                              En este momento esta suscrito al plan premium de BOOKYOU 
                              Desea Cancelar su suscripcion?
                            </div>
                            <div className={style.buttonContainer}>
                    
                  <button className={style.buttonRegistrer}>Cancelar Suscripcion</button>
                  
              </div>
                          


             </div>
        }

          </div>

        }
        {display.accountDeleteEdit && 
          <div className={style.changeDataContainer} >
             <div className={style.BackButtonUserAccountContainer}>
                <button 
                        name="accountDeleteEdit" 
                        className={style.BackButtonUserAccountChangedCard}  
                        value={false} onClick={handleDisplaySelect}>
                        <BiArrowBack onClick={handleDisplaySelect} 
                        className={style.BackButtonUserAccountChangedCardSign}/>
                        Atras
                  </button>
              </div>
          <div className={style.formTitle}>
                    Borrar Cuenta
                    </div>
                    <div className={style.changeDataContainerText}>
                     Al eliminar su cuenta, sus datos seran borrados y 
                     no podra acceder a BOOKYOU.
                    </div>
                    <div className={style.buttonContainer}>
          
          <button  onClick={handleDelete} className={style.buttonRegistrer}>Borrar Cuenta</button>
      
      </div>
                  


     </div>
          


        }
           
        </div>
      </div>
    </div>
)}


export default UserAccount