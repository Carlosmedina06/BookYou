import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import jwtDecode from 'jwt-decode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { BiEdit } from 'react-icons/bi'
import { useParams } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import axios from 'axios'

import Pagination from '../Pagination/Pagination'
import NavBar from '../NavBar/NavBar'

import { getOneUser,getUsers} from '../../redux/actions/index'

import UserBookCard from './UserBookCard'
import style from './Usuario.module.css'
import perfil from './perfil.png'

export const Usuario = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [currentPage, setCurrentPage] = useState(0)

  const token = localStorage.getItem('token')
  let decoded = token ? jwt_decode(token) : null


  useEffect(() => {
    dispatch(getOneUser(id))
    dispatch(getOneUser())
  },[])


  const oneUser = useSelector((state) => state.oneUser)
  const [books, setBooks] = useState(true) /* actualizar estado libros orden alf */

  const [profileSection, setProfileSection] = useState({
    misLibroSection: true,
    misFavoritoSection: false,
  })

  //data pagination-----------------------
  const totalPages = Math.ceil(oneUser.books.length / 5)
  const filterBooks = () => {
    const filtered = oneUser.books.slice(currentPage * 5, currentPage * 5 + 5)

    return filtered
  }
  //Pagina Anterior
  const prevPage = () => {
    if (currentPage >= 1) setCurrentPage(currentPage - 1)
  }
  //Pagina siguiente
  const nextPage = () => {
    if (currentPage < totalPages && oneUser.books.length - 5 > currentPage * 5) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div style={{ backgroundColor: '#fff', height: '100%' }}>
      <div className=" grid col-span-3">
        <NavBar />
      </div>


      <img alt="Mi imagen" className={style.perfil} src={oneUser.img || perfil} />
      
      <div className={style.nombre}>
        <h3 className={style.nombre1}>{oneUser.name}</h3>
        <p className={style.p1}>{oneUser.username}</p>
        <Link to="/cuenta">
        <div className={style.editAccountLink}>
            Editar cuenta <BiEdit className={style.editAccountLinkIcon} />
          </div>
        </Link>
      </div>

      <div style={{ position: 'absolute', top: '230px', left: '300px' }}>
        <button
          onClick={() => setProfileSection({ misLibroSection: true, misFavoritoSection: false })}
        >
          {' '}
          <h2 style={{ 
          paddingTop: '10px',
          fontWeight: 'bold', 
          fontSize: '31px',
          border: '3px solid #010326',
          borderRadius: '10px',
          height: '50px',
          width: '210px'
          }}>Mis Libros</h2>
        </button>
        <button
          style={{ marginLeft: '50px' }}
          onClick={() => setProfileSection({ misLibroSection: false, misFavoritoSection: true })}
        >
          {' '}
          <h2 style={{ 
          paddingTop: '10px',
          fontWeight: 'bold', 
          fontSize: '31px',
          border: '3px solid #010326',
          borderRadius: '10px',
          height: '50px',
          width: '210px'
          }}>Mis Favoritos</h2>
        </button>

        {/* seccion mis libros */}
        {profileSection.misLibroSection && (
          <div>
            <div>
              <div>
                {oneUser.books.length > 0 ? (
                  filterBooks().map((book, i) => 
                  <UserBookCard 
                    key = {i}
                    title = {book.title}
                    description = {book.description}
                    subs = {book.subs}
                    img = {book.img}
                    id = {book.id}
                    author = {book.author}
                    />)
                ) : (
                  <p>Sin libros aun</p>
                )}
              </div>
            </div>

            <div className={style.paginado}>
              <Pagination
                filterBooks={decoded.books}
                nextPage={nextPage}
                prevPage={prevPage}
                totalPages={currentPage + 1}
              />
            </div>
          </div>
        )}
        <div />
      </div>
    </div>
  )
}
