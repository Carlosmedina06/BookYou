import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { BiEdit } from 'react-icons/bi'
import { useParams } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

import Pagination from '../Pagination/Pagination'
import NavBar from '../NavBar/NavBar'
import { getOneUser } from '../../redux/actions/index'

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
  }, [dispatch, id])

  const oneUser = useSelector((state) => state.oneUser)

  const [books, setBooks] = useState(true) /* actualizar estado libros orden alf */

  const [profileSection, setProfileSection] = useState({
    misLibroSection: true,
    misFavoritoSection: false,
  })

  const userVerification = (token, item) => {
    if (!token) return false
    let decoded = jwt_decode(token)

    if (decoded.role === 'admin') return true
    if (decoded.id === item.id) return true

    return false
  }
  //data pagination-----------------------
  const totalPages = oneUser.books ? Math.ceil(oneUser.books.length / 5) : 0

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

      <img
        alt="Mi imagen"
        className={style.perfil}
        src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023887_1706x960.jpg"
      />

      <div className={style.nombre}>
        <h3 className={style.nombre1}>{oneUser.name}</h3>
        <p className={style.p1}>{oneUser.username}</p>
        {userVerification(token, oneUser) && (
          <Link to="/cuenta">
            <div className={style.editAccountLink}>
              Editar cuenta <BiEdit className={style.editAccountLinkIcon} />
            </div>
          </Link>
        )}
      </div>

      <div style={{ position: 'absolute', top: '230px', left: '300px' }}>
        <button
          onClick={() => setProfileSection({ misLibroSection: true, misFavoritoSection: false })}
        >
          {' '}
          <h2
            style={{
              paddingTop: '10px',
              fontWeight: 'bold',
              fontSize: '31px',
            }}
          >
            {userVerification(token, oneUser) ? 'Mis Libros' : 'Libros'}
          </h2>
        </button>

        {/* seccion mis libros */}
        {books && (
          <div>
            <div>
              <div>
                {oneUser.books && oneUser.books.length > 0 ? (
                  filterBooks().map((book) => (
                    <UserBookCard
                      key={book.id}
                      author={book.author}
                      book={book}
                      id={book.id}
                      img={book.img}
                      rate={book.rate}
                      subs={book.subscription}
                      title={book.title}
                    />
                  ))
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
