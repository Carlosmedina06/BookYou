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
import { getOneUser} from '../../redux/actions/index'

import UserBookCard from './UserBookCard'
import style from './Usuario.module.css'
import perfil from './perfil.png'

export const Usuario = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [currentPage, setCurrentPage] = useState(0)

  var decoded = jwtDecode(window.localStorage.getItem('token'))

  // useEffect(() => {
  //   dispatch(getOneUser(decoded.id))
  // })

  // const infoUser = useSelector((state) => state.userLogged)

  const [books, setBooks] = useState(true) /* actualizar estado libros orden alf */

  // useEffect(() => {
  //   dispatch(getOneUser(id))
  // }, [dispatch])

  const oneUser = useSelector((state) => state.oneUser)

  console.log(oneUser.books)

  useEffect(() => {
    dispatch(getOneUser(decoded.id))
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

      <img alt="Mi imagen" className={style.perfil} src={oneUser.img || perfil} />
      <div className={style.nombre}>

        <h3 className={style.nombre1}>{oneUser.name}</h3>
        
        
        <p className={style.p1}>Apodo</p>
      </div>
      <img alt="Mi imagen" className={style.perfil} src={oneUser.img} />
      
      <div className={style.nombre}>
        <h3 className={style.nombre1}>{oneUser.name}</h3>
        <p className={style.p1}>{oneUser.username}</p>

        <p>
          Soy un amante de los libros, me encanta sumergirme en historias de todo tipo y viajar a
          través de las palabras. En mis tiempos libres busco nuevos títulos y comparto mis
          recomendaciones con amigos y familiares. Siempre busco nuevos amigos con los que hablar
          sobre mis libros favoritos. La vida es como un libro, algunas páginas son alegres, otras
          tristes, pero todas son necesarias para completar la historia. - Paulo Coelho Autor
          brasileño
        </p>
        <Link to="/cuenta">
        <div className={style.editAccountLink}>
            Editar cuenta <BiEdit className={style.editAccountLinkIcon} />
          </div>
        </Link>
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
      </div>
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

          <div style={{ position: 'absolute', top: '300px', left: '300px' }}>
            <h2 style={{ fontWeight: 'bold', fontSize: '31px' }}>Mis Libros</h2>
            <button className={style.boton} onClick={() => setBooks(!books)}>
              {books ? 'Ocultar ' : 'Mostrar '}
              <FontAwesomeIcon
                icon={books ? faChevronUp : faChevronDown}
                style={{ fontSize: '0.7em' }}
              />
            </button>

            {books && (
              <div>
                <div>
                  {oneUser.books ? (
                    oneUser.books.map((book, i) => (
                      <UserBookCard
                        key={i}
                        author={book.author}
                        description={book.description}
                        id={book.id}
                        img={book.img}
                        subs={book.subscription}
                        title={book.title}
                      />
                    ))
                  ) : (
                    <p>Sin libros aun</p>
                  )}
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
      )}
    </div>
  )
}
