import React from "react";
import style from './UserAccount.module.css'
import { Link } from "react-router-dom";
import { AiOutlineRight } from 'react-icons/ai';
import { TiDeleteOutline} from 'react-icons/ti';
import NavBar from "../NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import jwtDecode from 'jwt-decode'
import { useEffect } from "react";
import { getOneUser } from "../../redux/actions";

const UserAccount = () =>{
    const dispatch = useDispatch()

    var decoded = jwtDecode(window.localStorage.getItem('token'))
    useEffect(()=>{
     dispatch(getOneUser(decoded.id))
    })
  
    const infoUser = useSelector((state => state.userLogged))
return(
    <div className={style.mainContainer}>
        <div style={{ position: 'absolute', top: '0px', left: '0px' }}>
          <NavBar />
        </div>
      <div className={style.cardContainer}>
        <div>
          {
            <div className={style.contentformCard}>
              <div className={style.formTitle}>
                <p>Informacion de cuenta </p>
              </div>
              
               <div className={style.detailAccountItem}>
               
                  <div className={style.detailAccountItemName}>
                      <h2> Nombre</h2>
                  </div>
                  <div className={style.detailAccountItemData}>{infoUser.name}</div>
                  <div className={style.detailAccountItemSign}><AiOutlineRight/></div>
               </div>
               <div className={style.detailAccountItem}>
               
                  <div className={style.detailAccountItemName}>
                      <h2> Email</h2>
                  </div>
                  <div className={style.detailAccountItemData}>{infoUser.email}</div>
                  <div className={style.detailAccountItemSign}><AiOutlineRight/></div>
               </div>
               <div className={style.detailAccountItem}>
               
               <div className={style.detailAccountItemName}>
                   <h2> Usuario</h2>
               </div>
               <div className={style.detailAccountItemData}>{infoUser.username}</div>
               <div className={style.detailAccountItemSign}><AiOutlineRight/></div>
            </div>
            <div className={style.detailAccountItem}>
               
                  <div className={style.detailAccountItemName}>
                      <h2> suscripcion</h2>
                  </div>
                  <div className={style.detailAccountItemData}>{infoUser.subscription}</div>
                  <div className={style.detailAccountItemSign}><AiOutlineRight/></div>
               </div>
               <div className={style.detailAccountItem}>
               
                  <div className={style.detailAccountItemName}>
                      <h2> Borrar Cuenta</h2>
                  </div>
                  
                  <div className={style.detailAccountItemSign}><TiDeleteOutline/></div>
               </div>
            </div>
        }
          
        </div>
      </div>
    </div>
)}


export default UserAccount