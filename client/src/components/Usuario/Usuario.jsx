import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import jwtDecode from 'jwt-decode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { BiEdit } from 'react-icons/bi'
import { useParams } from 'react-router-dom'

import Pagination from '../Pagination/Pagination'
import NavBar from '../NavBar/NavBar'
import { getUserById } from '../../redux/actions'
import { getOneUser } from '../../redux/actions/index'

import UserBookCard from './UserBookCard'
import style from './Usuario.module.css'
import perfil from './perfil.png'

export const Usuario = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [currentPage, setCurrentPage] = useState(0)
  var decoded = jwtDecode(window.localStorage.getItem('token'))

  useEffect(() => {
    dispatch(getUserById(decoded.id))
  })

  const infoUser = useSelector((state) => state.userLogged)

  const [books, setBooks] = useState(true) /* actualizar estado libros orden alf */

  useEffect(() => {
    dispatch(getOneUser(id))
  }, [dispatch])

  const oneUser = useSelector((state) => state.oneUser)

  console.log(oneUser.books)

  useEffect(() => {
    dispatch(getUserById(decoded.id))
    Swal.fire({
      title: 'Pagina en Construccion',
      text: 'Esta pagina esta en construccion, pronto estara disponible, podes mirar un poco de lo que se viene.',
      icon: 'info',
      confirmButtonText: 'Ok',
    })
  }, [])

  const libros = [0, 1, 2, 3, 4, 5, 6, 7, 8]

  const [profileSection, setProfileSection] = useState({
    misLibroSection: true,
    misFavoritoSection: false,
  })

  //data pagination-----------------------
  const totalPages = Math.ceil(libros.length / 5)
  const filterBooks = () => {
    const filtered = libros.slice(currentPage * 5, currentPage * 5 + 5)

    return filtered
  }
  //Pagina Anterior
  const prevPage = () => {
    if (currentPage >= 1) setCurrentPage(currentPage - 1)
  }
  //Pagina siguiente
  const nextPage = () => {
    if (currentPage < totalPages && libros.length - 5 > currentPage * 5) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div style={{ backgroundColor: '#fff', height: '100vh' }}>
      <div className=" grid col-span-3">
        <NavBar />
      </div>
      <img alt="Mi imagen" className={style.perfil} src={infoUser.img || perfil} />
      <div className={style.nombre}>
        <h3 className={style.nombre1}>{infoUser.name}</h3>
        <Link to="/usuario/cuenta">
          <div className={style.editAccountLink}>
            Editar cuenta <BiEdit className={style.editAccountLinkIcon} />
          </div>
        </Link>
        <p className={style.p1}>Apodo</p>
        <p>
          Soy un amante de los libros, me encanta sumergirme en historias de todo tipo y viajar a
          través de las palabras. En mis tiempos libres busco nuevos títulos y comparto mis
          recomendaciones con amigos y familiares. Siempre busco nuevos amigos con los que hablar
          sobre mis libros favoritos. La vida es como un libro, algunas páginas son alegres, otras
          tristes, pero todas son necesarias para completar la historia. - Paulo Coelho Autor
          brasileño
        </p>
      </div>

      <div style={{ position: 'absolute', top: '350px', left: '300px' }}>
        <button
          style={{ margin: '10px' }}
          onClick={() => setProfileSection({ misLibroSection: true, misFavoritoSection: false })}
        >
          {' '}
          <h2 style={{ fontWeight: 'bold', fontSize: '31px' }}>Mis Libros</h2>
        </button>
        <button
          style={{ margin: '10px' }}
          onClick={() => setProfileSection({ misLibroSection: false, misFavoritoSection: true })}
        >
          {' '}
          <h2 style={{ fontWeight: 'bold', fontSize: '31px' }}>Mis Favoritos</h2>
        </button>

        {/* seccion mis libros */}
        {profileSection.misLibroSection && (
          <div>
            <div>
              <div>
                {libros.length > 0 ? (
                  filterBooks().map((book, i) => <UserBookCard key={i} />)
                ) : (
                  <p>Sin libros aun</p>
                )}
              </div>
            </div>

            <div className={style.paginado}>
              <Pagination
                filterBooks={oneUser.books}
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
