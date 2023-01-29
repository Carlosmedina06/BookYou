import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import NavBar from '../NavBar/NavBar'
import Pagination from '../Pagination/Pagination'

import perfil from './perfil.png'
import style from './Usuario.module.css'
import UserBookCard from './UserBookCard'

export const Usuario = () => {
  const [currentPage, setCurrentPage] = useState(0)

  const libros = [0, 1, 2, 3, 4, 5, 6, 7, 8]

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
      <img alt="Mi imagen" className={style.perfil} src={perfil} />
      <div className={style.nombre}>
        <h3 className={style.nombre1}>Nombre de Usuario</h3>
        <p className={style.p1}>Apodo</p>
        <p>
          Soy un amante de los libros, me encanta sumergirme en historias de todo tipo y viajar a
          través de las palabras. En mis tiempos libres busco nuevos títulos y comparto mis
          recomendaciones con amigos y familiares. Siempre busco nuevos amigos con los que hablar
          sobre mis libros favoritos. "La vida es como un libro, algunas páginas son alegres, otras
          tristes, pero todas son necesarias para completar la historia." - Paulo Coelho (Autor
          brasileño)
        </p>
      </div>

      {
        <div style={{ position: 'absolute', top: '300px', left: '300px' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '31px' }}>Mis Libros</h2>

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
              filterBooks={filterBooks().length}
              nextPage={nextPage}
              prevPage={prevPage}
              totalPages={currentPage + 1}
            />
          </div>
          <div />
        </div>
      }
    </div>
  )
}
